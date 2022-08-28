export function AuthLandingPageTop() {
  const motivationalQuotes = [
    "Start where you are. Use what you have. Do what you can.",
    "Nothing is impossible, the word itself says 'I'm possible'!",
    "The best preparation for tommorow is doing your best today.",
    "It takes one month to see yourself change, 3 months for your friends and family, and 4 for the rest of the world.",
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
  ];

  const dailyQuote =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <header>
      <div>
        <div className="flex flex-col content-center text-center bg-gradient-to-t from-[#e1e0e0] via-[#969595] to-[#e1e0e0] text-black">
          <figure class="w-full m-auto transition-all duration-300 filter grayscale hover:grayscale-0">
            <img
              class="w-full h-full"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgenesisgym.com.sg%2Fwp-content%2Fuploads%2F2015%2F11%2Funiversal-physique-gym-banner.jpg&f=1&nofb=1"
              alt="image description"
            />
            <figcaption class="sm:absolute sm:inset-8 hidden xl:block px-4 my-8 text-lg text-white">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="flex mx-3 justify-center p-4 leading-normal">
                <h5 className="text-2xl text-center font-bold tracking-tight dark:text-white">
                  "{dailyQuote}"
                </h5>
                <br></br>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
}
