import User from "@/models/User";

export async function createUser(data){
    try {
        return await User.create(data);
    } catch (error) {
        throw new Error("Error creating user");
    }
}

export async function findUserByEmail(email) {
    try{
        return await User.findOne({ email });
    } catch (error) {
        throw new Error("Error finding user by email");
    }
}

export async function findUserByUsername(username) {
    try {
        return await User.findOne({ username });
    } catch (error) {
        throw new Error("Error finding user by username");
    }
}

export async function createOAuthUser(data) {
    try{
        return await User.create(data);
    } catch (error) {
        throw new Error("Error creating OAuth user");
    }
}

export async function findAllUsers() {
    try {
        return await User.find();
    } catch (error) {
        throw new Error("Error finding all users");
    }
}