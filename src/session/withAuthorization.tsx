import React, { FunctionComponent } from 'react';


interface ContainerProps {
  component?: React.Component;  
}

const withAuthentication: FunctionComponent <any> = (props) => {

 const{component} = props

 
 return<div>{component}</div>
  
};


class withAuth extends React.Component<ContainerProps>  {

  render(){
    return (
      <div>{this.props}</div>
    );
  }
};


export default withAuthentication;
