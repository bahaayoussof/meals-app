import { View, Text, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

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

// #e2b497
