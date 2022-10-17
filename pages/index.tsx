import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-[#222222] h-full">
    <div
      className="pagebg flex flex-col items-center justify-center min-h-screen bg-hero "
      style={{
        "background-image":
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/netflix_bg.jpg)",
      }}
    >
      <header className="absolute top-6 w-full flex justify-between pl-6 pr-16">
        <div>
          <img src="netflix.svg" className="w-[240px] h-[40px]" />
        </div>
        <div className="w-[23%] lg:w-[15%] h- flex justify-between">
          <select name="" id="" className="p-1 rounded-sm">
            <option value="english">English</option>
            <option value="english">Hindi</option>
          </select>
          <button className="w-[87px] h-[38px] bg-[#f40612] text-white rounded-sm">Sign in</button>
        </div>
      </header>
      <main className="w-[900px] h-[320px] text-white flex flex-col text-center  justify-evenly items-center">
        <div className="text-[3.125rem] lg:w-[620px] font-bold">
          Unlimited movies, TV shows and more.
        </div>
        <div className="text-[1.62rem]">Watch anywhere. Cancel anytime.</div>
        <div className="text-[18px]">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="lg:flex">
          <input
            className="text-black h-[60px] sm:w-[500px] lg:w-[450px] px-2 outline-none "
            required
            placeholder="Email address"
            onSubmit={() => {
              console.log("asd");
            }}
          />
          <button className="text-[1.625rem] h-[60px] bg-[#f40612] lg:w-[212px] flex items-center justify-center font-medium ">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>

            <div className="text-white bg-black my-2 grid place-items-center">
              <div className="w-[80%] pb-10 sm:flex   items-center bg-red-500 ">
              <div className="bg-green-500 w-[45%]">
                <h1 className="text-[3.125rem] font-bold">Enjoy on your TV.</h1>
                <div className="text-[1.7rem] ">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </div>
              </div>
              <div className="bg-purple-600 w-[55%]">
            <img alt="" className="w-[31rem] h-[20rem]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" />
              </div>
              </div>
            <div>
            </div>
            </div>


    </div>
  );
};

export default Home;
