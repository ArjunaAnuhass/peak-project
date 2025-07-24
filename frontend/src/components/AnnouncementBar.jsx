import { CircleQuestionMark, CircleUserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "./ui/label";

function AnnouncementBar() {

  const [currentBar, setCurrentBar] = useState(false);

  const bgColor = currentBar ? "bg-customGreen" : "bg-customYellow";
  const text = currentBar ? "Free delivery to your door for orders over $100" : "Check out our new Protein Shake 20% off for a limited time!";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBar((prev) => !prev);
    }, 5000);

    return () => clearInterval(timer);
  },[]);

  

  return (
    <div className={`${bgColor} h-10 transition-all duration-100`}>
      <div className={"flex items-center justify-between px-4 max-w-7xl mx-auto h-full"}>
        <span className="text-white font-light text-xs sm:text-sm truncate">
          {text}
        </span>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer">
            <CircleQuestionMark className="h-4 w-4 text-white" />
            <span className="text-white text-xs sm:text-sm">Help</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <CircleUserRound className="h-4 w-4 text-white" />
            <span className="text-white text-xs sm:text-sm">My Account</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <span className="text-white text-xs sm:text-sm">
              🇺🇸 United States (USD $)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
