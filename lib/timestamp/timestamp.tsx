import { clsx } from "clsx";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ArrowDown2 } from "iconsax-react";
import { FlatList } from "../list";
import { DataProps } from "../list/flatlist";

export type TimestampProps = {
  icon: string;
  tldr: string;
  key_ideas?: (DataProps | string)[];
  has_key_ideas: boolean;
  handlePlayback: () => void;
  start_time: number;
  className?: string;
};

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hrs > 0) {
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  } else {
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
};

export const TimestampComp = ({
  icon,
  tldr,
  start_time,
  handlePlayback,
  has_key_ideas,
  key_ideas,
  className,
}: TimestampProps) => {
  // const { time, setTime } = useTimeContext();

  const renderCollapsible = ({ item }: { item: DataProps | string }) => (
    <li className="text-gray02 text-sm font-light leading-[20px] relative">
      {item as string}
    </li>
  );

  return (
    <Disclosure>
      {({ open }) => (
        <li
          className={clsx(
            "flex gap-[8px] text-[15px] leading-[1.56] tracking-[0.032px]",
            className
          )}
        >
          <div>{icon}</div>
          <div className="flex flex-col">
            <div className="">
              <span
                className="text-[#007AFF] cursor-pointer font-inter-font"
                onClick={handlePlayback}
              >
                {formatTime(Math.round(start_time))}
              </span>
              <span className="ml-2">{tldr}</span>
              {has_key_ideas && tldr && (
                <DisclosureButton
                  className={clsx(
                    "group ml-2 inline-flex text-gray01 items-center gap-1"
                  )}
                >
                  <span className="cursor-pointer">
                    {open ? "Collapse" : "Expand"}
                  </span>
                  <ArrowDown2
                    size={20}
                    className="group-data-[open]:rotate-180"
                  />
                </DisclosureButton>
              )}
            </div>
            {has_key_ideas && tldr && (
              <DisclosurePanel className="mt-2 text-sm/5">
                <FlatList
                  data={key_ideas!}
                  className="px-[12px] list-disc gap-2"
                  renderItem={renderCollapsible}
                />
              </DisclosurePanel>
            )}
          </div>
        </li>
      )}
    </Disclosure>
  );
};
