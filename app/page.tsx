'use client'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto text-white">
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
        {/* ✅ Mobile Logo on Top */}
        <div className="md:hidden flex justify-center m-0">
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/images/logo.png"
              alt="Heights Coffee Bar logo"
              fill
              priority
              className="object-contain brightness-125 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* ✅ Frosted Details Section (mobile only) */}
        <div
          className="
            md:hidden 
            bg-white/50 backdrop-blur-sm border border-white/30 
            rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] 
            p-6 text-sm leading-relaxed 
            w-full 
            transition-all duration-300
            -mt-5
          "
        >
          <div>
            <h2 className="text-xl font-semibold tracking-wide mb-2">
              Hours
            </h2>
            <p>
              <strong>Tuesday - Saturday</strong><br />
              7a - 4p
            </p>
            <p className="mt-3">
              <strong>Sunday & Monday</strong><br />
              Closed
            </p>
          </div>

          <div className="border-t border-white/40 pt-4">
            <h2 className="text-xl font-semibold tracking-wide mb-2">
              Visit Us
            </h2>
            <p>
              850 40th Ave NE<br />
              Columbia Heights, MN 55421
            </p>
            <p>
              Free Parking in the municipal lot across Van Buren
            </p>
          </div>

          <div className="border-t border-white/40 pt-4">
            <h2 className="text-xl font-semibold tracking-wide mb-2">
              Connect
            </h2>
            <p className="space-y-1">
              <a
                href="mailto:heightscoffeebar@gmail.com"
                className="block text-black hover:underline"
              >
                heightscoffeebar@gmail.com
              </a>
              <a
                href="https://www.instagram.com/heightscoffeebar"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/heightscoffeeebar"
                className="block text-black hover:underline"
              >
                Facebook
              </a>
              <a
                href="tel:+16123149027"
                className="block text-black hover:underline"
              >
                (612) 314-9027
              </a>
            </p>
          </div>
        </div>

        {/* ✅ Original desktop layout */}
        <div className="hidden md:flex flex-row justify-between items-start gap-6 w-full">
          {/* Hours (Left) */}
          <div className="flex-1 p-4 text-[1.1rem] leading-8 text-right">
            <p>
              <strong>Tuesday - Saturday</strong><br />
              7a - 4p
            </p>
            <p className="mt-3">
              <strong>Sunday & Monday</strong><br />
              Closed
            </p>
          </div>

          {/* Center Logo */}
          <div className="relative w-[300px] h-[300px] flex-shrink-0 -top-5">
            <Image
              src="/images/logo.png"
              alt="Heights Coffee Bar logo"
              fill
              priority
              className="object-contain brightness-125"
            />
          </div>

          {/* Address (Right) */}
          <div className="flex-1 p-4 text-[1.1rem] leading-8 text-left">
            <p>
              850 40th Ave NE<br />
              Columbia Heights, MN 55421
            </p>
            <p className="text-sm">
              (Free Parking in the municipal lot across Van Buren)
            </p>
            <a
              href="mailto:heightscoffeebar@gmail.com"
              className="text-black no-underline hover:underline"
            >
              heightscoffeebar@gmail.com
            </a><br />
            <a
              href="https://www.instagram.com/heightscoffeebar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black no-underline hover:underline"
            >
              Instagram
            </a><br />
            <a
              href="https://www.facebook.com/heightscoffeeebar"
              className="text-black no-underline hover:underline"
            >
              Facebook
            </a><br />
            <a
              href="tel:+16123149027"
              className="text-black no-underline hover:underline"
            >
              (612) 314-9027
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
