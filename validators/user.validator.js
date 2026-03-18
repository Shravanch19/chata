import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  avatar: z.string().optional(),
  bio: z.string().optional(),
});