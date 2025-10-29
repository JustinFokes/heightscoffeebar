'use client'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden text-center text-white">
      {/* ✅ Background image */}
      <Image
        src="/images/Heights-Coffee-Bar-1.jpg"
        alt="Coffee background"
        fill
        priority
        className="object-cover object-[center_top] z-0"
      />

      {/* ✅ Foreground content */}
      <div
        className="
          relative z-10 
          flex flex-col md:flex-row 
          justify-between 
          items-center md:items-start 
          gap-6 
          max-w-[1000px] 
          mx-auto 
          px-6 py-8 
          text-black 
          text-center md:text-left
        "
      >
        {/* Hours (Left) */}
        <div
          className="
            w-full md:w-auto 
            p-4 rounded-2xl text-[1.1rem] leading-8
            text-center md:text-right
            bg-white/30 backdrop-blur-md 
            md:bg-transparent md:backdrop-blur-none
          "
        >
          <p>
            <strong>Tuesday - Saturday</strong>
            <br />
            7a - 4p
          </p>
          <p className="mt-3">
            <strong>Sunday & Monday</strong>
            <br />
            Closed
          </p>
        </div>

        {/* Center Logo */}
        <div className="flex flex-col w-full md:w-auto">
          <div className="relative w-[300px] h-[300px] flex-shrink-0 md:my-0 my-4 mx-auto -top-5">
            <Image
              src="/images/logo.png"
              alt="Heights Coffee Bar logo"
              fill
              priority
              className="object-contain brightness-125"
            />
          </div>
        </div>

        {/* Address (Right) */}
        <div
          className="
            w-full md:w-auto 
            p-4 rounded-2xl text-[1.1rem] leading-8
            text-center md:text-left
            bg-white/30 backdrop-blur-md 
            md:bg-transparent md:backdrop-blur-none
          "
        >
          <p>
            850 40th Ave NE
            <br />
            Columbia Heights, MN 55421
          </p>

          <a
            href="mailto:heightscoffeebar@gmail.com"
            className="text-black no-underline hover:underline"
          >
            heightscoffeebar@gmail.com
          </a>
          <br />
          <a
            href="https://www.instagram.com/heightscoffeebar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black no-underline hover:underline"
          >
            Instagram
          </a>
          <br />
          <a
            href="https://www.facebook.com/heightscoffeeebar"
            className="text-black no-underline hover:underline"
          >
            Facebook
          </a>
          <br />
          <a
            href="tel:+16123149027"
            className="text-black no-underline hover:underline"
          >
            (612) 314-9027
          </a>
        </div>
      </div>
    </div>
  )
}
