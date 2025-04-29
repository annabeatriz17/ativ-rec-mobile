import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";

export default function Stack2() {
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