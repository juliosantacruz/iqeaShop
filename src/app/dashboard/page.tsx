import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  console.log(session)
  return (
    <>
    <div>page</div>

  </>
  )
}



