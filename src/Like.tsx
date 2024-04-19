import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MouseEventHandler } from "react";
import { useState } from "react";
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  let [Like, setLike] = useState(false);
  if (Like) return <FaHeart color="red" size={70} onClick={() => setLike(false)}/>;
  else return <CiHeart size={70} onClick={() => setLike(true)} />;
};

export default Like;
