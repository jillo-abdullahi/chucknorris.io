import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Colors from "../assets/styles/colors";
import ChuckLoader from "../assets/images/chuck-loader.png";

const FETCH_CATEGORY_JOKE = gql`
  query GetCategoryJoke($category: String!) {
    joke(category: $category) {
      value
      icon_url
    }
  }
`;

const JokeContainer = ({ currentCategory }) => {
  const { loading, error, data, refetch } = useQuery(FETCH_CATEGORY_JOKE, {
    variables: { category: currentCategory },
  });

  return (
    <JokeWrapper>
      <JokeDiv>
        {loading ? (
          <div>
            <PlaceholderImage src={ChuckLoader} alt="loader icon"/>
            <PlaceholderText>{jokePlaceholder}</PlaceholderText>
          </div>
        ) : error ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <JokeIcon src={data.joke.icon_url} alt="placeholder" />
            <div>{data.joke.value}</div>
          </>
        )}
      </JokeDiv>
      <ButtonWrapper>
        <button className="btn btn-primary" disabled={loading}>
          Next
        </button>
      </ButtonWrapper>
    </JokeWrapper>
  );
};

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 3;
  padding: 20px;
`;

// joke category not selected content
const jokePlaceholder =
  "Click on a category above before you get a roundhouse kick!";

const JokeIcon = styled.img`
  margin-bottom: 20px;
`;

//placeholder image
const PlaceholderImage = styled.img`
  margin-bottom: 20px;
  height: 60px;
  opacity: 0.5;

`;

const PlaceholderText = styled.p`
  opacity: 0.5;
`;
export default JokeContainer;
