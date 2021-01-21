import { useState } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { useDispatch } from "react-redux";

import Navigation from "./navigation";
import JokeContainer from "./jokeContainer";
import Footer from "./footer";
import Category from "./category";
import SkeletonLoader from "./skeletonLoader";
import { storeCurrentCategory } from "../redux/actions";

const FETCH_CATEGORIES = gql`
  query GetCategories {
    categories
  }
`;

const Landing = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("");
  const { loading, error, data } = useQuery(FETCH_CATEGORIES);
  if (error) return <p>Error: {error.message}</p>;

  const onCategorySelect = (category) => {
    setCurrentCategory(category);

    // dispatch current category to redux store.
    // using this to style current category that's been selected.
    dispatch(storeCurrentCategory(category));
  };

  //get number of skeleton loaders for category section.
  const getNumberOfSkeletons = (
    width,
    margin,
    height = "auto",
    numSkeletons = 16
  ) => {
    let content = [];
    for (let i = 0; i < numSkeletons; i++) {
      content.push(
        <SkeletonLoader key={i} width={width} margin={margin} height={height} />
      );
    }

    return content;
  };

  // Skeleton loader for categories section.
  const CategoriesSkeleton = () => (
    <SkeletonContainer>
      {getNumberOfSkeletons("100px", "5px")}
    </SkeletonContainer>
  );

  return (
    <div className="container">
      <Main>
        <Navigation />
        <CategoriesTitle>Categories</CategoriesTitle>
        <Wrapper>
          <div>
            <CategoryContainer>
              <CategoryLayout>
                {loading ? (
                  <CategoriesSkeleton />
                ) : (
                  data.categories &&
                  data.categories.map((category, index) => {
                    return (
                      <Category
                        title={category}
                        key={index}
                        onCategorySelect={onCategorySelect}
                      />
                    );
                  })
                )}
              </CategoryLayout>
            </CategoryContainer>
          </div>
          <div id="to-the-joke">
            <JokeContainer
              currentCategory={currentCategory}
              getNumberOfSkeletons={getNumberOfSkeletons}
            />
          </div>
        </Wrapper>
      </Main>
      <Footer />
    </div>
  );
};

//category skeleton loader container.
const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Main = styled.main`
  padding: 20px 0;
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
