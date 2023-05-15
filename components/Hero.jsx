"use client"
import { motion } from "framer-motion";
import Image from 'next/image'

function Hero({ title, text }) {
  return (
    <div className="flex w-full justify-center items-start px-5 py-20 md:py-32 lg:py-40 flex-col md:flex-row-reverse">
      <div className="md:flex md:flex-col items-center">
        <motion.h1
          initial={{ y: -200 }}
          transition={{ duration: 1 }}
          animate={{ y: 0 }}
          className="font-bold text-5xl -z-10 text-slate-700 mt-10 md:mt-0 md:text-7xl md:text-left lg:text-5xl lg:text-left"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ scale: 0.8 }}
          transition={{ duration: 2 }}
          animate={{ scale: 1 }}
          className="text-slate-600 text-center mt-5 text-xl md:text-4xl lg:text-2xl"
        >
          {text}
        </motion.p>
      </div>
      <Image  className="md:w-72 md:h-72 lg:h-96 lg:w-96"
        src="/avatar.png" height={500} width={500} priority/>
    </div>
  );
}

export default Hero;
