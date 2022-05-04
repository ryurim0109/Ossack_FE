import React,{useState} from 'react';
import styled from "styled-components";
import { MyHeader } from '../components/my/index';
import { Input } from '../elements/index';

const SearchPage = () => {
    const [keyword, setKeyword] = useState("");
    
    const onChangeData = (e)=>{
        setKeyword(e.currentTarget.value)
    }
    return (
        <React.Fragment>
            <Outter>
                <MyHeader>검색</MyHeader>
                <Input margin="16px 0" padding="10px" placeholder="지역, 역, 등록번호로 찾아보세요." border="1px solid #000"/>
            </Outter>
        </React.Fragment>
    );
};
const Outter=styled.div`
  width:100%;
  padding-bottom:68px;

`;

export default SearchPage;