import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from "@/constants/colors"
type Props = {
    children: React.ReactNode
    onPress: (...args: any[]) => void
    mode?: "flat",
    style?: Record<string, number | string>
}


const Button = ({ children, onPress, mode, style }: Props) => {

    return (
        <View style={[styles.rootContainer, style]}>
            <Pressable android_ripple={{ color: Colors.accent200, }} onPress={onPress} style={[styles.button, mode === "flat" && styles.flat]}>
                <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>{children}</Text>
            </Pressable>
        </View >
    )
}

export default Button

const styles = StyleSheet.create({
    rootContainer: {
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        borderRadius: 4
    },
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: Colors.primary700,
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    flatText: {
        color: Colors.accent200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.accent200,
        borderRadius: 4
    }
})