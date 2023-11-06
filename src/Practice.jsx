import { Carousel } from "flowbite-react";
import React from "react";

export const Practice = () => {
  return (
    <div>
      {/* <div className="h-screen min-h-screen px-4 mx-auto lg:px-14 max-w-screen-2xl">
        <Carousel className="w-full mx-auto">
          <div className="flex flex-col items-center justify-between h-full gap-12 py-12 md:flex-row-reverse my-28 md:my-8 ">
            <div>
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1697261986~exp=1697262586~hmac=af56fd41c80aa871abdb3764a1dedf2a8a41937219777ce9564c13ab21bf23f2"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="mb-4 text-5xl font-semibold leading-snug text-gray-700 md:w-3/4">
                Lesson and Insights{" "}
                <span className="leading-snug text-green-900">
                  from 8 years
                </span>
              </h1>
              <p className="mb-8 text-base text-gray-900">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="py-2 text-white transition-all duration-300 bg-green-800 rounded hover:-translate-y-4 px-7 hover:bg-gray-900 ">
                Register
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full gap-12 py-12 md:flex-row-reverse my-28 md:my-8 ">
            <div>
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1697261986~exp=1697262586~hmac=af56fd41c80aa871abdb3764a1dedf2a8a41937219777ce9564c13ab21bf23f2"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="mb-4 text-5xl font-semibold leading-snug text-gray-700 md:w-3/4">
                Lesson and Insights{" "}
                <span className="leading-snug text-green-900">
                  from 8 years
                </span>
              </h1>
              <p className="mb-8 text-base text-gray-900">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="py-2 text-white transition-all duration-300 bg-green-800 rounded hover:-translate-y-4 px-7 hover:bg-gray-900 ">
                Register
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full gap-12 py-12 md:flex-row-reverse my-28 md:my-8 ">
            <div>
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1697261986~exp=1697262586~hmac=af56fd41c80aa871abdb3764a1dedf2a8a41937219777ce9564c13ab21bf23f2"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="mb-4 text-5xl font-semibold leading-snug text-gray-700 md:w-3/4">
                Lesson and Insights{" "}
                <span className="leading-snug text-green-900">
                  from 8 years
                </span>
              </h1>
              <p className="mb-8 text-base text-gray-900">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="py-2 text-white transition-all duration-300 bg-green-800 rounded hover:-translate-y-4 px-7 hover:bg-gray-900 ">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div> */}

      <div
        id="controls-carousel"
        class="relative w-full"
        data-carousel="static"
      >
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <h1>Hello World</h1>
          </div>

          <div
            class="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <h1>Another hello world</h1>
          </div>
        </div>

        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

      <h1>Hello</h1>
    </div>
  );
};
