import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Junyu Zhan</title>
      </Head>
      <div className="leading-7 container mx-auto md:mt-40 md:p-0 md:max-w-lg p-4 text-base md:text-lg">
        <p>
          My name is Junyu Zhan (詹俊宇). I&apos;m a programmer learning to
          build better user experience and developer experience.
        </p>
        <p>
          This website is under construction. It will be the place mainly for my
          writings. Stay tuned.
        </p>
        <hr className="my-2" />
        <p>Other places you can find me:</p>
        <ul className="flex">
          <li className="mr-2">
            <a
              href="https://github.com/thezjy"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="mr-2">
            <a
              href="https://twitter.com/thezjy1"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="mr-2">
            <a href="mailto:thezjy@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </>
  )
}
