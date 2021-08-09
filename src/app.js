import React from "react";
import Container, { Global } from "./component/Container";
import Theme from "./component/Theme";

const App = () => {
  return (
    <>
      <Global />
      <Container>
        <Theme />
      </Container>
    </>
  );
};

export default App;
