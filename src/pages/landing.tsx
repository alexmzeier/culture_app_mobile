import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Auth } from 'aws-amplify';


class Landing extends React.Component<RouteComponentProps> {
 
  signOut = () =>{
        
    Auth.signOut()
      .then(result => {
          this.props.history.push("/home")
      }).catch(err => console.log(err))

  }

  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Landing</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Landing</IonTitle>
            </IonToolbar>
          </IonHeader>
            <IonButton onClick={() => this.signOut()}> SignOut </IonButton> 
        </IonContent>
      </IonPage>
    );
  }
};

export default Landing;
