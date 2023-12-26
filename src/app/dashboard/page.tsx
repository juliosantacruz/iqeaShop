'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function DashboardPage() {

  const {data:session, status}= useSession()
  console.log(session, status)
  return (
    <>
    <div>page</div>

  </>
  )
}



