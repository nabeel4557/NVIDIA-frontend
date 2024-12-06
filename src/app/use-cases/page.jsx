'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'



export default function Page() {

    const router = useRouter()

    useEffect(()=>{
        router.push('/use-cases/0')

    },[])

  return (
    <div>page</div>
  )
}
