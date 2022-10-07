/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import Customers from "@/components/home/Customers";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dean&apos;s List</title>
        <meta name="description" content="Dean's List" />
        <link rel="icon" href="/images/logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/fonts/tt.woff2" />
      </Head>

      <div className="text-white">
        <Hero />
        <Customers />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
