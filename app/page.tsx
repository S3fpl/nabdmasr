import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import Home from "@/components/Home/Home";
import React from "react";
import SigninWithGoogle from "./_components/SigninWithGoogle";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-white text-center mt-10">
      {session ? (
        <h1>Welcome {session.user?.name}</h1>
      ) : (
        <SigninWithGoogle />
      )}
      <Home />
    </div>
  );
}
