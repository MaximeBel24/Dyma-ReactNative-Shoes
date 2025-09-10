import { FlatList, StyleSheet } from "react-native";
import { brands } from "../../../../data/brands";
import BrandItem from "./BrandItem";
import { spaces } from "../../../../constants/spaces";
import { useState } from "react";
import ItemSeparator from "../../../../ui-components/ItemSeparator";

export default function BrandsList() {
  const [selectedBrand, setSelectedBrand] = useState("nike");
  return (
    <FlatList
      style={styles.listContainer}
      ItemSeparatorComponent={<ItemSeparator width={spaces.S}/>}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentStyle}
      horizontal
      data={brands}
      keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => (
        <BrandItem
          item={item}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          index={index}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 0,
  },

});
