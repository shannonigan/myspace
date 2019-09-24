import styled from "styled-components";

const fontSize = (size) => {
  switch(size) {
    case "large":
      return "40px";
    case "medium":
      return "30px";
    case "small":
      return "25px";
    default:
      return "20px";
  };
};



export const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  font-size: ${ props => fontSize(props.fontSize) } !important;
`;


export const WordText = styled.p`
  color: black !important;
  text-align: center;
  font-size: ${ props => fontSize(props.fontSize) } !important;
`;