import logo from "../assets/youtube_img1.png";
import { Menu, Upload, Bell, User, Search, Mic, ArrowLeft } from "lucide-react";
import { Button } from "../components/button";
import { useState } from "react";

export function PageHeader() {
  const [showFullWidhtSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-3 mx-2 ">
      <div
        className={`gap-2 items-center flex-shrink-0 ${
          showFullWidhtSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon" className="h-12">
          <Menu></Menu>
        </Button>
        <a href="/">
          <img src={logo} className="h-12 w-18" />
        </a>
      </div>
      <form
        className={`gap-4 flex-grow justify-center h-9 mt-1 ${
          showFullWidhtSearch ? "flex" : "hidden md:flex"
        }`}
      >
        <div className="flex flex-grow max-w-[600px] ">
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            variant="ghost"
            size="icon"
            type="button"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary p-0 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />

          <Button className="py-4 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0 ">
            <Search style={{ marginTop: "-0.60rem" }} />
          </Button>
        </div>
        <div>
          <Button type="button" size="icon" className="flex-shrink-0 ">
            <Mic />
          </Button>
        </div>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidhtSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>

        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
}
