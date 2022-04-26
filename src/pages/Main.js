import React from 'react';
import Center from '../components/Center';
import {Header,Banner} from '../components/home';

function Main() {
  return (
    <React.Fragment>
      <Header/>
      <Banner/>
      <Center />

    </React.Fragment>
  );
}

export default Main;