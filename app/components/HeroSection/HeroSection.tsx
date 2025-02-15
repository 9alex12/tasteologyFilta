const HeroSection = () => {
  return (
    <header className="flex gap-7 flex-col md:flex-row w-full md:max-w-6xl py-6 md:py-[120px] px-5">
      <div className="md:flex-[4] grid grid-cols-2 grid-rows-2 gap-[8px] aspect-[9/8]">
        <img
          src="/tamal.jpeg"
          alt=""
          className="h-full max-h-full row-span-2 col-span-1 object-cover"
        />
        <img
          src="/ingredients.jpeg"
          alt=""
          className="h-full max-h-full object-cover"
        />
        <img
          src="/eggs.jpeg"
          alt=""
          className="h-full max-h-full object-cover"
        />
      </div>
      <div className="md:flex-[2] font-light text-[#E1E2E2] flex-1">
        <h1 className="text-3xl leading-[33px]">WHAT DOES COOKING MEAN?</h1>
        <hr className="my-[30px] text-[#E1E2E2]" />
        <p className="text-xl">
          Is it simply applying heat to a food product? A way of making certain
          food safe to eat? Or a way to create flavour and make food more
          appealing? This is just part of what Hervé This, the father of
          molecular gastronomy, has dedicated his life to finding out. We spoke
          to him to find out what his experiments have told him. And in the
          process even discovered the secret to cooking the perfect egg...
        </p>
        <p className="text-base font-bold text-[#CF1430] mt-[30px] mb-[10px]">
          THE PERFECT EGG
        </p>
        <p className="text-xl font-bold text-[#FFFFFF]">
          Keep water between 67 and 68°C for a flavourful, tender yolk
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
