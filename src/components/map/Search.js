import React, { useState } from "react";
import { Grid, Button, Input } from "../../elements/index";
import { history } from "../../redux/configStore";
import styled from "styled-components";
import filterIcon from "../../assets/filter.svg";
import { Filter } from "../map/index";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
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
        <Button
          height="48px"
          width="248px"
          margin="16px 5%"
          fontSize="16px"
          borderRadius="8px"
          color="#767676"
          backgroundColor="#F5F5F5"
          _onClick={() => {
            history.push("/search");
          }}
        >
          장소, 근처 역을 입력하세요.
        </Button>

        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={openModalHandler}
        >
          <img src={filterIcon} alt="필터아이콘" />
        </button>
        {isOpen ? (
          <>
            <ModalBackdrop onClick={openModalHandler}></ModalBackdrop>
            <Filter isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : null}
      </Grid>
    </React.Fragment>
  );
};
const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;

export default Search;
