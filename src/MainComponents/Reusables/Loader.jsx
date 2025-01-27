import React, { useEffect } from "react";
import styled from "styled-components";

export const Loader = () => {
  return (
    <Flex>
      <div className="container" data-aos="fade-right">
        <div class="loader"></div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50vh;
    align-items: center;
    justify-content: center;
    /* HTML: <div class="loader"></div> */
    .loader {
      width: 20px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: #000;
      box-shadow: 0 0 0 0 #0004;
      animation: l2 1.5s infinite linear;
      position: relative;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      box-shadow: 0 0 0 0 rgba(38, 59, 212, 1);
      animation: inherit;
      animation-delay: -0.5s;
    }
    .loader:after {
      animation-delay: -1s;
    }
    @keyframes l2 {
      100% {
        box-shadow: 0 0 0 40px #0000;
      }
    }
  }
`;
