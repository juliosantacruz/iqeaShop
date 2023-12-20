import React from "react";
import styled from "styled-components";

function LoadingSpiner({ className }: any) {
  return <span className={className} >.-</span>;
}

export default styled(LoadingSpiner)`
z-index:50;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: rotate .9s linear infinite;

  ::before{
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #012044;
    animation: prixClipFix 3s linear infinite;
  }
  ::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: prixClipFix 3s linear infinite;
    transform: rotate(180deg);
  }
  ::after {
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: #ff3d00;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    75%{
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
  }
`;
