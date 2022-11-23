import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = itemData => {
	return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
};

const CategoriesScreen = () => {
	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={item => item.id}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;
