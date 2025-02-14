import tamalImg from "public/tamal.jpeg";
import ingredientsImg from "public/ingredients.jpeg";
import eggsImg from "public/eggs.jpeg";

const HeroSection = () => {
  return (
    <header className="flex px-[147px] py-[120px]">
      <div className="w-[62%] grid grid-cols-2 grid-rows-2 gap-[8px]">
        <img
          src={tamalImg}
          alt=""
          className="h-full max-h-full row-span-2 col-span-1"
        />
        <img src={ingredientsImg} alt="" className="h-full max-h-full" />
        <img src={eggsImg} alt="" className="h-full max-h-full" />
      </div>
      <div className="w-[38%] px-[28px] font-light text-[#E1E2E2]">
        <h2 className="text-3xl leading-[33px]">WHAT DOES COOKING MEAN?</h2>
        <hr className="my-[30px]" />
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
