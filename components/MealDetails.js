import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.detail, style]}>
      <Text style={[styles.detailitem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailitem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailitem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  detailitem: {
    marginHorizontal: 4,
    fontSize: 12,
  },


});
