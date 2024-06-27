import React from 'react'

import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';

export const Header = ({ title,type, navigation }) => {
    return (
        <View style={styles.header}>
            <View style={styles.icon_back}>
                <Icon
                    type="material-community"
                    name={type}
                    color={colors.headerText}
                    size={28}
                    onPress={() => {navigation.navigate('SignInWelcome') }}
                />

            </View>
            <View>
                <Text
                    style={styles.headerText}
                >
                    {title}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.buttons,
        flexDirection: "row",
        height: parameters.headerHeight,
        gap: 10,
        alignItems:'center'
    },
    icon_back:{
        marginLeft:20
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: "uppercase",
        marginLeft: 30
    }
})