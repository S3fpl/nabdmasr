import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 30 days
        // updateAge: 24 * 60 * 60, // 24 hoursupdate session if user is active
    },
    jwt:{

    },
    callbacks:{
        async jwt({ token, account }) {
            if (account) {
              token.accessToken = account.access_token;
            }
            return token;
          },
    },
    secret: process.env.NEXTAUTH_SECRET,
  }