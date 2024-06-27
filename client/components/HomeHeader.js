import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from '../global/styles';
const HomeHeader = ({ title, navigation }) => {
    const BadgeIcon= withBadge(99)(Icon);
    return (
        <View style={styles.headerHome}>
            <View style={styles.iconFirstHeader}>
                <Icon
                    type="material-community"
                    name={"menu"}
                    color={colors.headerText}
                    size={30}
                    onPress={() => { }}
                />
            </View>
            <View>
                <Text style={{ color: colors.cardbackground, fontSize: 24, fontWeight: 'bold' }}>
                    {title}
                </Text>
            </View>
            <View style={styles.iconLastHeader}>
                <BadgeIcon
                    type='material-community'
                    name={"cart"}
                    color={colors.headerText}
                    size={30}
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerHome: {
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconFirstHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15
    },
    iconLastHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginRight: 20
    },
    // afterLastHeader: {
    //     position: 'absolute',
    //     justifyContent:'center',
    //     alignItems: 'center',
    //     right: -5,
    //     textAlign:'center',
    //     backgroundColor: colors.colorSizeIcon,
    //     width: 18,
    //     height: 18,
    //     borderStyle:'solid',
    //     borderColor:colors.colorSizeIcon,
    //     borderWidth: 1,
    //     borderRadius: 75
    // }
})
export default HomeHeader