import React from 'react';
import styled from 'styled-components';
import Tabs from './components/Tabs/Tabs';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 400px 1fr 80px;
  gap: 0px 0px;
  grid-template-areas:
    'Header'
    'Hero'
    'Content'
    'Footer';
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Hero title={'Daniel Cherino'} subtitle={'FrontEnd Developer'} />
      <Tabs />
      <Footer />
    </Wrapper>
  );
};

export default App;
