import type { NextPage } from "next";
import Head from "next/head";
import { HomePage } from "../components/homepage/HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Qurban MPD-MPR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default Home;