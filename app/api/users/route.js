import { connectTodb } from "@/lib/mongodb";
import { registerUser } from "@/services/user.service";
import { createUserSchema } from "@/validators/user.validator";
import { findAllUsers } from "@/repositories/user.repositories";

export async function POST(req) {
  try {
    await connectTodb();

    const body = await req.json();
    const parsed =  createUserSchema.parse(body);
    console.log("Received body:", parsed);

    const user = await registerUser(parsed);

    return Response.json({
      success: true,
      user
    });

  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    await connectTodb();
    const users = await findAllUsers();
    return Response.json({ success: true, users });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}