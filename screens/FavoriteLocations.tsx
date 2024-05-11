import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/colors'
import { FavoritesScreenProps } from '@/types'

const Favorites = ({ navigation }: FavoritesScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>Favorites</Text>
        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary500

    }
})