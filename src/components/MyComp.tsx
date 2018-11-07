import * as React from "react";

export interface MyCompProps {
  name: "techno ahora" | "techno maniana";
  isMarried: boolean;
  kids: 2 | 4;
  livedIn?: ["Ca", "AZ"];
}

const MyComp = (props: MyCompProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default MyComp;
