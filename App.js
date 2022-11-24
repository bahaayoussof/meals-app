import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				{/* Rest of your app code */}
				<Stack.Navigator>
					<Stack.Screen name="MealsCategories" component={CategoriesScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
