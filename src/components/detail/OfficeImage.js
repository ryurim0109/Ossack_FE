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
        margin="0 0 16px 0"
        height="251px"
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
                    padding="251px"
                    bottom="0"
                    src={image}
                    shape="rectangle"
                    position="absolute"
                  />
                );
              })}
          </SlickSlider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OfficeImage;
