import logo from "../assets/youtube_img1.png";
import { Menu, Upload, Bell, User } from "lucide-react";
import { Button } from "../components/button";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 ">
      <div className="flex gap-3 items-center flex-shrink-0">
        <Button variant="ghost" size="icon" className="h-10">
          <Menu></Menu>
        </Button>
        <a href="/">
          <img src={logo} className="h-12" />
        </a>
      </div>
      <div></div>
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
