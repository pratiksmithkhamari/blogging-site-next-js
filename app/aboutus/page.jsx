import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-6xl  mx-auto sm:mt-16 mt-0'>
      <div className='flex sm:flex-row md:flex-row flex-col gap-9'>
        <Image src={'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D'} height={200} width={200} alt=''className='h-[300px] w-[300px] rounded-md mx-auto' />
        <div className='p-4 sm:p-0 md:p-0'>
          <h2 className='text-3xl font-bold text-slate-800'>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut cumque itaque, explicabo culpa maxime tenetur modi possimus, facilis quibusdam dolore est assumenda laboriosam minima minus ipsum vero voluptatum tempora qui nostrum dolorem. Nesciunt tenetur tempora blanditiis deserunt, sit debitis ipsa? Numquam quis iste consequuntur voluptas commodi architecto porro?</p>
          <h2 className='text-2xl font-semibold text-slate-700 '>Vision</h2>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem consectetur sequi possimus impedit, molestias nobis ullam explicabo. Alias repudiandae perspiciatis consequatur a aliquid. Temporibus, velit expedita voluptatibus incidunt natus deserunt eos quaerat alias similique, officia quam perferendis quo. Ea culpa accusantium alias reiciendis consequuntur placeat distinctio nobis consectetur possimus vel? Impedit eum consequuntur, ullam libero quidem modi aliquid dolorum tempora pariatur nobis praesentium soluta deserunt magnam, illo quia accusantium odit veniam dolores ipsa sunt a qui cumque totam. Quasi ipsum fuga dicta excepturi dolorum mollitia vitae saepe aperiam?</p>
        </div>
      </div>
    </div>
  )
}

export default page
