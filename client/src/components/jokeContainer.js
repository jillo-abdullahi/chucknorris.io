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

const JokeContainer = ({ currentCategory, getNumberOfSkeletons, reference }) => {
  const { loading, error, data } = useQuery(FETCH_CATEGORY_JOKE, {
    variables: { category: currentCategory },
  });

  //skeleton loader for joke container.
  const JokeSkeleton = () => (
    <SkeletonContainer>
      {getNumberOfSkeletons("100%", "0", "250px", 1)}
    </SkeletonContainer>
  );

  // add loader state.
  if (loading) return <JokeSkeleton />;

  //initial state before category is selected

  return (
    <JokeWrapper ref={reference}>
      <JokeDiv>
        {data.joke ? (
          error ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <JokeIcon src={data.joke.icon_url} alt="placeholder" />
              <div>{data.joke.value}</div>
            </>
          )
        ) : (
          <>
            <PlaceholderImage
              src={ChuckLoader}
              alt="placeholder"
            ></PlaceholderImage>
            <div>
              <PlaceholderText>{jokePlaceholderText}</PlaceholderText>
            </div>
          </>
        )}
      </JokeDiv>
    </JokeWrapper>
  );
};

const SkeletonContainer = styled.div`
  margin-top: 2rem;
  border-radius: 10px;
  min-height: 250px;
`;

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
const jokePlaceholderText = "Don't want a roundhouse kick? Pick a category above quick!";

const JokeIcon = styled.img`
  margin-bottom: 20px;
`;

//placeholder image
const PlaceholderImage = styled.img`
  margin-bottom: 20px;
  height: 60px;
  opacity: 0.8;
`;

const PlaceholderText = styled.p`
  opacity: 0.8;
  font-size: 16px;
`;
export default JokeContainer;
