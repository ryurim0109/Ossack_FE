import React from 'react';
import styled from 'styled-components';
import { Grid,Text } from '../elements';

const BoardList = (props) => {
    return (
        <>
           <Outter>
                <Inner>
                    <Grid>
                        <Grid position="relative" width="150px" height="35px" borderRadius="4px" >
                        <Sel name="cate">
                            <option value='' disabled selected>카테고리 선택 🍊</option>
                            <option value="apple">apple</option>
                            <option value="orange">orange</option>
                            <option value="grape">grape</option>
                            <option value="melon">melon</option>
                        </Sel>
                        <span class="icoArrow"><img src="https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png" alt="" /></span>
                        </Grid>
                    </Grid>
                </Inner>
           </Outter>
        </>
    );
};
const Outter =styled.div`
    width:100%;
    min-height:1000px;
    background:#e4e4e4;
    position:relative;
`;
const Inner=styled.div`
    width:1200px;
    background:#ccc;
    min-height:1000px;
    position:relative;
    margin:0 auto;
    @media screen and (max-width: 1200px) {
        width:100%;
    }

`;
const Sel=styled.select`
    width: inherit;
    height: inherit;
    background: transparent;
    outline: 0 none;
    padding: 0 5px;
    position: relative;
    z-index: 3;
    cursor:pointer;
`;

export default BoardList;