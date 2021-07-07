import  AsyncStorage  from "react-native-async-storage/async-storage";

export const userStorage = 'user'

async function getUser() {
    try{
        const stringUser = await AsyncStorage.getItem(userStorageKey)
        let user = ''
        if (stringUser){
            user = JSON.parse(stringUser)
        }

        return user
    }catch (error) {
        console.log(error)
    }
    return '' 
}

    