import React from 'react'

const UserContext = React.createContext();
const LevelContext = React.createContext();

const UserProvider = UserContext.Provider;
//const UserConsumer = UserContext.Consumer;
const LevelProvider = LevelContext.Provider;
//const LevelConsumer = LevelContext.Consumer;

export { UserProvider, UserContext, LevelProvider, LevelContext }