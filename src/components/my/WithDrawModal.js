import React from "react";
import styled from "styled-components";
import { Button, Grid, Text } from "../../elements/index";
import { actionCreators as userActions } from "../../redux/modules/user";
import { useDispatch } from "react-redux";

const WithDrawModal = (props) => {
  const dispatch = useDispatch();
  const { isWithdraw, setIsWithdraw } = props;
  const ModalClose = () => {
    setIsWithdraw(!isWithdraw);
  };
  return (
    <React.Fragment>
      {isWithdraw ? (
        <Outter>
          <Inner>
            <Grid width="100%" height="20px" textAlign="center">
              <Text bold size="16px">
                회원탈퇴
              </Text>
            </Grid>
            <Grid width="100%" height="20px" textAlign="center" margin="8px 0">
              <Text size="14px">정말 탈퇴 하실거에오🥺?</Text>
            </Grid>
            <BtnBox>
              <Button
                width="50%"
                backgroundColor="#fff"
                borderRadius="0 0 0 8px"
                color="#3E00FF"
                _onClick={ModalClose}
              >
                돌아가기
              </Button>
              <Button
                width="50%"
                backgroundColor="#fff"
                borderRadius="0 0 8px 0"
                color="#ccc"
                _onClick={() => {
                  dispatch(userActions.resignDB());
                }}
              >
                회원탈퇴!
              </Button>
            </BtnBox>
          </Inner>
        </Outter>
      ) : null}
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  z-index: 4;
  display: flex;
  padding: 0 40px;
`;
const Inner = styled.div`
  width: 100%;
  height: 150px;
  background-color: #fff;
  border-radius: 8px;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BtnBox = styled.div`
  width: 100%;
  height: 48px;
  border-top: 1px solid ${({ theme }) => theme.colors.darkgray3};
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 48px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    background-color: ${({ theme }) => theme.colors.darkgray3};
  }
`;
export default WithDrawModal;
