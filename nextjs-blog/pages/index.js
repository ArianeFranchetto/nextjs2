
import FirstPost from './posts/first-post';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <FirstPost/>
      <h1>
        Aprendendo <a href="https://nextjs.org">a</a>
      </h1>

      <h1>
  Read{' '}
  <Link href="/posts/first-post">
    <a>this page!</a>
  </Link>
</h1>
    </div>
  )
}
