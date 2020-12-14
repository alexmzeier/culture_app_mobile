import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SignUp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SignUp</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton> Click Mich </IonButton>


      </IonContent>
    </IonPage>
  );
};

export default SignIn;
