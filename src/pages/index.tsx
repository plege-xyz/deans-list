import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dean&apos;s List</title>
        <meta name="description" content="Dean's List" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <>
        <div className="relative flex h-screen w-full flex-col bg-[url('/images/hero.png')] bg-cover bg-no-repeat">
          <div className="h-20 w-full"></div>
          <div className="flex h-full flex-col items-center justify-center">
            <div className="TT text-center text-[7rem] leading-[1] text-white">
              Feedback from <br />
              web3 power users
            </div>
            <button className="space group mt-24 flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 text-lg font-medium">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
