import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <Main>
      <Card />
    </Main>
  );
}

export default App;

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.cream};
  padding: 28px 16px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
