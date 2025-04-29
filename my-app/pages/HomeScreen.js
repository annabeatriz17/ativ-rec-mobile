import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView, ScrollView } from "react-native-web";

export default function HomeScreen( { navigation } ) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Movies</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        backgroundColor: "#000000",
    },
});