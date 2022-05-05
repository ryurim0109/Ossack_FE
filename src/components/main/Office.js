import React from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../../elements/index";
import XScrollDrag from "../shared/XScrollDrag";

const Office = () => {
  return (
    <React.Fragment>
       <Grid margin="16px 0 0 0" display="flex" alignItems="center">
                <Grid width="88px" height="25px" bg="#ccc" borderRadius="100px" 
                display="flex" alignItems="center" justifyContent="center" margin="0 4px 0 0">#맛집 근처</Grid>
                <Grid width="88px" height="25px" bg="#ccc" borderRadius="100px" 
                display="flex" alignItems="center" justifyContent="center">#역 근처</Grid>
        </Grid>
        
        <Grid overflow="hidden" width="100%">
            <XScrollDrag>
                <FlexBox  >
                    {/* map돌릴 부분 */}
                    <Grid
                    width="320px"
                    margin="12px 0 32px 0"
                    height="235px"
                    bg="#999"
                    borderRadius="8px"
                    position="relative"
                    overflow="hidden"
                    > 
                    <Image padding="235px"bottom="0" src="https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg" shape="rectangle" position="absolute"/>
                    <Grid  width="100%" height="235px"bottom="0"
                    position="absolute" bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8) 5.74%, rgba(108, 108, 108, 0.0421707) 86.75%, rgba(118, 118, 118, 0) 93.49%)">
                    </Grid>
                      <Button
                        is_like
                        position="absolute"
                        right="8px"
                        top="8px"
                        color="#fff"
                        />
                        <Grid
                        position="absolute"
                        bottom="0"
                        padding="0 16px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        width="100%"
                        height="60px"
                        >
                      
                          <Text color="#fff" size="0.875rem">
                            트리플 역세권 사무실
                          </Text>
                          <Text color="#fff" size="0.875rem">
                            <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
                          </Text>
                        </Grid>
                  </Grid>
       {/* map돌릴 부분 */}
       <Grid
                    width="320px"
                    margin="12px 0 32px 0"
                    height="235px"
                    bg="#999"
                    borderRadius="8px"
                    position="relative"
                    overflow="hidden"
                    > 
                    <Image padding="235px"bottom="0" src="https://velog.velcdn.com/images/ryurim0109/post/6435c602-4d7e-4018-81fa-269d93d5d351/image.jpg" shape="rectangle" position="absolute"/>
                    <Grid  width="100%" height="235px"bottom="0"
                    position="absolute" bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8) 5.74%, rgba(108, 108, 108, 0.0421707) 86.75%, rgba(118, 118, 118, 0) 93.49%)">
                    </Grid>
                      <Button
                        is_like
                        position="absolute"
                        right="8px"
                        top="8px"
                        color="#fff"
                        />
                        <Grid
                        position="absolute"
                        bottom="0"
                        padding="0 16px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        width="100%"
                        height="60px"
                        >
                      
                          <Text color="#fff" size="0.875rem">
                            트리플 역세권 사무실
                          </Text>
                          <Text color="#fff" size="0.875rem">
                            <Span>월세</Span> 200만 <Span>보증금</Span> 3,000만
                          </Text>
                        </Grid>
                  </Grid>
                </FlexBox>
                </XScrollDrag>
            </Grid>
        </React.Fragment>
  );
};
const FlexBox=styled.div`
 width:200%;
 display:flex;
 gap:10px;

`;
const Span = styled.span`
  font-size: 0.625rem;
`;

export default Office;
