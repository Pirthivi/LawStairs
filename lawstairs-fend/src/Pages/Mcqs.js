import React from "react";
import BgImage from "../Componets/BgImage";
import styled from "styled-components";
export default function Mcqs() {
  const bg = {
    image: "/images/hammer.jpg",
  };
  return (
    <Container>
      <BgImage {...bg} />
    </Container>
  );
}

const Container = styled.div``;
