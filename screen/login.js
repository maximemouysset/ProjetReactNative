import axios from 'axios'
import React, { useContext, useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function Login({navigation}) {
    console.log(navigation)
    const key = 'authToken'
    const keyUser = 'user'
    const [email, setemail] = useState('')
    const [pwd, setpwd] = useState('')
    const context = useContext
    
    const handlePress = () => {
        console.log('login')
        const data = {
            identifier : email,
            password : pwd
        }
        const url = 'https://localhost:1337/auth/local'
        axios.post(url, data)
        .then((response) => {
            const { jwt, user } = response.data
            AsyncStorage.setItem(key, jwt)
            AsyncStorage.setItem(keyUser, JSON.stringify(user))
            axios.defaults.headers['Authorization'] = 'Bearer' + jwt
            context.setUser(user)
            navigation.replace('home')
        }) 
        .catch(function (error) {
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
    border : {
        borderColor : 'black',
        borderWidth : ''
    }
});
