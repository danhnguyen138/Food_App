import React, { useState } from 'react'

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Pressable } from 'react-native';
import { colors, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';
import { filterData } from '../global/Data';
import HomeHeader from '../components/HomeHeader';

const HomeScreen = () => {
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0");

    return (
        <View style={styles.container}>
            <HomeHeader title={"XpressFood"} />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, gap: 10 }}>
                        <TouchableOpacity onPress={() => setDelivery(true)}>
                            <View style={{ ...styles.deliverButton, backgroundColor: delivery ? colors.buttons : colors.grey4 }} >
                                <Text style={styles.deliveryText}>
                                    Delivery
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setDelivery(false)}>
                            <View style={{ ...styles.deliverButton, backgroundColor: delivery ? colors.grey4 : colors.buttons }} >
                                <Text style={styles.deliveryText} >
                                    Pick up
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.filterView}>
                    <View style={styles.addressView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 2 }}>
                            <Icon
                                type="material-community"
                                name="map-marker"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{ fontSize: 16, marginLeft: 5 }} numberOfLines={1} ellipsizeMode='tail'>
                                22 Bessie Street 123
                            </Text>
                        </View>
                        <View style={styles.clockView}>
                            <Icon
                                type="material-community"
                                name="clock-time-four"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{ fontSize: 16, marginLeft: 5 }}>
                                Now
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                            type="material-community"
                            name="tune"
                            color={colors.grey1}
                            size={26}

                        />
                    </View>
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>
                        Categories
                    </Text>
                </View>
                <View>
                    <View>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={filterData}
                            keyExtractor={(item) => item.id}
                            extraData={indexCheck}
                            renderItem={({ item, index }) => (
                                <Pressable
                                    onPress={() => { setIndexCheck(item.id) }}
                                >
                                    <View style={indexCheck == item.id ? styles.smallCardSelected : styles.smallCard}>
                                        <Image
                                            style={{ height: 60, width: 60, borderRadius: 30 }}
                                            source={item.image}
                                        />
                                        <Text
                                            style={indexCheck===item.id? styles.smallCardTextSelected: styles.smallCardText}
                                        >
                                            {item.name}
                                        </Text>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliverButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16,

    },
    addressView: {
        flexDirection: 'row',
        backgroundColor: colors.grey4,
        gap: 35,
        borderRadius: 15,
        paddingVertical: 5,
        flex: 1,
        paddingHorizontal: 25
    },
    filterView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        gap: 20,
        marginVertical: 10
    },
    clockView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 3,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 12,
        flex: 1
    },
    headerText: {
        color: colors.grey1,
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 10
    },
    headerTextView: {
        backgroundColor: colors.grey4,
        paddingVertical: 3
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,
    },
    smallCardText:{
        fontWeight:"bold",
        color: colors.grey1,
    },
    smallCardTextSelected:{
        fontWeight: "bold",
        color: colors.cardbackground
    }
})
export default HomeScreen