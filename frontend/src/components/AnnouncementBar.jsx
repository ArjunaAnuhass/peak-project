import { CircleQuestionMark, CircleUserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

function AnnouncementBar() {
  
  const countries = [
    { label: "United States", value: "US", flag: "🇺🇸", currency: "USD $" },
    { label: "Canada", value: "CA", flag: "🇨🇦", currency: "CAD $" },
    { label: "France", value: "FR", flag: "🇫🇷", currency: "EUR €" },
    { label: "Germany", value: "DE", flag: "🇩🇪", currency: "EUR €" },
    { label: "United Kingdom", value: "GB", flag: "🇬🇧", currency: "GBP £" },
  ]

  const [currentBar, setCurrentBar] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US")

  const bgColor = currentBar ? "bg-customGreen" : "bg-customYellow";
  const text = currentBar ? "Free delivery to your door for orders over $100" : "Check out our new Protein Shake 20% off for a limited time!";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBar((prev) => !prev);
    }, 5000);

    return () => clearInterval(timer);
  },[]);

  const currentCountry = countries.find((country) => country.value === selectedCountry);

  return (
    <div className={`${bgColor} h-10 transition-all duration-100`}>
      <div className={"flex items-center justify-between px-4 max-w-7xl mx-auto h-full"}>
        <span className="text-white font-light text-xs sm:text-sm truncate">
          {text}
        </span>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer">
            <CircleQuestionMark className="h-4 w-4 text-white" />
            <span className="text-white text-xs sm:text-sm hover:underline-offset-2">Help</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <CircleUserRound className="h-4 w-4 text-white" />
            <span className="text-white text-xs sm:text-sm hover:underline-offset-2">My Account</span>
          </div>
          <Select className="flex items-center border-none cursor-pointer" value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="border-none text-white">
              <SelectValue defaultValue={selectedCountry}>
                {currentCountry?.flag} {currentCountry?.label} ({currentCountry?.currency})
              </SelectValue>
            </SelectTrigger>
            <SelectContent className={`${bgColor} text-white`}>
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  {country.flag} {country.label} {country.currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;


