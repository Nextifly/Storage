'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    return router.push('/auth')
  }, [])
  
  return (
    <>
      
    </>
  )
}

export default Page