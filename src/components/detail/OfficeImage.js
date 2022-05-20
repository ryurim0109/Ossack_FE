import React from "react";

import { useSelector } from "react-redux";
import { Grid, Image } from "../../elements/index";

import { SlickSlider } from "../../components/shared/home";

const OfficeImage = () => {
  const getOneOffice = useSelector((state) => state.office.one_office);

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
            {getOneOffice?.images &&
              getOneOffice?.images?.map((image, idx) => {
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
          {/* {getOneOffice?.mylike ? (
                <Button
                  fill_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#FF0000"
                  _onClick={() =>
                    dispatch(officeActions.deleteLikeDB(estateid))
                  }
                />
              ) : (
                <Button
                  is_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#fff"
                  _onClick={() => dispatch(officeActions.clickLikeDB(estateid))}
                />
              )} */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OfficeImage;
