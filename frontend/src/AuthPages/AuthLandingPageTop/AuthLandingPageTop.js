export function AuthLandingPageTop() {
  const motivationalQuotes = [
    "Start where you are. Use what you have. Do what you can.",
    "Nothing is impossible, the word itself says 'I'm possible'!",
    "The best preparation for tommorow is doing your best today.",
    "It takes one month to see yourself change, 3 months for your friends and family, and 4 for the rest of the world.",
  ];

  const dailyQuote = motivationalQuotes[Math.floor(Math.random() * 4)];

  return (
    <header>
      {/* <div className="text-center bg-[#efb86c] text-gray-800 py-20 px-6 pt-16"> */}
      {/* <div className="flex justify-center">
        </div> */}

      {/* </div> */}
      <div>
        <div className="flex justify-evenly h-96 items-center py-20 px-6 pt-16 bg-white rounded-lg md:flex-row dark:border-gray-700 dark:bg-gray-800">
          <img
            className="object-cover h-96 rounded-t-lg md:h-auto md:w-1/4 md:rounded-l-lg rounded-br-lg py-5 mt-2"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/killing-that-kettlebell-workout-royalty-free-image-637772778-1562688657.jpg"
          />
          <div className="flex flex-col hidden md:block justify-end p-4 leading-normal">
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {dailyQuote}
            </h5>
            <br></br>
            {/* <p className="mb-3 font-normal sm:text-center text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p> */}
          </div>
        </div>
      </div>
    </header>
  );
}
