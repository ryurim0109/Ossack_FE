import React, { useEffect } from "react";
import { Grid, Button, Text, Image } from "../../elements/index";
import styled from "styled-components";
import { actionCreators as officeActions } from "../../redux/modules/office";
import { useDispatch, useSelector } from "react-redux";

const OfficeList = (props) => {
  const dispatch = useDispatch();
  const foodOfficeList = useSelector((state) => state.office.list);
  //console.log(foodOfficeList);

  const { tabTitle } = props;
  //console.log(tabTitle[0])

  useEffect(() => {
    dispatch(officeActions.getMainOfficeDB(tabTitle[0]));
  }, [dispatch, tabTitle]);
  return (
    <React.Fragment>
      {/* map돌리기 */}
      {foodOfficeList &&
        foodOfficeList.map((o, idx) => {
          return (
            <Grid
              key={idx}
              width="320px"
              margin="20px 0 0 0"
              height="235px"
              bg="#999"
              borderRadius="8px"
              position="relative"
              overflow="hidden"
            >
              <Image
                padding="235px"
                bottom="0"
                src={o.images[0]}
                shape="rectangle"
                position="absolute"
              />
              <Grid
                width="100%"
                height="235px"
                bottom="0"
                position="absolute"
                bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8) 5.74%, rgba(108, 108, 108, 0.0421707) 86.75%, rgba(118, 118, 118, 0) 93.49%)"
              ></Grid>
              {o.mylike ? (
                <Button
                  fill_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#fff"
                  _onClick={() =>
                    dispatch(officeActions.deleteLikeDB(o.estateid))
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
                    dispatch(officeActions.clickLikeDB(o.estateid))
                  }
                />
              )}

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
                <Text color="#fff" size="14px">
                  {o.type}
                </Text>
                <Text color="#fff" size="14px" bold>
                  <Span>월세</Span> {o.rent_fee}만 <Span>보증금</Span>{" "}
                  {o.deposit}만
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
  font-weight: normal;
`;

export default OfficeList;
