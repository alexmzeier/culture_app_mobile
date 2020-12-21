import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Auth } from 'aws-amplify';
import { RouteComponentProps } from 'react-router';


async function signUp() {
    
    let username: string = "person2@test.de";
    let password: string = "Test1234";
    let phone: string = "00491706701623";
    
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                //username,          // optional
                //phone,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

class SignUp extends React.Component<RouteComponentProps> {

  render(){
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
          <IonButton onClick={() => signUp()}> SignUp </IonButton>
        </IonContent>
      </IonPage>
    );
  }
};

export default (SignUp);
