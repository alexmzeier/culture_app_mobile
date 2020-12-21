import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Auth } from 'aws-amplify';
import './Home.css';
import { RouteComponentProps } from 'react-router';

class Home extends React.Component<RouteComponentProps> {

  signIn = () =>{
    
    Auth.signIn("person2@test.de", "Test1234")
      .then(user => {
          console.log(user)
          this.props.history.push("/landing")
      }).catch(err => console.log(err))
  }

  clickLanding = () =>{
      
    this.props.history.push("/landing")
   
  }

  clickSignUp= () =>{
      
    this.props.history.push("/signup")
 
  }


  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonButton onClick={() => this.signIn()}> Login </IonButton> 
          <IonButton onClick={() => this.clickSignUp()}> SignUp </IonButton>
          <IonButton onClick={() => this.clickLanding()}> Click Landing </IonButton>
        </IonContent>
      </IonPage>
    );
  }
};

export default (Home);
