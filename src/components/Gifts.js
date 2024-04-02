import React from "react";

export default function Gifts() {
    return (
        <section id="Gifts">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                You may pick or add you gift items here.
                <br className="hidden lg:inline-block" />Let's start sharing some love.
              </h1>
              <p className="mb-8 leading-relaxed">
                You may add the gift item you want to share or pick from the already existing
                gift items.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="Share some love"
                src="./My Gift Logo.png"
              />
            </div>
          </div>
        </section>
      );
}