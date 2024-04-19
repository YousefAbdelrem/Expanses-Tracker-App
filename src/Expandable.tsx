import React from "react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}
const Expandable = ({ children, maxChars = 100 }: Props) => {
  const [isExpandable, setExpandable] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpandable ? children : children.substring(0, maxChars);
  return (
    <>
      <p>{text}...</p>
      <button onClick={() => setExpandable(!isExpandable)}>
        {isExpandable ? "Less" : "More"}
      </button>
    </>
  );
};

export default Expandable;
