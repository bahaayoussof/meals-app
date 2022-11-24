import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
	const renderGridItem = itemData => {
		const pressHandler = () => {
			navigation.navigate("MealsOverview");
		};

		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	};

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
