import { IonContent, IonPage, IonTitle, IonRow, IonCol, IonIcon, IonButton, IonList, IonItem } from '@ionic/react';
import './Members.css';
import React, { useState, useRef } from 'react';
import { chevronBackCircleOutline, personAdd, personCircleOutline } from 'ionicons/icons';
import AddMember from './AddMember';

const Members: React.FC = () => {
  const inputRef = useRef('' as any);
  const firstNameRef = useRef('' as any);
  const lastNameRef = useRef('' as any);
  const [openModal, setOpenModal] = useState(false);
  const [memberList, setMemberList] = useState([]);
  const [profileImage, setProfileImage] = useState('');
  const handleClick = () => {
    //@ts-ignore
    inputRef.current.click();
  };
  const handleChangeImage = (e: any) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  }
  const onClickSave = () => {
    setMemberList(prevState => [...prevState, `${firstNameRef.current.focusedValue} ${lastNameRef.current.focusedValue}`] as []);
    closeModal();
  }
  function addParticipant() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow className="page-dimension">
          <IonIcon
            size="large"
            md={chevronBackCircleOutline}
            onClick={() => { location.href = "/" }}
          />
          <IonCol size="9">
            <IonTitle>Members</IonTitle>
          </IonCol>
          <IonCol>
            <IonButton onClick={addParticipant}><IonIcon icon={personAdd} />&nbsp; Add Participant</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonList>
              {memberList.map((event: any, index: any) => {
                return <IonItem key={index}>
                  {profileImage ?
                    <img className="member-image-size" src={profileImage} />
                    :
                    <IonIcon icon={personCircleOutline} />}
                   &nbsp;{event}</IonItem>
              })}
            </IonList>
          </IonCol>
        </IonRow>
        <AddMember
          profileImage={profileImage}
          handleChangeImage={handleChangeImage}
          inputRef={inputRef}
          handleClick={handleClick}
          openModal={openModal}
          setOpenModal={setOpenModal}
          closeModal={closeModal}
          onClickSave={onClickSave}
          firstNameRef={firstNameRef}
          lastNameRef={lastNameRef}
        />
      </IonContent>
    </IonPage>
  );
};

export default Members;
