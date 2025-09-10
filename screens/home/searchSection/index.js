import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../ui-components/inputs/SearchInput";
import { spaces } from "../../../constants/spaces";
import BrandsList from "./components/BrandsList";

export default function SearchSection() {
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={styles.conatainer}>
      <SearchInput
        placeholder="Trouvez vos shoes"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <BrandsList />
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 120,
    paddingTop: spaces.S,
    justifyContent: "space-evenly"
  },
});
