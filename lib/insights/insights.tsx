type PointProps = {
  icon: string;
  title: string;
};

export type InsightProps = {
  name: string;
  points: PointProps[];
};

export const InsightComp = ({ icon, title }: PointProps) => (
  <li className="flex gap-[8px] mn-[16px] font-lora-font text-[18px] leading-[1.56] tracking-[0.032px]">
    <div>{icon}</div>
    <div>{title}</div>
  </li>
);
