import { clsx } from "clsx";
export type TimestampProps = {
  icon: string;
  tldr: string;
  key_ideas?: string[];
  start_time: number;
  className?: string;
};

export const TimestampComp = ({
  icon,
  tldr,
  start_time,
  className,
}: TimestampProps) => {
  /** function to go to the timestamp on the youtube video */
  const handlePlayback = () => {
    // alert(start_time);
  };

  return (
    <li
      className={clsx(
        "flex gap-[8px] text-[18px] leading-[1.56] tracking-[0.032px]",
        className
      )}
    >
      <div>{icon}</div>
      <div className="">
        <span
          className="text-[#007AFF] cursor-pointer font-inter-font"
          onClick={handlePlayback}
        >
          {start_time}
        </span>
        <span className="ml-2">{tldr}</span>
      </div>
    </li>
  );
};
