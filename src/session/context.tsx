import React from 'react';

const AuthUserContext = React.createContext({user: null, toggleState: () => {}});

export default AuthUserContext;