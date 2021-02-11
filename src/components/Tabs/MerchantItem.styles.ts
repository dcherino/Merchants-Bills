import styled from 'styled-components';

interface TransactionProps {
  display: string;
}

interface ButtonProps {
  display: string;
}

export const MerchantWrapper = styled.div`
  border: 1px solid #d5d7f9;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 0;
  cursor: pointer;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
`;

export const BasicInfo = styled.div`
  flex: 1 0 auto;
  padding: 0 2rem;

  h3 {
    margin: 0;
    font-family: 'Roboto', sans-serif;;
    color: #2e3247;
    font-size: 1.6rem;
  }

  div {
    font-family: 'Roboto', sans-serif;;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  strong {
    margin: 0 0.3rem;
  }
`;

export const Image = styled.div`
  border: 1px solid #d5d7f9;
  border-radius: 50%;
  overflow: hidden;
  width: 3rem;
  height: 3rem;
  flex: 0 0 auto;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Button = styled.button`
  flex: 0 0 auto;
  border: 0;
  background-color: #0815ff;
  border-radius: 25px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  padding: 11px 36px;
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
  text-align: center;
  display: ${(props: ButtonProps) =>
    props.display === 'show' ? 'block' : 'none'};

  &:hover {
    background-color: #08fdfd;
    color: #0815ff;
  }
`;

export const Transactions = styled.div`
  background-color: #efefff;
  max-height: ${(props: TransactionProps) =>
    props.display === 'show' ? '1000px' : '0'};
  transition: 0.4s;
  overflow: hidden;

  h4{
    margin: 0;
    font-family: 'Roboto', sans-serif;;
    font-size: 1.2rem;
    margin: 1rem;
    color: #2b2b96;
    text-transform: uppercase;
  }

  ul {
    margin: 0;
    padding: 0 2rem;;
    list-style: none;
  }

  li {
    padding: 1rem 0;
    font-size: 0.8rem;
    color: #2b2b96;
    border-bottom: 1px dashed #babade;
  }
`;
