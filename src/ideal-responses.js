import React from "react";
import styled from "@emotion/styled";
import { Heading, CodePane } from "spectacle";
import desktop from "./ideal-responses.desktop.example";
import mobile from "./ideal-responses.mobile.example";
import api from "./ideal-responses.api.example";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
`;

export class IdealResponses extends React.Component {
  render() {
    return (
      <>
        <Heading size={6} textColor="primary" margin="50px 0">
          This is what we actually need
        </Heading>
        <Grid>
          <CodePane
            lang="js"
            source={desktop}
            margin="20px auto"
            overflow="overflow"
            textSize={20}
          />
          <CodePane
            lang="js"
            source={mobile}
            margin="20px auto"
            overflow="overflow"
            textSize={20}
          />
          <CodePane
            lang="js"
            source={api}
            margin="20px auto"
            overflow="overflow"
          />
        </Grid>
      </>
    );
  }
}
