import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/colors'
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import { HomeScreenProps } from '@/types'


const Home = ({ navigation }: HomeScreenProps) => {
    const [inputValue, setInputValue] = useState('')

    const buttonPressHandler = () => {
        navigation.navigate("WeatherDetails")
    }
    const inputTextChangeHandler = (value: string) => {
        setInputValue(value)
    }
    return (
        <View style={styles.rootContainer}>
            <View style={styles.innerContainer}>
                <Input
                    textInputConfig={{
                        onChangeText: inputTextChangeHandler,
                        value: inputValue
                    }}
                    label='Enter name of the city'
                />
                <Button style={styles.button} onPress={buttonPressHandler}>Tap me</Button>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primary500,
        alignItems: "center"
    },
    innerContainer: {
        alignItems: 'center'
    },
    button: {
        width: "40%"
    }
})