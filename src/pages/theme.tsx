import React from 'react'

function theme() {
  return (
    <div className='block border m-10 border-rose-600'>
        <div className='flex justify-center mt-96'>
            <input type="text" placeholder='ビーチでくつろぐハリーポッター' className="p-5 text-[] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
            <button className='rounded-md ms-1 border-2'>完了</button>
        </div>
    </div>
  )
}

export default theme