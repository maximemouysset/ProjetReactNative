import React, { createContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/login'
import Home from './screen/home';
import { getUser } from './service/userService';

const Stack = createStackNavigator();

export const UserContext = createContext({
  user : {},
  setUser : () => {}
})

export default function App() {
  const [user, setuser] = useState(getUser())
  
  useEffect(() => {
    getUser().then(result => setuser(result))
  }, [])

  const userContextValue = {
    user : user,
    setUser : setuser
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "login" component = {Login}/>
        <Stack.Screen name = "home" component = {Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  base : {
    margin : 20,
    height : 80
  }
});
