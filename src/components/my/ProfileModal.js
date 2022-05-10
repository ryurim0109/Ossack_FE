import React,{useState,useRef} from 'react';
import styled from 'styled-components';
import {Button,Grid,Image,Text} from '../../elements/index';
import defaultImg from '../../static/images/default.png';
import Swal from 'sweetalert2';

import { useSelector,useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';

const ProfileModal = (props) => {

    const dispatch =useDispatch();
    const {isOpen,setIsOpen}=props;
    const ModalClose=()=>{
        setIsOpen(!isOpen)
    }

   const user_info=useSelector((state)=>state.user.user);
   //console.log(user_info)
 
    const fileInput = useRef();

    const [image, setImage] = useState("");
    const [preview, setPreview] = useState(null);

    //사진 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve();
      };
    });
  };
      const editProfile =()=>{
        let maxSize = 3 * 1024 * 1024;
        let fileSize=image.size;
        console.log(fileSize)
        if(fileSize > maxSize){
          Swal.fire("첨부파일 사이즈는 3MB 이내로 등록 가능합니다.");
        setImage("");
        return false;
        }
        
        dispatch(userActions.userImgDB(image));
        ModalClose()
      }
    return (
        <React.Fragment>
            {isOpen ?
            (<Outter>
                <Grid width="100%" height="500px" margin="16px" bg="#fff" borderRadius="8px" position="relative">
                  <Grid  width="100%" margin="8px 0"  height="56px"display="flex" alignItems="center"  justifyContent="center" >
                    <Text bold size="1rem">프로필 이미지 변경</Text>
                  </Grid>
                <Button is_close position="absolute" right="8px" top="8px" _onClick={ModalClose}/>
                <Grid display="flex"  height="200px"flexDirection="column" alignItems="center" >
                    
                        <Grid width="200px" height="200px" margin="30px 0" display="flex" alignItems="center"  justifyContent="center" >
                        <Image
                            border="2px solid #F3F3F3" 
                            shape="circle"
                            size="190"
                            radius="30px"
                            src={preview ? preview : 
                              user_info?.imageUrl ? user_info?.imageUrl :
                                 defaultImg}
                        ></Image>
                                                    
                        </Grid>
                
                    
                    <Grid width="200px" height="200px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                        
                        <Label htmlFor="file_input" className="upload-box">
                          <Text bold size="0.875rem" color="#fff">사진업로드</Text>
                        </Label>
                        <Button width="230px" margin="10px 0" borderRadius="8px"
                         padding="none" height="42px" fontSize="0.875rem" color="#fff" backgroundColor="#0373F3" _onClick={editProfile}>저장하기</Button>
                    </Grid>
                    <input type="file" id="file_input" ref={fileInput}  accept="image/jpeg, image/png, image/jpg"  onChange={(e)=>{
                          encodeFileToBase64(e.target.files[0]);
                          setImage(e.target.files[0])
                    }} style={{display:"none"}} />
                </Grid>
            </Grid>
            </Outter>
            ) 
            :null

            }
        </React.Fragment>
    );
};
const Outter=styled.div`

  width:100%;
  position: absolute;
  top:50%;
  left:0;
  transform: translate(0, -50%) ;
  z-index:4;
  display:flex;

  .upload-box{
    width:230px;
    height:42px;
    background-color:#0373F3;
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  }

`
const Label=styled.label`
 width:200px;
 text-align:center;
 font-size:1.250rem;
 font-weight:bold;

`;
export default ProfileModal;