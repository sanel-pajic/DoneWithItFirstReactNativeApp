import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("Android connected");
  let x = 1;

  return (
    <View style={styles.container}>
      <Text>Hello world Sanel Pajic Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
