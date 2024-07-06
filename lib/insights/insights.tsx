type PointProps = {
  icon: string;
  title: string;
};

export type InsightProps = {
  name: string;
  points: PointProps[];
};

export const InsightComp = ({ icon, title }: PointProps) => (
  <li className="flex text-[15px] gap-[8px] font-lora-font leading-[1.56] tracking-[0.032px]">
    <div>{icon}</div>
    <div>{title}</div>
  </li>
);
