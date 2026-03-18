import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

import { connectTodb } from "@/lib/mongodb"

import { 
  loginWithCredentials, 
  handleGoogleLogin 
} from "@/services/user.service"

const handler = NextAuth({

  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    CredentialsProvider({

      name: "credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {

        await connectTodb()

        const user = await loginWithCredentials(
          credentials.email,
          credentials.password
        )

        return user
      }

    })

  ],

  session: {
    strategy: "jwt"
  },

  callbacks: {

    async signIn({ user, account }) {

      if (account.provider === "google") {

        await connectTodb()

        await handleGoogleLogin(user)
      }

      return true
    },

    async jwt({ token, user }) {

      if (user) {
        token.id = user.id
      }

      return token
    },

    async session({ session, token }) {

      if (session.user) {
        session.user.id = token.id
      }

      return session
    }

  },

  pages: {
    signIn: "/login"
  },

  secret: process.env.NEXTAUTH_SECRET

})

export { handler as GET, handler as POST }