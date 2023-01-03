import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
	// another way to use route into component...
	// const route = useRoute();
	// const { categoryId } = route.params;

	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter(mealItem => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(category => category.id === catId).title;
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	const renderMealItem = itemData => {
		const item = itemData.item;

		const mealItemProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		};
		return <MealItem {...mealItemProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={item => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
