import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    label: string,

    position?: 'left' | 'right',

    // Methods

    onPress?: () => void,
    onLongPress?: () => void,
}


export default function FAB({label, onPress, onLongPress, position='right'}: Props) {
    return (
        <Pressable
            style={({pressed}) => [
                styles.floatingButton, 
                position === 'right' ? styles.positionRight : styles.positionLeft,
                pressed ? {opacity: 0.8} : {opacity: 1},
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        elevation: 3,
    },

    positionRight: {
        right: 20,
    },

    positionLeft: {
        left: 20,
    }
})