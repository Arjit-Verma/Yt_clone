import logo from "../assets/youtube_img1.png";
import { Menu, Upload, Bell, User, Search, Mic } from "lucide-react";
import { Button } from "../components/button";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 ">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon" className="h-12">
          <Menu></Menu>
        </Button>
        <a href="/">
          <img src={logo} className="h-12" />
        </a>
      </div>
      <form className="flex gap-4 flex-grow justify-center h-9 mt-1">
        <div className="flex flex-grow max-w-[600px] ">
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
      <div className="flex flex-shrink-0 md:gap-2">
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
