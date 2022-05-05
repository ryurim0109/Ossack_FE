import React from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
  }
  .react-modal-sheet-container {
    position: absolute !important;
    /* align-items: center;
    justify-content: center;
    vertical-align: middle; */
    bottom: 0 !important;
    left: 50% !important;
    transform: translateX(-50%);
    /* transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1) !important; */
    width: 375px !important;
    height: 50% !important;
    margin: 0 auto;
    background-color: #f4f6fa;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    z-index: 999;
    /* transition: all 0.5; */
    @media screen and (max-width: 500px) {
      position: inherit !;
      width: 100%;
      height: 100vh;
      min-width: 340px;
      left: 50% !important;
      //transform: translateX(-50%) !important;
    }

    @media screen and (min-width: 500px) {
      /* top: 50% !important; */
      //transform: translateX(-40%) !important;
      max-width: 375px;
    }

    @media screen and (min-width: 900px) {
      /* top: 50% !important; */
      //transform: translateX(-15%) !important;
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

const Price1 = (props) => {
  const { openModal, setModal } = props;
  //   console.log("isOpen : ", openModal);
  //   console.log("setOpen : ", setModal);
  return (
    <CustomSheet isOpen={openModal} onClose={() => setModal(false)}>
      <CustomSheet.Container>
        <CustomSheet.Header />
        <CustomSheet.Content></CustomSheet.Content>
      </CustomSheet.Container>
      <CustomSheet.Backdrop />
    </CustomSheet>
  );
};

export default Price1;
