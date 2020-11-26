import styled from "styled-components";

import CircleProgress from "./index";

const CircleProgressBar = styled(CircleProgress)`
  .svgStyle {
    width: 220px;
    height: 220px;
    margin: 0 auto;
  }
  .circle-label {
    transform: translateY(0.25em);
  }

  .circle-percentage {
    font-family: "Raleway", sans-serif;
    font-size: 0.6em;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.15em);
  }
`;
export default CircleProgressBar;
