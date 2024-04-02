import React from "react";

export default function Reminders() {
    return (
        <section id="Reminders">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Remind the persons you wish to share some love with that there are gift items waiting for them to 
                pick up.
                <br className="hidden lg:inline-block" />Let's start sharing some love.
              </h1>
              <p className="mb-8 leading-relaxed">
                You may remind the beneficiaries of your gifts that there are gift items waiting for them to pick up.
                Put a big smile on their faces with your tailored reminders and let love go round.
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