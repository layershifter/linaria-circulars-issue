import { styled } from "@linaria/react";
import { styles } from "./pkg-a/index";

export const Title = styled.div`
  color: pink;
  ${styles.icon}
`;
