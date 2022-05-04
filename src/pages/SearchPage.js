import React from 'react';
import styled from "styled-components";
import { MyHeader } from '../components/my/index';
import {Input} from '../elements/index';

const SearchPage = () => {
    return (
        <React.Fragment>
            <Outter>
                <MyHeader>검색</MyHeader>
                <Input padding="10px" placeholder="지역, 역, 등록번호로 찾아보세요." />
            </Outter>
        </React.Fragment>
    );
};
const Outter=styled.div`
  width:100%;
  padding-bottom:68px;

`;

export default SearchPage;