import FetchImgComponent from "../components/FetchImgComponent";
import { HPGreeting } from "../Constants";

const HomePage = () => {
  const rand = Math.floor(Math.random() * 2);

  return (
    <main className="">
      {rand === 0 ? (
        <FetchImgComponent
          name="MB"
          alt="Background Image"
          className="absolute object-cover w-full h-full"
        />
      ) : (
        <FetchImgComponent
          name="MBCPU"
          alt="Background Image"
          className="absolute object-cover w-full h-full"
        />
      )}

      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug">
          <strong className="font-bold">{HPGreeting}</strong>
        </h1>
      </section>
    </main>
  );
};

export default HomePage;
