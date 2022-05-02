import React from "react";
import { Grid, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";

/** ListMotion-pts20220430  start */
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ActionHome from "material-ui/svg-icons/action/home";
import ActionFlightTakeoff from "material-ui/svg-icons/action/flight-takeoff";
import FileCloudDownload from "material-ui/svg-icons/file/cloud-download";
import BottomSheet from "./motion/BottomSheet";
import filterIcon from "../static/images/filterIcon.png";

const items = [
  {
    text: "Editar",
    icon: <ActionHome />,
    onClick: (toggleAnimation) => {
      alert("Editar");
      toggleAnimation();
    },
  },
  {
    text: "Pesar",
    icon: <ActionFlightTakeoff />,
    onClick: () => alert("Pesar"),
  },
  {
    text: "Classificar",
    icon: <FileCloudDownload />,
    onClick: () => alert("Classificar"),
  },
];

const Search = () => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        height="80px"
        bg="#fff"
        padding="0 16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          is_back
          _onClick={() => {
            history.push("/main");
          }}
        />
        <Input
          height="48px"
          width="90%"
          margin="16px 5%"
          padding=" 0 5px"
          inputFocusOutline="none"
          placeholder="장소, 근처 역을 입력하세요."
        />

        <MuiThemeProvider>
          <BottomSheet
            items={items}
            startHidden={true}
            buttonElement={
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={filterIcon} alt="필터아이콘" />
              </button>
            }
          />
        </MuiThemeProvider>
      </Grid>
    </React.Fragment>
  );
};

export default Search;
