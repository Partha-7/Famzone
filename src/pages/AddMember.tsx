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
} from "@ionic/react";
import './Members.css';
import { restrictAlphaAndSplChar } from "../Constants/Constants";


export const AddMember: React.FC<any> = ({ openModal, closeModal }) => {
    return (
        <>
            <IonModal
                isOpen={openModal}
                className="add-member-popup"
                onDidDismiss={() => {
                    closeModal();
                }}>
                <IonHeader className="modal-header">
                    <IonRow style={{ marginTop: 10 }}>
                        <IonCol size="10">
                            <IonTitle className="participant-header-modal">Add Participant</IonTitle>
                        </IonCol>
                        <IonCol>
                            <IonChip
                                color="primmary"
                                className="ion-button"
                                onClick={() => {
                                    closeModal();
                                }}>
                                <span className="modal-cancel">&times;</span>
                            </IonChip>
                        </IonCol>
                    </IonRow>
                </IonHeader>
                <IonRow>
                    <IonCol size="6">
                        <IonLabel>
                            *First name
                            </IonLabel>
                        <IonInput
                            className="calender-event min-height"
                            type="text"
                            name="firstName"
                        ></IonInput>
                    </IonCol>
                    <IonCol size="6">
                        <IonLabel>
                            *Last name
                            </IonLabel>
                        <IonInput
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
                                onClick={() => closeModal(false)}
                            >
                                Cancel
                            </IonButton>
                        </IonCol>
                        <IonCol sizeMd="4" sizeXs="6">
                            <IonButton
                                color="gray"
                                expand="block"
                                type="submit"
                            >
                                Save
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </IonModal>
        </>
    );
};