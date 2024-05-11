import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/colors'

type Props = {
    label: string
    textInputConfig?: TextInputProps
    style?: ViewStyle
    invalid?: boolean
}

const Input = ({ label, textInputConfig, style, invalid = false }: Props) => {
    let inputStyles: Record<string, string | number>[] = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }
    if (invalid) {
        inputStyles.push(styles.invalidInput)
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: Colors.accent200,
        marginBottom: 4
    },
    input: {
        backgroundColor: Colors.accent200,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: Colors.primary700
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top"
    },
    invalidLabel: {
        color: Colors.error500
    },
    invalidInput: {
        backgroundColor: Colors.error50
    }
})