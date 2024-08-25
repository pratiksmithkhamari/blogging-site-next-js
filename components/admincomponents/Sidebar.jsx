import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[20%] border-r-2 mt-4 flex justify-center items-center pl-3'>
      <div className='flex flex-col gap-4'>
      <Link href={'/admin/addblog'}>add a post</Link>
      <Link href={'/admin/allblogs'}>view all post</Link>
      <Link href={'/admin/subscription'}>add a post</Link>
      </div>
    </div>
  )
}

export default Sidebar
