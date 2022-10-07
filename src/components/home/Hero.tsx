const Hero = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[url('/images/hero.png')] bg-cover bg-no-repeat">
      <div className="flex h-24 w-full items-center pl-8 pt-5">
        <div className="flex items-center gap-x-3">
          <img src="/images/logo.png" alt="" className="h-14 w-14" />
          <div className="TT text-4xl">DEAN&apos;S LIST</div>
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="TT text-center text-[7rem] leading-[1] ">
          Feedback from <br />
          web3 power users
        </div>
        <button className="space group mt-24 flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 text-lg font-medium text-black">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
