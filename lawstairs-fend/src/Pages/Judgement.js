import styled from "styled-components";

import React from "react";
import BgImage from "../Componets/BgImage";

export default function Judgement() {
  let bg = {
    image: "/images/judgment.jpg",
  };
  return (
    <Container>
      <BgImage {...bg} />
    </Container>
  );
}

const Container = styled.div``;
