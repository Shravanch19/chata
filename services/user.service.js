import bcrypt from "bcryptjs"
import { findUserByEmail, findUserByUsername, createUser, createOAuthUser } from "@/repositories/user.repositories";

export async function registerUser(data) {
  const { email, username, password } = data

  const emailExists = await findUserByEmail(email);
  if (emailExists) {
    throw new Error("Email already exists");
  }

  const usernameExists = await findUserByUsername(username);
  if (usernameExists) {
    throw new Error("Username already exists");
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await createUser({ ...data, password: hashedPassword });

  return user;
}

export async function loginWithCredentials(email, password) {

  const user = await findUserByEmail(email)

  if (!user) return null

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) return null

  return {
    id: user._id.toString(),
    email: user.email,
    name: user.username
  }
}

export async function handleGoogleLogin(userData) {

  const existingUser = await findUserByEmail(userData.email)

  if (!existingUser) {

    const username = userData.name
      .replace(/\s+/g, "")
      .toLowerCase()

    const newUser = await createOAuthUser({
      email: userData.email,
      username,
      image: userData.image,
      provider: "google"
    })

    return newUser
  }

  return existingUser
}