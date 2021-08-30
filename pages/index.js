import Head from "next/head";
import Header from "../components/header.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-xl font-bold">Welcome to the chores app!</h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <h3>
          Powered by{" "}
          <a
            className="text-blue-800 font-bold"
            href="https://github.com/JoshuaNow"
            target="_blank"
          >
            Josh
          </a>{" "}
          &{" "}
          <a
            className="text-blue-800 font-bold"
            href="https://github.com/crystalatk"
            target="_blank"
          >
            Crystal
          </a>
        </h3>
      </footer>
    </div>
  );
}
