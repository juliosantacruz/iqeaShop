'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import styled from 'styled-components'


function SignOutButton({className}:any) {
  const onSignOut=()=>{
    signOut({ callbackUrl: '/' })

  }
  return (
    <div className={className}>
      <button onClick={onSignOut} className='signOutButton'>Cerrar Session</button>

    </div>
  )
}

export default styled(SignOutButton)`

  .signOutButton{
    border:none;
    background-color:#ffffff00;
    font-size:16px;

  }

`
