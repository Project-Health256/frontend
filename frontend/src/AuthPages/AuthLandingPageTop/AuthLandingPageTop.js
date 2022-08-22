export function AuthLandingPageTop() {
  const motivationalQuotes = [
    "Start where you are. Use what you have. Do what you can.",
    "Nothing is impossible, the word itself says 'I'm possible'!",
    "The best preparation for tommorow is doing your best today.",
    "It takes one month to see yourself change, 3 months for your friends and family, and 4 for the rest of the world.",
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    'Learn as if you will live forever, live like you will die tomorrow.',
    'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.'
  ];

  const dailyQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <header>
      <div>
        <div className="shadow-2xl flex justify-evenly h-96 items-center py-20 px-6 pt-16 bg-white  md:flex-row dark:border-gray-700 dark:bg-gray-800">
          <img
            className="shadow-xl object-cover h-96 rounded-lg md:h-auto md:w-1/4 md:rounded-l-lg rounded-br-lg py-5 mt-2"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/killing-that-kettlebell-workout-royalty-free-image-637772778-1562688657.jpg"
          />
          <div className="flex flex-col rounded-xl shadow-md hidden md:block justify-end p-4 leading-normal">
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {dailyQuote}
            </h5>
            <br></br>
          </div>
        </div>
      </div>
    </header>
  );
}
