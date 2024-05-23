// components/VideoGridItem.tsx
import { formatDuration } from "../utils/formatDuration";
import React from "react";
import { formatTimeAgo } from "../utils/formatTimeAgo";
const View_Formatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

type VideoGridItemProps = {
  id: number;
  title: string;
  channel: {
    name: string;
    id: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
};

const VideoGridItem: React.FC<VideoGridItemProps> = ({
  id,
  title,
  channel,
  views,
  postedAt,
  thumbnailUrl,
  videoUrl,
  duration,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img src={channel.profileUrl} className="w-12 h-12 rounded-full" />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </a>
          <div className="text-secondary-text text-sm">
            {View_Formatter.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
