import { View, StyleSheet } from "react-native";
import Banner from "../components/Banner";
import { spaces } from "../../../constants/spaces";

export default function NewsSection() {
  return <View style={styles.container}>
    <Banner text="Nouveautés" />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 160,
    paddingVertical: spaces.M,
  },
});
