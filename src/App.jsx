import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Main>
      Perfume Gabrielle Essence Eau De Parfum A floral, solar and voluptuous
      interpretation composed by Olivier Polge, Perfumer-Creator for the House
      of CHANEL. $149.99 $169.99 Add to Cart
    </Main>
  );
}

export default App;

const Main = styled.main`
  ${({ theme }) => theme.typography.display}
  color: ${({ theme }) => theme.colors.gunmetal}
`;
