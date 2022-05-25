import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Button } from "../../elements/index";

import { SlickSlider } from "../../components/shared/home";
import { actionCreators as officeActions } from "../../redux/modules/office";

const OfficeImage = () => {
  const dispatch = useDispatch();
  const getOneShareOffice = useSelector(
    (state) => state.office.one_share_office
  );

  return (
    <React.Fragment>
      <Grid
        width="100%"
        margin="16px 0"
        height="235px"
        bg="#999"
        position="relative"
        overflow="hidden"
      >
        <Grid>
          <SlickSlider>
            {getOneShareOffice?.imageList &&
              getOneShareOffice?.imageList?.map((image, idx) => {
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
          {getOneShareOffice?.mylike ? (
            <Button
              fill_like
              position="absolute"
              right="8px"
              top="8px"
              color="#FF0000"
              _onClick={() =>
                dispatch(
                  officeActions.oneShareDeleteLikeDB(
                    getOneShareOffice.shareofficeid
                  )
                )
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
                dispatch(
                  officeActions.oneShareClickLikeDB(
                    getOneShareOffice.shareofficeid
                  )
                )
              }
            />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OfficeImage;
