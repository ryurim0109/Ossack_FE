import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../redux/configStore";
import { Grid, Image, Button, Text } from "../../elements/index";
import { SlickSlider } from "../shared/home";
import { actionCreators as officeActions } from "../../redux/modules/office";
import ossack from "../../assets/ossack02.jpg";
import { LoadSpinner } from "../shared/home";

const MapOfficeResult = (props) => {
  const dispatch = useDispatch();
  const officeData = useSelector((state) => state?.office?.list);
  const is_loaded = useSelector((state) => state.office.is_loaded);
  const { title } = props;

  if (officeData?.length >= 1) {
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
                      <Div
                        key={idx}
                        onClick={() => {
                          history.push(`/detail/${o.estateid}?query=${title}`);
                        }}
                      >
                        <Image
                          padding="235px"
                          src={image}
                          shape="rectangle"
                          radius="8px"
                          position="absolute"
                          bottom="0"
                        />
                      </Div>
                    );
                  })}
                </SlickSlider>
                {o.mylike ? (
                  <Button
                    position="absolute"
                    right="8px"
                    top="8px"
                    fill_like
                    color="#FF0000"
                    _onClick={() =>
                      dispatch(officeActions.deleteLikeDB(o.estateid))
                    }
                  />
                ) : (
                  <Button
                    position="absolute"
                    right="8px"
                    top="8px"
                    is_like
                    color="#fff"
                    _onClick={() =>
                      dispatch(officeActions.clickLikeDB(o.estateid))
                    }
                  />
                )}
              </Grid>
              <Grid
                _onClick={() => {
                  history.push(`/detail/${o.estateid}?query=${title}`);
                }}
                cursor="pointer"
                width="100%"
                height="76px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Grid display="flex" height="12px" alignItems="center">
                  <Text size="10px" bold color="#666">
                    {o?.type} ∙ {o?.roomFloor}층
                  </Text>
                </Grid>
                <Grid display="flex" height="17px" alignItems="center">
                  {" "}
                  <Text size="14px">{o?.buildingInfo}</Text>
                </Grid>

                <Grid display="flex" height="12px" alignItems="center">
                  <Text size="10px">{o.area}</Text>
                </Grid>
                <Grid display="flex" height="17px" alignItems="center">
                  {o?.rent_fee === "0" ? null : (
                    <Text size="14px" bold>
                      <Span>월세</Span>
                      {o.rent_fee + "만원"}
                    </Text>
                  )}
                  <Text size="14px" bold>
                    <Span>보증금</Span>
                    {o?.deposit}만원
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
        {!is_loaded && <LoadSpinner />}
      </React.Fragment>
    );
  } else {
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
        {!is_loaded && <LoadSpinner />}
      </React.Fragment>
    );
  }
};
const Div = styled.div`
  cursor: pointer;
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: normal;
  margin-left: 2px;
`;
export default MapOfficeResult;
