import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import Home from "@/components/Home/Home";
import React from "react";
import UserData from "@/components/layout/UserData";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-white text-center mt-10 ">
      <UserData session={session} />
      <Home />
    </div>
  );
}
