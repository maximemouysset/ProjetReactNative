import React, {useContext} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { UserContext } from '../App'

export default function Home()  {
    
    const {user} = useContext(UserContext)

        return (
            <View>
                <Text> Bienvenu {user.username || 'john doe'} </Text>
            </View>
        )
}


const styles = StyleSheet.create({})
