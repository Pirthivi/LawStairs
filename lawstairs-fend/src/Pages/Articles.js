import React from "react";
import styled from "styled-components";
import BgImage from "../Componets/BgImage";

export default function Articles() {
  let bg = {
    image: "/images/articles.jpg",
  };
  return (
    <Container>
      <BgImage {...bg} />
    </Container>
  );
}

const Container = styled.div``;
