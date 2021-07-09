import axios from 'axios'
import React, { useContext, useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import  {UserContext}  from '../App'

export default function Login({navigation}) {
    console.log(navigation)
    const keyUser = 'user'
    const [email, setemail] = useState('user@ex.com')
    const [pwd, setpwd] = useState('1234')
    const context = useContext(UserContext)
    
    const handlePress = () => {
        console.log('login')
        const data = {
            identifier : email,
            password : pwd
        }
        const url = 'http://172.20.10.3:3000/login?' + 'email=' + email + '&password=' + pwd
        console.log(url)
        navigation.replace('home')
        console.log(axios.get(url))
        axios.get(url)
        .then((response) => {
            //console.log(response)
            /*/const { jwt, user } = response.data
            AsyncStorage.setItem(key, jwt)
            AsyncStorage.setItem(keyUser, JSON.stringify(user))
            axios.defaults.headers['Authorization'] = 'Bearer' + jwt*/
            //context.setUser(response.data)
            //console.log(response.data)
            console.log('test')
            //navigation.replace('home')
        }) 
        .catch(function (error) {
            console.log('test1')
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    }

    return (
        <View>
            <TextInput
                style = {[styles.base, styles.border]}
                onChangeText = {setemail}
                value = {email}
                placeholder = "Email"
            />
            <TextInput
                style = {[styles.base, styles.border]}
                onChangeText = {setpwd}
                value = {pwd}
                placeholder = "Mot de passe"
            />
            <Button 
                title = 'Connexion' 
                onPress = {() => handlePress ()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    base : {
        margin : 20,
        height : 50,
    },
    button: {
        borderColor: '#00F',
        backgroundColor: '#00F',
        width: '100%',
        textDecorationColor: '#FFF',
    }
});
