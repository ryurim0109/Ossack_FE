import React, { useState } from "react";
import { Grid, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";

import filterIcon from "../static/images/filterIcon.png";
import Price from "./PriceWrap";

const Search = () => {
  const [openModal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(true);
  };

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

        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={modalOpen}
        >
          <img src={filterIcon} alt="필터아이콘" />
        </button>
        <Price openModal={openModal} setModal={setModal} />
      </Grid>
    </React.Fragment>
  );
};

export default Search;
