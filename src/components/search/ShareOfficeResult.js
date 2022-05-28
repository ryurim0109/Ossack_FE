import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Button, Text } from "../../elements/index";
import { SlickSlider, ImageCnt } from "../shared/home";
import { actionCreators as officeActions } from "../../redux/modules/office";
import ossack from "../../assets/ossack02.jpg";
import { LoadSpinner } from "../shared/home";
import { history } from "../../redux/configStore";

const ShareOfficeResult = (props) => {
  const dispatch = useDispatch();
  const officeData = useSelector((state) => state.office.share_list);
  const is_loaded = useSelector((state) => state.office.is_loaded);

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
                  {o?.imageList?.map((image, idx) => {
                    return (
                      <Div
                        key={idx}
                        onClick={() => {
                          history.push(`/detail/share/${o.shareofficeid}`);
                        }}
                      >
                        <Image
                          padding="235px"
                          bottom="0"
                          src={image}
                          radius="8px"
                          shape="rectangle"
                          position="absolute"
                        />
                      </Div>
                    );
                  })}
                </SlickSlider>
                <Grid
                  width="33px"
                  height="22px"
                  position="absolute"
                  right="8px"
                  bottom="8px"
                >
                  <ImageCnt>{o?.imageList.length}</ImageCnt>
                </Grid>
                {o.mylike ? (
                  <Button
                    fill_like
                    position="absolute"
                    right="8px"
                    top="8px"
                    color="#FF0000"
                    _onClick={() =>
                      dispatch(officeActions.shareDeleteLikeDB(o.shareofficeid))
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
                      dispatch(officeActions.shareClickLikeDB(o.shareofficeid))
                    }
                  />
                )}
              </Grid>
              <Grid
                _onClick={() => {
                  history.push(`/detail/share/${o.shareofficeid}`);
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
                    {o.address}
                  </Text>
                </Grid>
                <Grid display="flex" height="17px" alignItems="center">
                  <Text size="14px" bold>
                    {o.name}
                  </Text>
                </Grid>
                <Grid display="flex" height="12px" alignItems="center">
                  <Text size="10px">최소기간 {o.minimum_days}</Text>
                </Grid>
                <Grid display="flex" height="17px" alignItems="center">
                  <Text size="14px" bold>
                    {o.price}
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
export default ShareOfficeResult;
