import React from 'react';
import {Header,Banner,MainPost,Honey} from '../components/home';

function Main() {
  return (
    <React.Fragment>
      <Header/>
      <Banner/>
      <MainPost/>
      <Honey/>
    </React.Fragment>
  );
}

export default Main;