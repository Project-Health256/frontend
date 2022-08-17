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
      <div className="text-center bg-[#efb86c] text-gray-800 py-20 px-6 pt-16">
        <h1 className="text-5xl font-bold mt-0 mb-6 font-mono">{dailyQuote}</h1>
        <div className="flex justify-center">
          <img
            width="800"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/killing-that-kettlebell-workout-royalty-free-image-637772778-1562688657.jpg"
          />
        </div>
      </div>
    </header>
  );
}
