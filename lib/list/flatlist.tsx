import React, { ReactNode } from "react";

export type DataProps = {
  [x: string]: ReactNode | string;
};

export type ItemProps = {
  item: DataProps | string;
  index?: number;
};

type FlatListProps = {
  data: (DataProps | string)[];
  renderItem: (items: ItemProps) => ReactNode;
  className?: string;
};
const FlatList = ({ data, renderItem, className }: FlatListProps) => {
  return (
    <ul className={`flex flex-col items-start w-full ${className}`}>
      {data?.map((item, index) => (
        <React.Fragment key={index}>
          {renderItem({ item, index })}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default FlatList;
