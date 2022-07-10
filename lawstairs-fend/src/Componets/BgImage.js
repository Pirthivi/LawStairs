import styled from "styled-components";

import React from "react";

export default function BgImage(props) {
  return <Container image={props.image}></Container>;
}

const Container = styled.div`
  /* position: relative; */
  /* height: 100vh; */
  /* inset: 0px; */
  /* width: 100%; */

  overflow: hidden;
  &::before {
    background-image: url(${(props) => (props.image ? props.image : "")});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    background-position: center;
    content: "";
    position: absolute;
    inset: 0;
    top: 0px;
    opacity: 0.8;
    z-index: -4;
  }
`;
