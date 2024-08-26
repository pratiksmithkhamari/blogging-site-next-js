import { BadgePlus, MailCheck, ReceiptText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[20%] border-r-2 mt-4 flex justify-center h-[80vh] pt-7 pl-3'>
      <div className='flex flex-col gap-4'>
      <Link href={'/admin/addblog'} className='flex items-center gap-2 border rounded-md p-2 font-semibold
      '><BadgePlus />Add Blogs</Link>
      <Link href={'/admin/allblogs'} className='flex items-center gap-2 border rounded-md p-2 font-semibold
      '><ReceiptText />Blog Lists</Link>
      <Link href={'/admin/subscription'} className='flex items-center gap-2 border rounded-md p-2 font-semibold
      '><MailCheck />
      Subscriptions</Link>
      </div>
    </div>
  )
}

export default Sidebar
