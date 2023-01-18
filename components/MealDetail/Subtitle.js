import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={[styles.subtitle]}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
		borderBottomColor: "#AEBDCA",
		borderBottomWidth: 2,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#AEBDCA",
		textAlign: "center",
	},
});
