import React from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My Profile</Text>
            <Image source={require("../assets/img/profile.jpg")} style={styles.image} />
            <Text style={styles.subtitle}>Nome: Anna Beatriz</Text>
            <Text style={styles.subtitle}>Idade: 17 Anos</Text>
            <Text style={styles.subtitle}>Cidade: Valinhos</Text>
            <Text style={styles.subtitle}>Email: annabeatrizbe13@gmail.com</Text>
            <Button title="Ir para o Perfil" onPress={() => navigation.navigate("Stack2")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
    },
    subtitle: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10,
    },
});