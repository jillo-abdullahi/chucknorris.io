import styled from "styled-components";
import Navigation from "./navigation";
import JokeContainer from "./jokeContainer";
import Category from "./category";

const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

//main
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

const Landing = () => {
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
                    return <Category title={category} key={index} />;
                  })}
              </CategoryLayout>
            </CategoryContainer>
          </div>
          <div>
            <JokeContainer />
          </div>
        </Wrapper>
      </Main>
    </div>
  );
};

export default Landing;
