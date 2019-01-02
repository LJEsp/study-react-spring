import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Transition, config } from "react-spring";

const StyledApp = styled.div``;

const StyledBox = styled.div`
  box-sizing: border-box;
  width: 5em;
  height: 5em;
  background-color: orange;
  border-radius: 100%;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <h2>Spring</h2>

        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <StyledBox style={props} />}
        </Spring>

        <h3>Default</h3>
        <Spring
          config={config.default}
          from={{ transform: "scale(0)" }}
          to={{ transform: "scale(1)" }}
        >
          {props => <StyledBox style={props} />}
        </Spring>

        <h3>Gentle</h3>
        <Spring
          config={config.gentle}
          from={{ transform: "scale(0)" }}
          to={{ transform: "scale(1)" }}
        >
          {props => <StyledBox style={props} />}
        </Spring>

        <h3>Wobbly</h3>
        <Spring
          config={config.wobbly}
          from={{ transform: "scale(0)" }}
          to={{ transform: "scale(1)" }}
        >
          {props => <StyledBox style={props} />}
        </Spring>

        <h3>Stiff</h3>
        <Spring
          config={config.stiff}
          from={{ transform: "scale(0)" }}
          to={{ transform: "scale(1)" }}
        >
          {props => <StyledBox style={props} />}
        </Spring>

        <h3>Slow</h3>
        <Spring
          config={config.slow}
          from={{ transform: "scale(0)" }}
          to={{ transform: "scale(1)" }}
        >
          {props => <StyledBox style={props} />}
        </Spring>

        <h3>Molasses</h3>
        <Spring
          config={config.molasses}
          from={{ transform: "scale(0)" }}
          to={{ transform: "scale(1)" }}
        >
          {props => <StyledBox style={props} />}
        </Spring>

        <h3>Delay</h3>
        <Spring
          config={{ delay: 2000 }}
          from={{ transform: "scale(0)" }}
          to={{ transform: "scale(1)" }}
        >
          {props => <StyledBox style={props} />}
        </Spring>
      </StyledApp>
    );
  }
}

export default App;
