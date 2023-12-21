'use client'
import React from 'react'
import { signOut } from 'next-auth/react'


export default function SignOutButton() {
  const onSignOut=()=>{
    signOut({ callbackUrl: '/' })

  }
  return (
    <button onClick={onSignOut}>Cerrar Session</button>
  )
}
