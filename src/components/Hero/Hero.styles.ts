import styled from 'styled-components';

export const WrapHero = styled.div`
  width: 100vw;
  height: 400px;
  overflow: hidden;
  background-color: #0815ff;
  position: relative;
`;

export const TextWrapper = styled.div`
  width: 3000px;
  display: flex;
  flex-direction: row;
  transform: rotate(-34deg) translate(10%, -60%);
  flex-wrap: wrap-reverse;
  opacity: 0.6;
`;

export const Title = styled.span`
  font-family: 'Roboto', sans-serif;;
  font-size: 8rem;
  display: block;
  marign: 0;
  padding: 0rem;
  text-transform: uppercase;
  letter-spacing: -0.5rem;
  line-height: 0.8;
  -webkit-text-stroke: 3px #08fdfd;
  -webkit-text-fill-color: #0815ff;
`;

export const Subtitle = styled.span`
  font-family: 'Roboto', sans-serif;;
  font-size: 6rem;
  display: block;
  marign: 0;
  padding: 0.5rem;
  text-transform: uppercase;
  letter-spacing: -0.4rem;
  line-height: 0.8;
  -webkit-text-stroke: 2px #08fdfd;
  -webkit-text-fill-color: #6069ff;
`;

export const Slogan = styled.h2`
  color: #fff;
  font-size: 10rem;
  font-size: Helvetica;
  max-width: 500px;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;
