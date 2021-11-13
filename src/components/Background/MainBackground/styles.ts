import styled from "@emotion/styled";
import {
  leftTopGreen,
  leftTopYellow,
  rightTopGreen,
  rightTopYellow,
  rightBottomGreen,
  leftBottomYellow,
} from "../../../assets/index";

export const BackgroundContainer = styled.div`
  position: absolute;
  width: 100vw;
  overflow: hidden;
  z-index: -10
` 

export const Container = styled.div`
  width: 1114px;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
`;

export const LeftTopGreen = styled.div`
  position: absolute;
  top: 294px;
  width: 168px;
  height: 232px;
  background-image: url(${leftTopGreen});
`;

export const LeftTopYellow = styled.div`
  position: absolute;
  top: 382px;
  width: 256px;
  height: 510px;
  background-image: url(${leftTopYellow});
`;

export const RightTopGreen = styled.div`
  position: absolute;
  top: 85px;
  right: 0px;
  width: 343px;
  height: 909px;
  background-image: url(${rightTopGreen});
`;

export const RightTopYellow = styled.div`
  position: absolute;
  top: 631px;
  right: 0px;
  width: 176px;
  height: 176px;
  background-image: url(${rightTopYellow});
`;

export const YellowHalf = styled.div`
  position: absolute;
  top: 1931px;
  width: 147px;
  height: 230px;
  background-image: url(${leftBottomYellow});
`;

export const GreenPolygon = styled.div`
  position: absolute;
  top: 1287px;
  right: 0px;
  width: 367px;
  height: 434px;
  background-image: url(${rightBottomGreen});
`;
