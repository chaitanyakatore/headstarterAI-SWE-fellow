import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
