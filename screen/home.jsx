import React, {useContext} from 'react'
import { Text, StyleSheet, ScrollView, Image} from 'react-native'
import { UserContext } from '../App'
import {getImageList} from '../service/Images'

export default function Home()  {
    
    const {user} = useContext(UserContext)
    const imageSource = getImageList

        return (
            <ScrollView>
                <Text 
                style = {[styles.base,styles.color1 ]}>
                Bienvenu sur CESI GAMING, le site web où vous retrouverez toute l’actulité gaming et esport du moment ! 
                </Text>
                <Text
                style= {[styles.base, styles.backgroundColor, styles.color2]}>ACTUS
                </Text>
                <Image
                source={ require ('/home/maxime/ProjetReactNative/ProjetCube3Image/autre/pageEsport.png' )}  
                style = {styles.image}
                />
                <Text
                style= {[styles.base, styles.backgroundColor, styles.color2]}>TRANSFERTS
                </Text>
                <Text
                style = {[styles.base,styles.backgroundColor2 ]}>
                Date            Jouer            Jeu            Depart            Arrivée       
                </Text>
                <Text
                style = {[styles.base,styles.backgroundColor2 ]}>
                08-06           Voy          Rainbow6        Aucune         Trainhard           
                </Text>
                <Text
                style = {[styles.base,styles.backgroundColor2 ]}>
                10-06        Hungry      Rainbow6        Aucune                  G2      
                </Text>
                <Text
                style = {[styles.base,styles.backgroundColor2 ]}>
                10-06         Jonka       Rainbow6          MnM                   G2           
                </Text>
                <Text
                style = {[styles.base,styles.backgroundColor2 ]}>
                21-06         draken      Valorant         Aucune                Guild       
                </Text>
                <Image
                source={ require ('/home/maxime/ProjetReactNative/ProjetCube3Image/autre/pageEsport2.jpg' )}
                style = {styles.image2}
                />
                <Image
                source={ require ('/home/maxime/ProjetReactNative/ProjetCube3Image/autre/pageEsport3.jpg' )}
                style = {styles.image3}
                />  
               

            </ScrollView>
        )
}


const styles = StyleSheet.create({
    base : {
        textAlign: 'center',
        paddingVertical: '5%',
        fontFamily: 'Gill Sans',
        paddingBottom: '5 %',
        backgroundColor: '#3E3E3E',
        borderColor: '#000000'
    },
    backgroundColor : {
        backgroundColor: '#F5F5F5'
    },
    color1: {
        color: '#FFFFFF'
    },
    color2: {
        color: '#000000'
    },
    backgroundColor2 : {
        backgroundColor:  '#C4C4C4'
    },
    image: {
        width: '33.3%',
        height: '20%'
    },
    image2: {
        width: '33.3%',
        height: '20%',
        left: '33.3%',
        bottom: '92.5%'
    },
    image3: {
        width: '33.3%',
        height: '20%',
        left: '66.6%',
        bottom: '112.5%'
    }
})