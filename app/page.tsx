'use client'
import Image from 'next/image';

export default function HomePage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start', // content starts from top
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* Background image */}
      <Image
        src="/images/Heights-Coffee-Bar-1.jpg"
        alt="Coffee background"
        fill
        style={{ zIndex: 1 }}
        priority
      />

      {/* Semi-transparent overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: 2,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          alignItems: 'right',
          justifyContent: 'space-around',
          width: '90%',
          maxWidth: '1000px',
          color: 'black',
          marginTop: '1vh', // ✅ pushes content 15% from the top
        }}
      >
        {/* Hours (Left) */}
        <div
          style={{
            flex: '1',
            textAlign: 'right',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginTop: '25px'
          }}
        >
          <p>
            <strong>Tuesday - Saturday</strong>
            <br />
            7a - 4p
          </p>
          <p>
            <strong>Sunday & Monday</strong>
            <br />
            Closed
          </p>
        </div>

        {/* Centered logo */}
        <div
          style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            margin: '0 25px',
            top: '-25px'
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Heights Coffee Bar logo"
            fill
            style={{
              objectFit: 'contain',
            }}
            priority
          />
        </div>

        {/* Address & contact (Right) */}
        <div
          style={{
            flex: '1',
            textAlign: 'left',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginTop: '25px'
          }}
        >
          <p>
            850 40th Ave NE
            <br />
            Columbia Heights, MN 55421
          </p>
          <p>
            <a
              href="mailto:heightscoffeebar@gmail.com"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              heightscoffeebar@gmail.com
            </a>
            <br />
            IG{' '}
            <a
              href="https://www.instagram.com/heightscoffeebar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              @heightscoffeebar
            </a>
            <br />
            tel:{' '}
            <a
              href="tel:+16123149027"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              (612) 314-9027
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
