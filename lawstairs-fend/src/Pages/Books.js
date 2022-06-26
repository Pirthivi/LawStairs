import styled from "styled-components";
import React from "react";
import BgImage from "../Componets/BgImage";

export default function Books() {
  const bg = {
    image: "/images/lawbook.jpg",
  };
  return (
    <Container>
      <BgImage {...bg} />
    </Container>
  );
}

const Container = styled.div``;
