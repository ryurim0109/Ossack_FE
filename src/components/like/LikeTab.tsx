import React, { useState } from "react";
import OfficeLike from "./OfficeLike";
import OfficeTellLike from "./OfficeTellLike";

import Tabs from "@material-ui/core/Tabs";

import { Grid, Text } from "../../elements/index";


const LikeTab = () => {
  const tabTitle: string[] = ["오피스", "공유오피스"];
  const [activeTab, setActiveTab] = useState<number | string>(0);
  const onClickTab = (idx :number) => {
    setActiveTab(idx);
  };

  return (
    <React.Fragment>
      <Tabs
        value={activeTab}
        textColor="primary"
        TabIndicatorProps={{ style: { background: "#3E00FF", top: "0px" } }}
      >
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
            >
              <Text
                bold
                cursor="pointer"
                color={activeTab === idx ? "#3E00FF" : "#E5E5EC"}
              >
                찜한{title}
              </Text>
            </Grid>
          );
        })}
      </Tabs>
      <div>
        {/* 해당 콘텐츠 */}
        {activeTab === 0 ?  <OfficeLike  />:<OfficeTellLike />}
      </div>
    </React.Fragment>
  );
};

export default LikeTab;
