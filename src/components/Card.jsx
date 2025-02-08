import styled from "styled-components";
import perfumeImageMob from "../assets/image-product-mobile.jpg";
import perfumeImageDesk from "../assets/image-product-desktop.jpg";
import ProductInfo from "./ProductInfo";

const Card = () => {
  return (
    <Article>
      <ImgContainer />
      <ProductInfo />
    </Article>
  );
};

export default Card;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  max-width: 400px;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    max-width: 600px;
    height: 450px;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 240px;
  background-image: ${`url(${perfumeImageMob})`};
  background-size: cover;
  background-position: center;

  @media (min-width: 600px) {
    width: 50%;
    background-image: ${`url(${perfumeImageDesk})`};
    height: 100%;
    max-height: unset;
  }
`;
