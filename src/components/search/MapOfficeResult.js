import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../redux/configStore";
import { Grid, Image, Button, Text } from "../../elements/index";
import { SlickSlider } from "../shared/home";
import { actionCreators as officeActions } from "../../redux/modules/office";
import ossack from "../../assets/ossack02.jpg";

const MapOfficeResult = (props) => {
  const dispatch = useDispatch();
  const officeData = useSelector((state) => state.office.list);

  if (officeData?.length === 0) {
    return (
      <React.Fragment>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid display="flex" justifyContent="center" padding="91px 0 13px 0">
            <Image src={ossack} size="117" />
          </Grid>
          <Text size="14px" color="#808080">
            검색한 결과를 찾을 수가 없어오!
          </Text>
          <Text size="14px" color="#808080">
            다른검색어로 다시 검색해주시겠어오?
          </Text>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {officeData?.map((o, idx) => {
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
                <SlickSlider>
                  {o?.images?.map((image, idx) => {
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
                {o.mylike ? (
                  <Button
                    fill_like
                    position="absolute"
                    right="8px"
                    top="8px"
                    color="#FF0000"
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
              </Grid>
              <Grid
                _onClick={() => {
                  history.push(`/detail/${o.estateid}`);
                }}
                cursor="pointer"
                width="100%"
                height="76px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text size="10px" bold color="#666">
                  {o.type} ∙ {o.roomFloor}층
                </Text>
                <Text size="14px" bold>
                  {o.buildingInfo}
                </Text>
                <Text size="10px">{o.area}</Text>
                <Text size="14px" bold>
                  <Span>월세</Span>
                  {o.rent_fee}만원 <Span>보증금</Span>
                  {o.deposit}만원
                </Text>
              </Grid>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }
};
const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: normal;
`;
const Top = styled.div`
  width: 20px;
  height: 20px;
  background: #000;
`;
export default MapOfficeResult;
