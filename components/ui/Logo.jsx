import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <span  className="text-[2rem] cursor-pointer font-dancing font-bold">
          Feane
      </span>
    </Link>
  )
}

export default Logo