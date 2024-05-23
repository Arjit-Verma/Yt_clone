import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import { ElementType } from "react";
import { buttonStyles } from "../components/button";
import { twMerge } from "tailwind-merge";

export function SideBar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-2 lg:hidden ">
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="React" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscription"
          url="/subscription"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex"></aside>
    </>
  );
}
type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};
function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({
          variant: "ghost",
        }),
        " py-4 px-1 flex flex-col itmes-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-5 h-6 ml-2"></Icon>
      <div className="text-sm ">{title}</div>
    </a>
  );
}
