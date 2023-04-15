import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Section from "../components/Section";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme}`}>
      <Head>
        <title>Scrolling dark mode transition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section theme="light" setTheme={setTheme}>
        <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                Magic Keyboard. Apple Pencil. Endless possibilities.
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Pro accessories.
                </span>{" "}
                Apple Pencil, Magic Keyboard, and the Smart Keyboard Folio open
                up even more ways to use iPad Pro. Draw a masterpiece, take
                notes, or knock out a business plan. These versatile accessories
                are designed to take your work and creativity to the next level.
              </p>
            </div>
            <div>
              <div className="relative w-full h-[40rem]">
                <Image
                  src="/assets/section1_img.png"
                  alt="Wi-Fi 6E and 5G"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section theme="dark" setTheme={setTheme}>
        <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                Wi-Fi 6E and 5G. Fast friends
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Blazing-fast connections.
                </span>{" "}
                iPad has always been uniquely portable with superfast Wi-Fi and
                cellular options. With Wi-Fi 6E, you've got the fastest wireless
                connection available. So you'll get faster transfers of photos,
                documents, and large video files.
              </p>
            </div>
            <div>
              <div className="relative w-full h-[40rem]">
                <Image
                  src="/assets/section2_img.jpg"
                  alt="Wi-Fi 6E and 5G"
                  fill
                  style={{ objectFit: "cover", objectPosition: "right" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
