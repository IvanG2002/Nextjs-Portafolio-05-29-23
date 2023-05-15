import React from 'react'

function Navbar() {
  return (
    <nav className="w-full h-20 bg-white/50 text-slate-900 flex justify-center items-center fixed p-4 backdrop-blur-2xl border-b-[1px] border-white/70 font-bold z-10">
      <div>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:scale-125 hover:transition hover:duration-300">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer hover:scale-125 hover:transition hover:duration-300">
            <a href="/about">About</a>
          </li>
          <li className="cursor-pointer hover:scale-125 hover:transition hover:duration-300">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
