import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeProps {
  like: boolean;
  onLikeChange: (like: boolean) => void;
}

const Like = ({ like, onLikeChange }: LikeProps) => {
  const [state, setState] = useState(like);

  const handleClick = () => {
    const newState = !state;
    setState(newState);
    onLikeChange(newState);
  };

  return (
    <div onClick={handleClick}>
      {state ? <FaHeart color="red" size={500} /> : <FaRegHeart size={500} />}
    </div>
  );
};

export default Like;
