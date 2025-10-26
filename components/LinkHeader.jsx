import React from 'react'
import Link from 'next/link'
const LinkHeader = ({path,text}) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-w-screen h-[100px] bg-blue-700">
      <h1 className='text-2xl'>{text}</h1>
      <div>
         <Link href={"/"} className="text-white underline">
        Home
            </Link>
            {" | "}
        <Link href={path} className="text-white underline">
         {text}
            </Link>
      </div>

    </div>
  )
}

export default LinkHeader
