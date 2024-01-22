import { View, Text, StyleSheet, Button } from "react-native";

export const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos a mi tienda, soy AntonyTC</Text>
      <Text style={styles.Product1}>Manzana $0.50</Text>
      <Text style={styles.Product2}>Piña $0.75</Text>
      <Text style={styles.Product3}>Durazno $0.35</Text>
      <Button
        title="HOME"
        onPress={() => {
          navigation.navigate("WellcomeAntonyTC");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  Product1: {
    color: "red",
    backgroundColor: "blue",
  },
  Product2: {
    color: "aqua",
    backgroundColor: "green",
  },
  Product3: {
    color: "lime",
    backgroundColor: "magenta",
  },
});
