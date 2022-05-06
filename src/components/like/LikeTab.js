import React, { useState } from "react";
import OfficeLike from "./OfficeLike";
import OfficeTellLike from "./OfficeTellLike";

import Tabs from "@material-ui/core/Tabs";

import { Grid, Text } from "../../elements/index";

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
            <Grid
              key={idx}
              width="100%"
              height="50px"
              textAlign="center"
              fontWeight="bold"
              fontSize="14px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _onClick={() => onClickTab(idx)}
              color={activeTab === idx ? "#303030" : "#E5E5EC"}
            >
              <Text bold cursor="pointer">
                {title}
              </Text>
            </Grid>
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
