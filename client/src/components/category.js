import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Colors from "../assets/styles/colors";

const Category = ({ onCategorySelect, title }) => {
  const currentStoredCategory = useSelector((state) => state.currentCategory);

  return (
    <CategoryDiv
      currentStoredCategory={currentStoredCategory}
      title={title}
      href="#to-the-joke"
      onClick={() => onCategorySelect(title)}
    >
      <CategoryTitle
        currentStoredCategory={currentStoredCategory}
        title={title}
      >
        {title ? title : ""}
      </CategoryTitle>
    </CategoryDiv>
  );
};

//individual category wrapper.
const CategoryDiv = styled.a`
  border-radius: 5px;
  min-width: 100px;
  border: 2px solid ${Colors.primary};
  margin: 5px;
  box-shadow: ${(props) =>
    props.title === props.currentStoredCategory
      ? "none"
      : "1px 1px #000, 1px 1px #000, 2px 2px #000"};
  background-color: ${(props) =>
    props.title === props.currentStoredCategory ? "#438e47" : "#354256"};
  cursor: pointer;
  text-align: center;

  &:active {
    box-shadox: none;
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }

  &:focus {
    box-shadox: none;
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }

  &:hover {
    text-decoration: none;
  }
`;

//category title
const CategoryTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) =>
    props.title === props.currentStoredCategory ? "#000" : "#fff"};
  padding: 8px;
  text-align: center;
`;

export default Category;
