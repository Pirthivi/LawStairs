import React from "react";
import styled from "styled-components";
import BgImage from "../Componets/BgImage";

export default function Elab() {
  const bg = {
    image: "/images/digi.jpg",
  };
  return (
    <Container>
      <BgImage {...bg} />
    </Container>
  );
}

const Container = styled.div``;
