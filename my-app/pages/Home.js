import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput, View } from "react-native-web";
export default function Home( { navigation } ) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Movies</Text>
                <TextInput placeholder="🔍Digite o nome do filme" style={styles.input} />
                <View style={styles.cards}>
                <View style={styles.card1}>
                <Image source={require("../assets/img/filme1.jpg")} style={styles.cardimage} />
                <Text style={styles.textimage}>Para todos os garotos que já amei</Text>
                </View>
                <View style={styles.card2}>
                <Image source={require("../assets/img/filme2.jpg")} style={styles.cardimage} />
                <Text style={styles.textimage}>Minha Culpa - Londres</Text>
                </View>
                </View>
                <View style={styles.rectangle}>
                <View style={styles.card3}>
                <Image source={require("../assets/img/filme1-quadrado.jpg")} style={styles.cardimage1} />
                <Text style={styles.textimage1}>Movie 1</Text>
                </View>
                <View style={styles.card3}>
                <Image source={require("../assets/img/filme1.jpg")} style={styles.cardimage1} />
                <Text style={styles.textimage1}>Movie 1</Text>
                </View>
                </View>
                <TouchableOpacity style={styles.button}>View All</TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b21368',
        height: '100%',
    },
    title: {
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 20,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 20,
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40,
    },
    card1: {
        display: 'flex',
        flexDirection: 'column',
    },
    card2: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardimage: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        width: 100,
        height: 200,
    },
    textimage: {
        fontSize: 10,
    },
    rectangle: {
        display: 'flex',
        flexDirection: 'row',

    },
    card3: {
        display: 'flex',
        flexDirection: 'row',
    },
    cardimage1: {
        marginTop: 20,
        width: 50,
        height: 50,
        display: 'flex',
    },
    textimage1: {
        display: 'flex',
    },
    button: {
        marginTop: 15,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        textAlign: 'center',
    },

});