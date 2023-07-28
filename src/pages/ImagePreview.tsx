import React from 'react'
import { IonModal, IonHeader, IonRow, IonCol, IonChip } from '@ionic/react';

export const ImagePreview: React.FC<any> = ({ openModal, closeModal, image }) => {
    return (
        <>
            <IonModal
                isOpen={openModal}
                className="preview-popup"
                onDidDismiss={() => {
                    closeModal();
                }}>
                <IonHeader className="modal-header">
                    <IonRow style={{ marginTop: 10 }}>
                        <IonCol size="12" className="modal-close-icon">
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
                <IonRow className="scroll-content">
                    <IonCol>
                        <img src={image} alt="image" height={"100%"} width={"100%"} />
                    </IonCol>
                </IonRow>
            </IonModal>
        </>
    )
}
