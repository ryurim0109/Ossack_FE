import React from 'react';
import styled from 'styled-components';
import {Button,Grid,Image,Text} from '../../elements/index';

const ProfileModal = (props) => {

    const {isOpen,setIsOpen}=props;

    return (
        <React.Fragment>
            {isOpen ?
            (<Grid width="100%" height="500px" margin="16px" bg="#fff">
                
            </Grid>) 
            :null

            }
        </React.Fragment>
    );
};

export default ProfileModal;