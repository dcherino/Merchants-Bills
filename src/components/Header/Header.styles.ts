import styled from 'styled-components';

export const WrapHeader = styled.header`
  grid-area: Header;
  background-color: #fff;
`;

export const InnerWrapper = styled.div`
  max-width: 1200px;
  padding: 0 2rem;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    color: #2e3247;
    font-family: Roboto;
  }
`;

export const LogoWrap = styled.div`
  border-radius: 30px;
  border-bottom-left-radius: 0;
  background-color: #0815ff;
  padding: 0.6rem;
`;