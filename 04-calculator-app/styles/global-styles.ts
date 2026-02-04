

import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: Colors.background,

    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 90,
        textAlign: 'right',
        fontWeight: '400',
        paddingRight: 15,
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
        paddingRight: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
        color: Colors.textPrimary,
        fontWeight: '400',
        fontFamily: 'SpaceMono_400Regular',
    }

})