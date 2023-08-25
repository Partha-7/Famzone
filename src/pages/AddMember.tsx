//vendors
import React from "react";
import {
    IonButton,
    IonChip,
    IonCol,
    IonFooter,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonRow,
    IonTitle,
    IonIcon,
    isPlatform,
    IonImg,
} from "@ionic/react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './Members.css';
import { restrictAlphaAndSplChar } from "../Constants/Constants";
import { personCircleOutline, pencilOutline } from 'ionicons/icons';


const AddMember: React.FC<any> = (props) => {
    const { openModal, inputRef, handleClick, handleChangeImage, profileImage, onClickSave, firstNameRef, lastNameRef, setOpenModal } = props;
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
    };
    return (
        <>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}>
                <Box sx={style}>
                    <IonHeader className="modal-header">
                        <IonRow style={{ marginTop: 10 }}>
                            <IonCol size="10">
                                <IonTitle className="participant-header-modal">Add Participant</IonTitle>
                            </IonCol>
                            <IonCol>
                                <IonChip
                                    color="primmary"
                                    className="ion-button"
                                    onClick={() => setOpenModal(false)}
                                >
                                    <span className="modal-cancel">&times;</span>
                                </IonChip>
                            </IonCol>
                        </IonRow>
                    </IonHeader>
                    <IonRow>
                        <IonCol offsetLg={profileImage ? "4" : "4.5"} offsetXs="4.5">
                            {profileImage ?
                                <>
                                    <img className="profile-image-size" src={profileImage} />
                                    <input
                                        style={{ display: 'none' }}
                                        ref={inputRef}
                                        type="file"
                                        onChange={handleChangeImage}
                                        accept="image/*"
                                    />
                                    <IonIcon onClick={handleClick} icon={pencilOutline} />
                                </>
                                :
                                <>
                                    <input
                                        style={{ display: 'none' }}
                                        ref={inputRef}
                                        type="file"
                                        onChange={handleChangeImage}
                                        accept="image/*"
                                    />
                                    <IonIcon onClick={handleClick} className="profile-icon" icon={personCircleOutline} />
                                </>}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="6">
                            <IonLabel>
                                *First name
                            </IonLabel>
                            <IonInput
                                className="calender-event min-height"
                                type="text"
                                name="firstName"
                                ref={firstNameRef}
                            ></IonInput>
                        </IonCol>
                        <IonCol size="6">
                            <IonLabel>
                                *Last name
                            </IonLabel>
                            <IonInput
                                ref={lastNameRef}
                                className="calender-event min-height"
                                type="text"
                                name="lastName"
                            ></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonLabel>
                                *Email
                            </IonLabel>
                            <IonInput
                                className="calender-event min-height"
                                type="email"
                                name="email"
                            ></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonLabel className="input-headers">
                                Phone
                            </IonLabel>
                            <IonInput
                                className="calender-event min-height"
                                name="phone"
                                type="text"
                                onKeyPress={(e) => restrictAlphaAndSplChar(e)}
                                maxlength={10}
                                placeholder="+91"
                            ></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonFooter className="modal-footer">
                        <IonRow>
                            <IonCol offsetMd="4" sizeMd="4" offsetXs="0" sizeXs="6">
                                <IonButton
                                    color="gray"
                                    expand="block"
                                    onClick={() => setOpenModal(false)}
                                >
                                    Cancel
                            </IonButton>
                            </IonCol>
                            <IonCol sizeMd="4" sizeXs="6">
                                <IonButton
                                    color="gray"
                                    expand="block"
                                    type="submit"
                                    onClick={onClickSave}
                                >
                                    Save
                            </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonFooter>
                </Box>
            </Modal>
        </>
    );
};
export default AddMember;