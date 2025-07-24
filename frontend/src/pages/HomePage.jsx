import { useEffect, useState } from "react";
import { Banner01, Banner02, Banner03 } from "../components/BannerImages";
import Layout from "../components/Layout";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const banners = [<Banner01 />, <Banner02 />, <Banner03 />];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section>
      <Layout />
      <div className="relative overflow-hidden max-w-7xl mx-auto px-2 mt-10">
        <div className="transition-all duration-700 ease-in-out">
          {banners[currentIndex]}
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
          <div className="bg-white px-4 py-3 rounded-full shadow-md flex gap-4 items-center">
            <ChevronLeft onClick={() => setCurrentIndex((currentIndex) => (currentIndex - 1 + banners.length) % banners.length)} className="h-4 w-4" />
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === currentIndex ? "bg-gray-600" : "bg-gray-300"
                }`}
              />
            ))}
            <ChevronRight onClick={() => setCurrentIndex((currentIndex) => (currentIndex + 1) % banners.length)} className="h-4 w-4" />
          </div>
          <div onClick={() => setIsPlaying((prev) => !prev)} className="bg-white px-2 py-2 rounded-full flex items-center">
            {isPlaying ? <Pause className="px-1 py-1" /> : <Play className="px-1 py-1" /> }
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default HomePage;
