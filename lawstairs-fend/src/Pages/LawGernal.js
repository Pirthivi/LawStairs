import React from "react";
import BgImage from "../Componets/BgImage";

export default function LawGernal() {
  let bg = {
    image: "/images/balance.jpg",
  };
  return (
    <div>
      <BgImage {...bg} />
    </div>
  );
}
