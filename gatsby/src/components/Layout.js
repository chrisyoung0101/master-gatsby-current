
//  Reusable Layout : general structure for a header, footer, nav, etc that you want to show up on multiple pages


import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: white url(${stripes});
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

//TODO : typo
const ContentSytles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  // {children} - if a component has imported Layout it will be available here 
  //              as props.children.

  // {children} here is from gatsby-browser.js which is set up to wrap each Gatsby page component
  //      aka element in the Layout so that we are not individually importing and wrapping each Gatsby
  //      page's component in <Layout> </Layout>

  // console.dir(children);
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentSytles>
          <Nav />
          {children}
          <Footer />
        </ContentSytles>
      </SiteBorderStyles>
    </>
  );
}
