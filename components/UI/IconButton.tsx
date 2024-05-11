import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"

type Props = {
    icon: keyof typeof Ionicons.glyphMap
    size: number
    color: string
    onPress: () => void
}

const IconButton = ({ icon, color, onPress, size }: Props) => {
    return (<Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View>
            <Ionicons name={icon} size={size} color={color} />
        </View>
    </Pressable >
    )
}

export default IconButton

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
})