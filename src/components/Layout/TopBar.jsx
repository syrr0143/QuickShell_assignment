import styled from "styled-components";

export default function TopBar({ children }) {
  return <TopBarWrapper>{children}</TopBarWrapper>;
}

const TopBarWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem 3rem;
  background-color: #ffffff;
`;
