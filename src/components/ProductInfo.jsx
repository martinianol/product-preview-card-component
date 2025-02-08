import styled from "styled-components";

const ProductInfo = () => {
  return (
    <Container>
      <Flex gapMob="20px" gapDesktop="30px">
        <Flex gapMob="24px" gapDesktop="29px">
          <Flex gapMob="16px" gapDesktop="24px">
            <Flex gapMob="12px" gapDesktop="20px">
              <Overline>Perfume</Overline>
              <Title>Gabrielle Essence Eau De Parfum</Title>
            </Flex>
            <Description>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </Description>
          </Flex>
          <PriceInfo>
            <NewPrice>$149.99</NewPrice>
            <OldPrice>$169.99</OldPrice>
          </PriceInfo>
        </Flex>
        <Button>Add to Cart</Button>
      </Flex>
    </Container>
  );
};

export default ProductInfo;

const Container = styled.section`
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    width: 50%;
    padding: 32px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gapMob }) => gapMob || "16px"};

  @media (min-width: 600px) {
    gap: ${({ gapDesktop }) => gapDesktop || "24px"};
  }
`;

const Overline = styled.p`
  ${({ theme }) => theme.typography.overline}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.aurometal};
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.display};
  color: ${({ theme }) => theme.colors.gunmetal};
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body}
  color: ${({ theme }) => theme.colors.aurometal};
`;

const PriceInfo = styled.div`
  display: flex;
  gap: 19px;
  align-items: center;
`;

const NewPrice = styled.p`
  ${({ theme }) => theme.typography.display}
  color: ${({ theme }) => theme.colors.deepAquamarine};
`;

const OldPrice = styled.p`
  ${({ theme }) => theme.typography.body}
  font-size: 14px;
  font-weight: 400%;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.aurometal};
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.deepAquamarine};
  width: 100%;
  border-radius: 8px;
  padding: 15px;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.deepAquamarineHover};
    cursor: pointer;
  }
`;
