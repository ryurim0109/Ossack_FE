import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../../elements/index";
import { actionCreators as officeActions } from "../../redux/modules/office";
import { useDispatch, useSelector } from "react-redux";
import { SlickSlider } from "../shared/home";

const OfficeLike = (props) => {
  const dispatch = useDispatch();
  const { tabTitle } = props;

  const OfficeLikeList = useSelector((state) => state.office.like_list);

  useEffect(() => {
    dispatch(officeActions.getOfficeLikeDB(tabTitle[0]));
  }, [dispatch, tabTitle]);

  return (
    <React.Fragment>
      {OfficeLikeList &&
        OfficeLikeList.map((office, idx) => {
          return (
            <Grid key={idx}>
              <Grid
                width="100%"
                margin="16px 0"
                height="235px"
                bg="#999"
                borderRadius="8px"
                position="relative"
                overflow="hidden"
              >
                <Grid>
                  <SlickSlider>
                    {office.images &&
                      office.images.map((image, idx) => {
                        return (
                          <Image
                            key={idx}
                            padding="235px"
                            bottom="0"
                            src={image}
                            shape="rectangle"
                            position="absolute"
                          />
                        );
                      })}
                  </SlickSlider>
                  {office.mylike ? (
                    <Button
                      fill_like
                      position="absolute"
                      right="8px"
                      top="8px"
                      color="#FF0000"
                      _onClick={() =>
                        dispatch(officeActions.deleteLikeDB(office.estateid))
                      }
                    />
                  ) : (
                    <Button
                      is_like
                      position="absolute"
                      right="8px"
                      top="8px"
                      color="#fff"
                      _onClick={() =>
                        dispatch(officeActions.clickLikeDB(office.estateid))
                      }
                    />
                  )}
                </Grid>
              </Grid>
              <Grid
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
                height="40px"
              >
                <Text color="#000000" size="14px">
                  {office.type ? office.type : "트리플 역세권 사무실"}
                </Text>
                <Text color="#000000" size="14px">
                  <Span>월세</Span> {office.rent_fee ? office.rent_fee : 200}만
                  {""}
                  <Span>보증금</Span>{" "}
                  {office.deposit ? office.deposit : "3,000만"}
                </Text>
              </Grid>
            </Grid>
          );
        })}
    </React.Fragment>
  );
};

const Span = styled.span`
  font-size: 10px;
`;

export default OfficeLike;
