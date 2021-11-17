import styled from "@emotion/styled";
import { color } from "../../styles/color";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 100%;
  grid-column: 1/13;
  margin-top: 60px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 5px;
  object-position: center;
  user-select: none;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: baseline;
`;

export const TitleInner = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Title = styled.div`
  font: ${font.headline3};
  color: ${color.black};
  margin-right: 12px;
`;

export const Gray = styled.div`
  font: ${font.body3};
  color: ${color.darkGray};
`;

export const DetailContainer = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const MoneyContainer = styled.div`
  display: flex;
`;

export const NowMoney = styled.div`
  color: ${color.green};
  font: ${font.body2};
`;

export const GrayMid = styled.div`
  color: ${color.darkGray};
  font: ${font.body2};
`;

export const UserContainer = styled.div`
  img {
    margin-right: 8px;
    height: 16px;
  }
  color: ${color.darkGray};
  font: ${font.body2};
  display: flex;
  align-items: center;
`;

export const TimeContainer = styled.div`
  img {
    margin-right: 8px;
    height: 16px;
  }
  color: ${color.darkGray};
  font: ${font.body3};
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 34px;
  margin-bottom: 48px;
  font: ${font.body3};
  color: ${color.black};
  width: 100%;
`;

