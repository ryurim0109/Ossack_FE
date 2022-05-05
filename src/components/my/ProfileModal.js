import React,{useState,useRef} from 'react';
import styled from 'styled-components';
import {Button,Grid,Image} from '../../elements/index';
import defaultImg from '../../static/images/default.svg'

import { useSelector,useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';

const ProfileModal = (props) => {

    const dispatch =useDispatch();
    const {isOpen,setIsOpen}=props;
    const ModalClose=()=>{
        setIsOpen(!isOpen)
    }

   const user_info=useSelector((state)=>state.user.user);
   console.log(user_info)
 
    const fileInput = useRef();

    const [image, setImage] = useState(null);
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
        let maxSize = 10 * 1024 * 1024;
        let fileSize=image.size;
        if(fileSize > maxSize){
        window.alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
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
                <Grid width="100%" height="500px" margin="16px" bg="#fff" position="relative">
                <Button is_close position="absolute" right="8px" top="8px" _onClick={ModalClose}/>
                <Grid display="flex" flexDirection="column" alignItems="center" >
                    
                        <Grid width="200px" height="200px" margin="50px 0">
                        <Image
                            className="edit"
                            shape="rectangle"
                            size="90"
                            radius="30px"
                            src={preview ? preview : 
                              user_info?.profile ? user_info?.profile :
                                 defaultImg}
                        ></Image>
                                                    
                        </Grid>
                
                    
                    <Grid width="200px" height="200px" display="flex" flexDirection="column" alignItems="start" >
                        
                        <Label htmlFor="file_input" className="upload-box">
                          <Grid>사진업로드</Grid>
                        </Label>
                        <Button width="200px" height="24px" 
                        padding="none" margin="10px 0"
                         fontSize="1.25rem" backgroundColor="none">사진제거</Button>
                        <Button width="200px" margin="none" padding="none" height="24px" fontSize="1.25rem" backgroundColor="none" _onClick={editProfile}>저장하기</Button>
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

`
const Label=styled.label`
 width:200px;
 text-align:center;
 font-size:1.250rem;
 font-weight:bold;

`;
export default ProfileModal;