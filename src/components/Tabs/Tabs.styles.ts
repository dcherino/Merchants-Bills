import styled from 'styled-components';

export const Main = styled.main`
  background-color: #fff;
`;

export const InnerWrapper = styled.div`
  max-width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  top: -8rem;
  box-shadow: 1px 1px 12px #d5d7f9;
  padding: 1rem 2rem;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const TabsNavigation = styled.div`
  background-color: #fff;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  button {
    background-color: #fff;
    border: 2px solid #0815ff;
    border-radius: 25px;
    width: 300px;
    color: #0815ff;
    cursor: pointer;
    padding: 11px 36px;
    font-weight: 400;
    font-size: 1.2rem;
    margin: 1rem;
    text-align: center;
  }

  button:hover {
    background-color: #6069ff;
    color: #fff;
  }

  button:active {
    background-color: #08fdfd;
  }

  button.isActive {
    background-color: #0815ff;
    border: 0;
    color: #fff;
  }
`;
