import React from 'react'

function Loader() {
  return (
    <div className='bg-black h-screen w-screen flex items-center justify-center opacity-70 absolute inset-0'>
        <div className='h-8 w-8 border-4 border-t-blue-100 rounded-full animate-spin border-blue-500'>

        </div>
    </div>
  )
}

export default Loader