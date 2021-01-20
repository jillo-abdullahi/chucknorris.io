import React from "react";
import styled, { keyframes } from "styled-components";
const Navigation = () => {
  return (
    <NavWrapper>
      <Title style={{ textAlign: "center" }}>Chuck-norris.io</Title>
      <Subtitle>
        Because there is no such thing as enough Chuck Norris jokes.
      </Subtitle>
    </NavWrapper>
  );
};

const Title = styled.h1`
`;

const Subtitle = styled.span`
  color: #000;
  font-weight: 500;
`;

const shake = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const NavWrapper = styled.div`
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 1px 1px #000, 1px 1px #000, 2px 2px #000;
  background-color: #38783c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%23438e47'/%3E%3C/svg%3E");

  &:hover {
    animation: ${shake} 0.5s;
    animation-iteration-count: 1;
  }
`;

export default Navigation;
