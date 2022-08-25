import { LinkButton } from "../../global-components/LinkButton/Link-Button";

export function SignUpSection() {
  return (
    <header>
      <div className="flex flex-col content-center mt-0 text-center bg-gradient-to-t from-[#e1e0e0] via-[#969595] to-[#e1e0e0] text-black py-20 px-6 pt-16">
        <h1 className="text-5xl font-bold mt-0 mb-6 LI-UI ls">
          Provident Life{" "}
        </h1>
        <div className="m-auto mb-5 max-w-lg">
          <img
            className="rounded-lg"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/solace-1525876940.jpg"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold mb-8 LI-UI">
          We aim to provide you with accurate numbers regarding your health <br></br>
          enabling you to optimize your fitness journey be it fat loss or
          gaining mass or just living healthy
        </h3>
        <h3 className="text-2xl font-bold mb-8 LI-UI">
          Click Below to Sign Up
        </h3>
        <LinkButton pathName="/signup" text="Sign Up" />
      </div>
    </header>
  );
}
