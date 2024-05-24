import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Home,
  Library,
  Repeat,
  History,
  PlaySquare,
  Clock,
  ListVideo,
  TrendingDown,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Award,
  Lightbulb,
  Shirt,
  Podcast,
} from "lucide-react";
import { Children, ElementType, Key, ReactNode, useState } from "react";
import { Button, buttonStyles } from "../components/button";
import { twMerge } from "tailwind-merge";
import { playlists, subscriptions } from "../data/home";

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
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
        <LargeSidebarSection>
          <LargeSideBarItem isActive Icon={Home} title="Home" url={"/"} />
          <LargeSideBarItem
            Icon={Clapperboard}
            title="Subscription"
            url={"/"}
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSideBarItem Icon={Library} title="Library" url={"/library"} />
          <LargeSideBarItem Icon={History} title="History" url={"/History"} />
          <LargeSideBarItem
            Icon={PlaySquare}
            title="Your Videos"
            url={"/YourVideos"}
          />
          <LargeSideBarItem
            Icon={Clock}
            title="Watch Later"
            url={"/WatchLater"}
          />
          {playlists.map(
            (playlist: { id: Key | null | undefined; name: string }) => (
              <LargeSideBarItem
                key={playlist.id}
                Icon={ListVideo}
                title={playlist.name}
                url={`/playlist?list=${playlist.id}`}
              />
            )
          )}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Subscription">
          {subscriptions.map((subscription) => (
            <LargeSideBarItem
              key={subscription.id}
              title={subscription.channelName}
              url={"/"}
              Icon={subscription.imgUrl}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSideBarItem Icon={Flame} title="Trending" url={"/"} />
          <LargeSideBarItem Icon={ShoppingBag} title="Shopping" url={"/"} />
          <LargeSideBarItem Icon={Music2} title="Music" url={"/"} />
          <LargeSideBarItem Icon={Film} title="Movies & TV" url={"/"} />
          <LargeSideBarItem Icon={Radio} title="Live" url={"/"} />
          <LargeSideBarItem Icon={Gamepad2} title="Gaming" url={"/"} />
          <LargeSideBarItem Icon={Newspaper} title="News" url={"/"} />
          <LargeSideBarItem Icon={Award} title="Sports" url={"/"} />
          <LargeSideBarItem Icon={Lightbulb} title="Learning" url={"/"} />
          <LargeSideBarItem Icon={Shirt} title="Fashion" url={"/"} />
          <LargeSideBarItem Icon={Podcast} title="Podcast" url={"/"} />
        </LargeSidebarSection>
      </aside>
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
        " py-4 px-1 flex flex-col item-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-5 h-6 ml-2"></Icon>
      <div className="text-sm ">{title}</div>
    </a>
  );
}

type LargeSideBarItemProps = {
  Icon: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};
type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const childrenArray = Children.toArray(children).flat();

  const [isExpanded, setIsExpanded] = useState(false);
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

function LargeSideBarItem({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt={title} className="w-6 h-6" />
      ) : (
        <Icon className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
