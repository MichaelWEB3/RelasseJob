import React from 'react';
import Route from './src/routes/routes';
import { Platform } from 'react-native'
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { StatusBar } from "react-native";
import { UserProvider } from './src/dates/datehook/usersContext'
const App = () => {
  return (
    <>
    
      <UserProvider>
        <StatusBar backgroundColor="transparent" translucent={true} barStyle="ligth-content" />
        <Route></Route>
      </UserProvider>
    </>
  );
};


export default App;
