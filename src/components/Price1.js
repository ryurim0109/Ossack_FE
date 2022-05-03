import React from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
  }
  .react-modal-sheet-container {
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

const Price = (props) => {
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

export default Price;
