import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Split, Row, Section } from "./Layout";
import Link from "./Link";

import {
  Display,
  LargeHeading,
  MediumHeading,
  SmallHeading,
  XsHeading,
  SubHeading,
  BodyMain
} from "./Typography";
import Breakpoint from "./Breakpoint";

import theme from "./theme";
import "./App.css";

const Uppercase = styled(SmallHeading)`
  text-transform: uppercase;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Section>
            <Breakpoint />
          </Section>

          <Section>
            <Split>
              <Display color={theme.colours.magenta}>Display</Display>
              <SubHeading>Titulo de alguma publicação</SubHeading>
            </Split>

            <Split>
              <LargeHeading>LargeHeading</LargeHeading>
              <SubHeading>Nome de alguma seção</SubHeading>
            </Split>

            <Split>
              <MediumHeading>MediumHeading</MediumHeading>
              <SubHeading>Bons headers de índices</SubHeading>
            </Split>

            <Split>
              <XsHeading>XsHeading</XsHeading>
              <SubHeading>Sub header</SubHeading>
            </Split>

            <Split>
              <SmallHeading>SmallHeading</SmallHeading>
              <SubHeading>Subtítulo de alguma publicação</SubHeading>
            </Split>

            <Split>
              <SubHeading>SubHeading</SubHeading>
              <SubHeading>Trechos ou headers em destaque no corpo do texto</SubHeading>
            </Split>

            <Split>
              <BodyMain>BodyMain</BodyMain>
              <SubHeading>Corpo do texto</SubHeading>
            </Split>
          </Section>

          <Section>
            <Row>
              <Display as="p" color="red" fontSize="44px">
                Display
              </Display>
              <BodyMain
                fontSize={2}
              >{`<Display as="p" color={theme.colours.darkLow}> fontSize="44px"`}</BodyMain>
            </Row>

            <Row>
              <LargeHeading color="green" fontWeight="400">LargeHeading</LargeHeading>
              <BodyMain
                fontSize={2}
              >{`<LargeHeading color="green" fontWeight="400">LargeHeading</LargeHeading>`}</BodyMain>
            </Row>

            <Row>
              <LargeHeading color="#fff" bg={theme.colours.darkHigh}>
                MediumHeading
              </LargeHeading>
              <BodyMain
                fontSize={2}
              >{`<LargeHeading color="#fff" bg={theme.colours.darkHigh}>`}</BodyMain>
            </Row>

            <Row>
              <XsHeading>
                <Link href="#">Extra Small Heading</Link>
              </XsHeading>
              <BodyMain
                fontSize={2}
              >{`<XsHeading><Link href="#">Extra Small Heading</Link></XsHeading>`}</BodyMain>
            </Row>

            <Row>
              <Uppercase fontSize={3} fontWeight={700} as="h6">
                Small Heading
              </Uppercase>
              <BodyMain
                fontSize={2}
              >{`<Uppercase fontSize={3} fontWeight={700} as="h6">Small Heading</Uppercase>`}</BodyMain>
            </Row>

            <Row>
              <SubHeading as="i">Main Body</SubHeading>
              <br />
              <BodyMain
                fontSize={2}
              >{`<SubHeading as="i">Main Body</SubHeading>`}</BodyMain>
            </Row>
          </Section>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
