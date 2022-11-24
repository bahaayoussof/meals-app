import { View, Text, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

const MealsOverviewScreen = ({ route }) => {
	// another way to use route into component...
	// const route = useRoute();
	// const { categoryId } = route.params;

	const catId = route.params.categoryId;

	return (
		<View style={styles.container}>
			<Text>Meals Overview Screen - {catId}</Text>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
