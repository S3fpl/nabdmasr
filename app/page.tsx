import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import Home from "@/components/Home/Home";
import React from "react";
import SigninWithGoogle from "./_components/SigninWithGoogle";
import Image from "next/image";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-white text-center mt-10">
      {session ? (
        <div>
          <h1>Welcome {session.user?.name}</h1>
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt="profile"
              width={100}
              height={100}
            />
          )}

        </div>
      ) : (
        <SigninWithGoogle />
      )}
      <Home />
    </div>
  );
}
