import React from "react";
import styled from "styled-components";
import Colors from "../assets/styles/colors";

const CategoryDiv = styled.div`
  border-radius: 5px;
  min-width: 100px;
  border: 2px solid ${Colors.primary};
  margin: 5px;
  background-color: #354256;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
`;

//category title
const CategoryTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  padding: 8px;
  text-align: center;
`;

//icon span
const IconSpan = styled.span`
  margin-right: 5px;
`;

const Category = (props) => {
  let icon;
  switch (props.title) {
    case "animal":
      icon = "fa fa-wpbeginner";
      break;
    case "travel":
      icon = "fa fa-free-code-camp";
      break;
    default:
      icon = "fa fa-superpowers";
      break;
  }
  return (
    <CategoryDiv>
      <CategoryTitle>{props.title ? props.title : "Loading..."}</CategoryTitle>
    </CategoryDiv>
    
  );
};

export default Category;
