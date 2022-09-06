import { LinkButton } from "../../global-components/LinkButton/Link-Button";

export function SignUpSection() {
  return (
    <header>
      <div className="flex flex-col content-center text-center bg-gradient-to-t from-[#e1e0e0] via-[#969595] to-[#e1e0e0] text-black">
        <figure class="w-full m-auto transition-all duration-300 filter grayscale hover:grayscale-0">
          <img
            class="w-full h-full"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgenesisgym.com.sg%2Fwp-content%2Fuploads%2F2015%2F11%2Funiversal-physique-gym-banner.jpg&f=1&nofb=1"
            alt="image description"
          />
          <figcaption class="sm:absolute sm:inset-0 hidden xl:block px-4 my-8 text-lg text-white">
            <h3 className="text-xl font-bold mb-8 LI-UI">
            <h1 className="text-5xl font-bold mt-5 mb-6 mt-6 LI-UI ls">
              Provident Life{" "}
            </h1>
              We aim to provide you with accurate numbers regarding your health{" "}
              <br></br>
              enabling you to optimize your fitness journey be it fat loss or
              gaining mass or just living healthy
            </h3>
            <h3 className="text-2xl font-bold mb-8 LI-UI">
              Click Below to Sign Up
            </h3>
            <LinkButton className="cursor pointer" pathName="/login" text="Sign Up" />
          </figcaption>
        </figure>
      </div>
    </header>
  );
}
