import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
	return data.map(dataPoint => (
		<View key={dataPoint} style={[styles.listItem]}>
			<Text style={styles.itemText}>{dataPoint}</Text>
		</View>
	));
};

export default List;

const styles = StyleSheet.create({
	listItem: {
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#AEBDCA",
		borderRadius: 6,
	},
	itemText: {
		color: "#334756",
		textAlign: "center",
	},
});
