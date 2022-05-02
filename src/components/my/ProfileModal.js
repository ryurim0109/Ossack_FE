import React,{useState,useRef} from 'react';
import styled from 'styled-components';
import {Button,Grid,Image} from '../../elements/index';
import defaultImg from '../../static/images/default.svg'
//heic 이미지 파일을 jpeg로 변환하는 라이브러리
import heic2any from "heic2any";
// 이미지 압축 라이브러리
import imageCompression from "browser-image-compression";

const ProfileModal = (props) => {

    const {isOpen,setIsOpen}=props;
    const ModalClose=()=>{
        setIsOpen(!isOpen)
    }

    const fileInput = useRef();

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isWarning, setIsWarning] = useState(false);

    const selectFile = async (e) => {
        const reader = new FileReader();
        let file;
        // 이미지 resize 옵션 설정 (최대 width을 400px로 지정)
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 200,
        };
        if (
          fileInput.current.files[0].name.split(".")[1] === "gif" ||
          fileInput.current.files[0].name.split(".")[1] === "GIF" ||
          fileInput.current.files[0].name.split(".")[1] === "heic" ||
          fileInput.current.files[0].name.split(".")[1] === "HEIC"
        ) {
          file = fileInput.current.files[0];
        } else {
          file = await imageCompression(fileInput.current.files[0], options);
        }
        const maxSize = 20 * 1024 * 1024; // 파일 용량 제한 (20MB)
        if (file.size > maxSize) {
          setIsWarning(true);
        } else {
          setIsWarning(false);
          if (file.name.split(".")[1] === "heic" || file.name.split(".")[1] === "HEIC") {
            let blob = fileInput.current.files[0];
            // blob에다가 변환 시키고 싶은 file값을 value로 놓는다.
            // toType에다가는 heic를 변환시키고싶은 이미지 타입을 넣는다.
            heic2any({ blob: blob, toType: "image/jpeg" })
              .then(function (resultBlob) {
                //file에 새로운 파일 데이터를 씌웁니다.
                file = new File([resultBlob], file.name.split(".")[0] + ".jpg", {
                  type: "image/jpeg",
                  lastModified: new Date().getTime(),
                });
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setPreview(reader.result);
                };
                if (file) {
                  setImage(file);
                }
              })
              .catch(function (err) {
                console.log("이미지 변환 오류", err);
              });
          }
          reader.readAsDataURL(file); //파일 내용 읽어오기
          // onloadend: 읽기가 끝나면 발생하는 이벤트 핸들러
          reader.onloadend = () => {
            // reader.result는 파일의 컨텐츠(내용물)입니다!
            setPreview(reader.result);
          };
          if (file) {
            setImage(file);
          }
        }
      };
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
                                // userInfo.profileUrl ? userInfo.profileUrl :
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
                        <Button width="200px" margin="none" padding="none" height="24px" fontSize="1.25rem" backgroundColor="none">저장하기</Button>
                    </Grid>
                    <input type="file" id="file_input" ref={fileInput} onChange={selectFile} style={{display:"none"}} />
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