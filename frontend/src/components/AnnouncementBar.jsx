import { CircleQuestionMark, CircleUserRound } from "lucide-react";

function AnnouncementBar() {
  return (
    <div className="bg-customGreen h-10">
      <div className="flex items-center justify-between px-4 max-w-7xl mx-auto h-full">
        <span className="text-white font-light text-xs sm:text-sm truncate">
          Free delivery to your door for orders over $100
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
