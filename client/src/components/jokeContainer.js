import React from "react";
import styled from "styled-components";
import Colors from "../assets/styles/colors";
import ChuckLoader from "../assets/images/chuck-loader.png";

const JokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  border: 2px solid ${Colors.primary};
  background: #438e47;
  margin-top: 2rem;
  border-radius: 10px;
  min-height: 250px;
`;

const ButtonWrapper = styled.div`
  border-top: 2px solid ${Colors.primary};
  width: 100%;
  padding: 10px;
  text-align: right;
`;

const JokeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 3;
  padding: 20px;
`;

// joke category not selected content
const jokePlaceholder =
  "Click on a category above before you get a roundhouse kick!";
const joke = false;

//placeholder image
const PlaceholderImage = styled.img`
  margin-bottom: 20px;
  width: 128px;
  opacity: 0.5;
`;

const PlaceholderText = styled.p`
  opacity: 0.5;
`;

const JokeContainer = () => {
  return (
    <JokeWrapper>
      <JokeDiv>
        {joke ? (
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            blanditiis at, expedita sit quaerat cumque laborum vel doloribus
            asperiores nostrum sed, nisi deleniti nulla dicta nihil perspiciatis
          </span>
        ) : (
          <div>
            <PlaceholderImage src={ChuckLoader} alt="placeholder" />
            <PlaceholderText>{jokePlaceholder}</PlaceholderText>
          </div>
        )}
      </JokeDiv>
      <ButtonWrapper>
        <button className="btn btn-primary" disabled={!joke}>Next</button>
      </ButtonWrapper>
    </JokeWrapper>
  );
};
export default JokeContainer;
