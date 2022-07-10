import React from "react";
import Fetchpdf from "../Componets/Fetchpdf";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
export default function PushPdf() {
  return (
    <Container>
      {!localStorage.getItem("user1") && <Navigate to="/login" />}
      <Content>
        <Fetchpdf />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 15vh;
`;
const Content = styled.div``;
