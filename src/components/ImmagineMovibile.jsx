import { useState } from "react";

const ImmagineMovibile = ({ url }) => {
  const [hover, setHover] = useState(false);
  return (
    <img
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src={url}
      alt=""
      className={`${
        hover ? "animate__animated animate__flip" : ""
      } img-fluid img-skills mb-4 `}
    />
  );
};
export default ImmagineMovibile;
