import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../../elements/index";
import XScrollDrag from "../shared/XScrollDrag";
import {OfficeList,NearStation} from "./index";

const Office = () => {
  const tabTitle = ['맛집', '역'];
  const tab = { 0: <OfficeList tabTitle={tabTitle}/>, 1: <NearStation tabTitle={tabTitle}/> };
  const [openTab, setOpenTab] =useState(0);

  const onClickTab = (idx) => {
    setOpenTab(idx);
  };
  return (
    <React.Fragment>
       <Grid margin="16px 0 0 0" display="flex" alignItems="center">
                {tabTitle.map((title, idx) => {
                    return (
                      <Grid width="88px" cursor="pointer"  key={idx} height="25px" bg={openTab===idx? "#ff0000":"#ccc"}  borderRadius="100px" _onClick={()=>{
                        onClickTab(idx)
                      }}
                      display="flex" alignItems="center" justifyContent="center" margin="0 4px 0 0">#{title}근처</Grid>
                    );
                  })}
                
              
        </Grid>
        
        <Grid overflow="hidden" width="100%">
            <XScrollDrag>
                <FlexBox  >
                  
                    {/* map돌릴 부분 */}
                    {tab[openTab]}
                  {/* map돌릴 부분 */}
   
                </FlexBox>
                </XScrollDrag>
            </Grid>
        </React.Fragment>
  );
};
const FlexBox=styled.div`
 width:500%;
 display:flex;
 gap:10px;

`;
const Span = styled.span`
  font-size: 0.625rem;
`;

export default Office;
