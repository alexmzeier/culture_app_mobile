import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Auth } from 'aws-amplify';


class SignIn extends React.Component<RouteComponentProps> {
 
  clickSignUp= () =>{
        
    Auth.signOut()
      .then(result => {
          console.log(result)
          this.props.history.push("/home")
      }).catch(err => console.log(err))

  }

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
            <IonButton onClick={() => this.clickSignUp()}> Login </IonButton> 
        </IonContent>
      </IonPage>
    );
  }
};

export default SignIn;
