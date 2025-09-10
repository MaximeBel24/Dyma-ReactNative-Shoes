import { FlatList, StyleSheet } from "react-native";
import { shoes } from "../../../../data/shoes";
import VerticalCard from "./VerticelCard";
import ItemSeparator from "../../../../ui-components/ItemSeparator";
import { spaces } from "../../../../constants/spaces";

export default function ShoesList() {
  const data = shoes[0].stock.filter((item) => !item.new);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <VerticalCard item={item} />}
      horizontal
      ItemSeparatorComponent={<ItemSeparator width={spaces.L} />}
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
}


const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: spaces.L
  }
})