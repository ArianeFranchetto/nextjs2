import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const YourComponent = () => (
    <Image 
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="your image"

    />

    )

export default function FirstPost() {
    return ( 
    <>
    <Head>
        <title>first</title>

    </Head>

    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }

  />

    <h1>First Post</h1>
    <h2>
        <Link  href="/">
            <a>back to home</a>
        </Link>
    </h2>
    </>  
    );
  }