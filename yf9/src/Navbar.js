import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-300 m-10 rounded-xl'>
        <div className='flex items-center justify-center'>
        <a className=' m-10 text-slate-700 bg-slate-400 p-4 rounded-xl font-mono focus:bg-gray-400 hover:bg-gray-300 ' href='/login'>Giriş </a>
        <a className='m-10 text-slate-700 bg-slate-400 p-4 rounded-xl font-mono  focus:bg-gray-400 hover:bg-gray-300' href='/signup'>Kayıt </a>
        <a className='m-10  text-slate-700 bg-slate-400 p-4 rounded-xl font-mono  focus:bg-gray-400 hover:bg-gray-300' href='/'>Sayfa</a>
           </div>
        
    </div>
  )
}

export default Navbar