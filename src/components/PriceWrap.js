import React from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import { Button, Grid, Text } from "../elements/index";

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    position: absolute !important;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 375px;
    height: 100%;
    margin: 0 auto;
    background-color: #f4f6fa;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    z-index: 999;

    @media screen and (max-width: 500px) {
      position: inherit !important;
      width: 100%;
      height: 100vh;
      min-width: 340px;
    }

    @media screen and (min-width: 500px) {
      top: 50% !important;
      transform: translate(-40%, -50%) !important;
      max-width: 375px;
    }

    @media screen and (min-width: 900px) {
      top: 50% !important;
      transform: translate(-15%, -50%) !important;
    }

    @media screen and (min-width: 1120px) {
      top: 50% !important;
      transform: translate(-5%, -50%) !important;
    }

    @media screen and (min-width: 1700px) {
      top: 50% !important;
      transform: translate(30%, -50%) !important;
    }

    @media screen and (min-width: 2000px) {
      top: 50% !important;
      transform: translate(50%, -50%) !important;
    }
  }
  .react-modal-sheet-container {
    position: absolute !important;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    bottom: 0 !important;
    left: 50% !important;
    /* transform: translateX(-50%); */
    transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1) !important;
    width: 375px;
    height: 50% !important;
    margin: 0 auto;
    background-color: #f4f6fa;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    z-index: 999;
    /* transition: all 0.5; */

    @media screen and (max-width: 500px) {
      position: inherit !important;
      width: 100%;
      height: 100vh;
      min-width: 340px;
      left: 50% !important;
      transform: translateX(-50%) !important;
    }

    @media screen and (min-width: 500px) {
      /* top: 50% !important; */
      transform: translateX(-40%) !important;
      max-width: 375px;
    }

    @media screen and (min-width: 900px) {
      /* top: 50% !important; */
      transform: translateX(-15%) !important;
    }

    @media screen and (min-width: 1120px) {
      /* top: 50% !important; */
      transform: translateX(-5%) !important;
    }

    @media screen and (min-width: 1700px) {
      /* top: 50% !important; */
      transform: translateX(30%) !important;
    }

    @media screen and (min-width: 2000px) {
      /* top: 50% !important; */
      transform: translateX(50%) !important;
    }
  }
  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    /* custom styles */
  }
`;

const PriceWrap = (props) => {
  const { openModal, setModal } = props;
  //   console.log("isOpen : ", openModal);
  //   console.log("setOpen : ", setModal);
  return (
    <CustomSheet isOpen={openModal} onClose={() => setModal(false)}>
      <CustomSheet.Container>
        <CustomSheet.Header />
        <CustomSheet.Content>{<Grid></Grid>}</CustomSheet.Content>
      </CustomSheet.Container>
      <CustomSheet.Backdrop />
    </CustomSheet>
  );
};

export default PriceWrap;
