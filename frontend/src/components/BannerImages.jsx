import { useEffect, useState } from "react";
import banner01 from "../assets/ChatGPT-Image-Apr-21_-2025_-10_10_27-PM.webp";
import banner02 from "../assets/ChatGPT-Image-Apr-19_-2025_-06_33_03-PM.webp";
import banner03 from "../assets/lum3n-RYqO8DhPg68-unsplash-_1_warm.webp";
import { Button } from "./ui/button";

const bannerWordsSwitching = [
  "groceries",
  "nutrition",
  "vitamins",
  "beverages",
];

function Banner01() {
  const [words, setWords] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWords((prev) => (prev + 1) % bannerWordsSwitching.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img src={banner01} className="h-[33.5rem] w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl flex items-center gap-2">
          Quality
          <span className="relative h-10 overflow-hidden">
            <span
              className="block transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(-${words * 2.5}rem)`,
              }}
            >
              {bannerWordsSwitching.map((word, index) => (
                <div key={index} className="h-10 leading-10 text-green-400">
                  {word}
                </div>
              ))}
            </span>
          </span>
        </h1>
        <h2 className="text-5xl flex items-center mt-5">powered by nature</h2>
        <div className="flex gap-4 mt-10">
          <Button className="mt-5 bg-banner01Button hover:bg-banner01Button hover:drop-shadow-2xl text-white h-13 w-46 rounded">
            SHOP FOOD
          </Button>
          <Button className="mt-5 bg-transparent hover:bg-transparent hover:drop-shadow-2xl text-white border-2 h-13 w-34 rounded">
            DRINKS
          </Button>
        </div>
      </div>
    </div>
  );
}

function Banner02() {
  return (
    <div className="relative">
      <img src={banner02} className="h-[33.5rem] w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-start justify-start text-white text-center p-16">
        <p className="text-gray-700 text-5xl mt-2">Supplements, protein,</p>
        <p className="text-gray-700 text-5xl mt-4">groceries, coffee?</p>
        <p className="text-gray-700 text-xl mt-10">We've got you covered.</p>
        <div className="flex gap-4 mt-10">
          <Button className="bg-banner02Button hover:bg-banner02Button hover:drop-shadow-2xl text-white h-13 w-46 rounded">
            SHOP FOOD
          </Button>
          <Button className="bg-transparent hover:bg-transparent hover:drop-shadow-2xl text-customGreen border-customGreen border-2 rounded h-13 w-34">
            DRINKS
          </Button>
        </div>
      </div>
    </div>
  );
}

function Banner03() {
    return (
        <div className="relative">
            <img src={banner03} className="h-[33.5rem] w-full object-cover"/>
            <div className="absolute inset-0 flex flex-col items-start justify-start text-white text-center p-16 px-22">
                <p className="text-black text-5xl mt-2">Quality groceries</p>
                <div className="flex gap-2 mt-2">
                    <p className="text-black text-5xl mt-4">only</p>
                    <p className="text-customGreen text-5xl mt-4">organic</p>
                </div>
                <p className="text-black font-light text-xl mt-10">No pesticides. Ever.</p>
                <Button className="mt-5 bg-banner03Button hover:bg-banner03Button hover:drop-shadow-2xl text-white rounded h-13 w-58">FRUITS & VEGETABLES</Button>
        </div>
        </div>
    )
}

export { Banner01, Banner02, Banner03 };
