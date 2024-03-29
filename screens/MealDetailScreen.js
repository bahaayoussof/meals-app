import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	const headerButtonPressHandler = () => {
		navigation.navigate("MealsCategories");
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />;
			},
			title: selectedMeal.title,
		});
	}, [navigation, headerButtonPressHandler]);


	return (
		<ScrollView style={styles.rootContainer}>
			<View style={styles.container}>
				<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
				<Text style={styles.title}>{selectedMeal.title}</Text>
				<MealDetails
					duration={selectedMeal.duration}
					complexity={selectedMeal.complexity}
					affordability={selectedMeal.affordability}
					textStyle={styles.detailText}
				/>

				<View style={styles.listOuterContainer}>
					<View style={styles.listContainer}>
						<Subtitle>Ingredients</Subtitle>
						<List data={selectedMeal.ingredients} />

						<Subtitle>Steps</Subtitle>
						<List data={selectedMeal.steps} />
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	container: {
		flex: 1,
	},
	image: {
		width: "100%",
		height: 300,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		color: "white",
		textAlign: "center",
		margin: 8,
	},
	detailText: {
		color: "white",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
	},
});

