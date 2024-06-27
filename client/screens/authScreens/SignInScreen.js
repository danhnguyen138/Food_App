import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { colors, parameters } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Header } from '../../components/Header';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import { title } from '../../global/styles';
const SignInScreen = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [textInput2Fossued, setTextInput2Fossued] = useState(false);
    const textInput1 = useRef(1);
    const textInput2 = useRef(2);
    return (
        <View style={styles.container}>
            <Header title={"My Account"} type="arrow-left" navigation={navigation} />
            <View style={styles.header_title}>
                <Text
                    style={title}
                >
                    Sign-In
                </Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
                <Text style={styles.text1}>
                    Please enter the email and password
                </Text>
                <Text style={styles.text1}>
                    registered with your account
                </Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <View>
                    <TextInput
                        style={styles.TextInput1}
                        placeholder='Email'
                        ref={textInput1}
                    />
                </View>
                <View style={styles.TextInput2}>
                    <Animatable.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400}>
                        <Icon
                            name="lock"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                        />
                    </Animatable.View>
                    <TextInput
                        style={{ width: "80%", fontSize: 16 }}
                        placeholder='Password'
                        secureTextEntry={!showPassword}
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Fossued(false)
                        }}
                        onBlur={() => {
                            setTextInput2Fossued(true)
                        }}
                    />
                    <Animatable.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400}>
                        {showPassword ?
                            (<Icon
                                name="visibility-off"
                                iconStyle={{ color: colors.grey3 }}
                                type="material"
                                onPress={() => setShowPassword(!showPassword)}
                            />)
                            : (
                                <Icon
                                    name="visibility"
                                    iconStyle={{ color: colors.grey3 }}
                                    type="material"
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            )}

                    </Animatable.View>
                </View>

            </View>
            <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
                <Button
                    title={"Sign In"}
                    buttonStyle={parameters.styleButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={() => {navigation.navigate('HomeScreen') }}
                />
            </View>
            <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                <Text style={{ textDecorationLine: "underline", color: colors.grey3 }}>
                    Forgot Password ?
                </Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>
                    OR
                </Text>
            </View>
            <View style={{ marginHorizontal: 12, marginTop: 10 }}>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginHorizontal: 12, marginTop: 10 }}>
                <SocialIcon
                    title='Sign In With Google'
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 16 }}>
                    New on XpressFood ?
                </Text>
            </View>
            <View
                style={{
                    marginTop: 10,
                    marginHorizontal: 20,
                    alignItems: 'flex-end'
                }}
            >
                <Button
                    title={"Create an account"}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleButton}
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header_title: {
        marginLeft: 20,
        marginTop: 10
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
        fontSize: 16,
        paddingVertical: 8,
        paddingRight: 15,
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingVertical: 8,
        paddingRight: 8,
    },
    SocialIcon: {
        borderRadius: 12,
        height: 50
    },
    buttonStyle: {
        height:40,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ff8c52',
        backgroundColor: "white",
        paddingLeft: 15,
        paddingRight: 15
    },
    titleButton: {
        color: "#ff8c52"
    }

})
export default SignInScreen