import React from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native';
import { colors } from '../../global/styles';
import Swiper from 'react-native-swiper'
import { Button } from 'react-native-elements';

const SignInWelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerTitle}>
                <Text style={{ fontSize: 26, color: colors.background2, fontWeight: 'bold', textTransform: 'uppercase' }}>
                    Discover restaurants
                </Text>
                <Text style={{ fontSize: 26, color: colors.background2, fontWeight: 'bold', textTransform: 'uppercase' }}>
                    In your area
                </Text>
            </View>

            <View
                style={{ flex: 4, justifyContent: 'center' }}
            >
                <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} >
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../assets/images/slide_food1.jpg')}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={require('../../assets/images/slide_food2.jpg')}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={require('../../assets/images/slide_food3.webp')}
                        />
                    </View>
                </Swiper>
            </View>
            <View
                style={{ flex: 3, marginHorizontal: 20, justifyContent: 'flex-end' }}
            >
                <View style={{ marginBottom: 20 }}>
                    <Button
                        title={"Sign In"}
                        buttonStyle={{ borderRadius: 10, backgroundColor: colors.buttons, height: 50, borderColor: colors.buttons, borderWidth: 1, borderStyle: 'solid' }}
                        titleStyle={{ fontSize: 16, textTransform: 'uppercase', fontWeight: 'bold' }}
                        onPress={()=>{navigation.navigate('SignIn')}}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Button
                        title={"Create your account"}
                        buttonStyle={{ borderRadius: 10, backgroundColor: 'white', height: 50, borderColor: colors.grey2, borderWidth: 1, borderStyle: 'solid' }}
                        titleStyle={{ fontSize: 18, fontWeight: 'bold', color: colors.grey2 }}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTitle: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 20
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
export default SignInWelcomeScreen;