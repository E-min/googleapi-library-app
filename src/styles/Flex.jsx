import { css } from "styled-components";

const Flex = css`
  display: flex;
  ${(props) => {
    const cssProps = [
      "justify-content:",
      "align-items:",
      "flex-direction:",
      "gap:",
    ];
    const values = props["data-flex"]?.split(" ");
    let styles = "";
    for (let i = 0; i < values?.length; i++) {
      styles += `${cssProps[i]}${values[i]};`;
    }
    return styles;
  }}
`;
export default Flex;
