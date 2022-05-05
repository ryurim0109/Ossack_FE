import React, { useState } from "react";
import OfficeLike from "./OfficeLike";
import OfficeTellLike from "./OfficeTellLike";

//import { Grid } from "../../elements/index";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

const LikeTab = () => {
  const tabTitle = ["찜한 오피스", "찜한 오피스텔"];
  const tab = { 0: <OfficeLike />, 1: <OfficeTellLike /> };
  const [activeTab, setActiveTab] = useState(0);

  const onClickTab = (idx) => {
    setActiveTab(idx);
  };

  return (
    <React.Fragment>
      <Tabs value={activeTab} textColor="primary" indicatorColor="primary">
        {/* tab 메뉴 */}
        {tabTitle.map((title, idx) => {
          return (
            <Box
              sx={{
                width: "100%",
                height: "50px",
                textAlign: "center",
                color: "#6E2EF6",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={idx}
              onClick={() => onClickTab(idx)}
            >
              {title}
              {/* <Tab
                key={idx}
                label={title}
                c
              ></Tab> */}
            </Box>
          );
        })}
      </Tabs>
      <div>
        {/* 해당 콘텐츠 */}
        {tab[activeTab]}
      </div>
    </React.Fragment>
  );
};

export default LikeTab;
