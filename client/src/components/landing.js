import { useState } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import Navigation from "./navigation";
import JokeContainer from "./jokeContainer";
import Category from "./category";

const FETCH_CATEGORIES = gql`
  query GetCategories {
    categories
  }
`;

const Landing = () => {
  const [currentCategory, setCurrentCategory] = useState("animal");
  const { loading, error, data } = useQuery(FETCH_CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const categories = data.categories;

  const onCategorySelect = (category) => {
    setCurrentCategory(category)
  }

  return (
    <div className="container">
      <Main>
        <Navigation />
        <CategoriesTitle>Categories</CategoriesTitle>
        <Wrapper>
          <div>
            <CategoryContainer>
              <CategoryLayout>
                {categories &&
                  categories.map((category, index) => {
                    return <Category title={category} key={index} onCategorySelect={onCategorySelect}/>;
                  })}
              </CategoryLayout>
            </CategoryContainer>
          </div>
          <div>
            <JokeContainer currentCategory={currentCategory}/>
          </div>
        </Wrapper>
      </Main>
    </div>
  );
};

const Main = styled.main`
  height: 100vh;
  padding-top: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

//layout for category titles.
const CategoryLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoriesTitle = styled.h3`
  text-align: center;
  font-size: 18px;
`;
export default Landing;
