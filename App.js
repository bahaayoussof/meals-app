import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "#351401" },
				headerTintColor: "white",
				sceneContainerStyle: { backgroundColor: "#3f2f25" },
				drawerContentStyle: { backgroundColor: "#351401" },
				drawerInactiveTintColor: "white",
				drawerActiveTintColor: "#351401",
				drawerActiveBackgroundColor: "#e4baa1",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					// title: "All Categories",
					drawerIcon: ({ color, size }) => {
						return <Ionicons name="list" color={color} size={size} />;
					},
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => {
						return <Ionicons name="star" color={color} size={size} />;
					},
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				{/* Rest of your app code */}
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#351401" },
						headerTintColor: "white",
						cardStyle: { backgroundColor: "#3f2f25" },
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={DrawerNavigator}
						options={{
							// title: "All Categories",
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return {
						// 		title: catId ? `Meals Overview - ${catId}` : "Meals Overview",
						// 	};
						// }}
					/>
					<Stack.Screen
						name="MealDetail"
						component={MealDetailScreen}
						// options={{
						// 	headerRight: () => {
						// 		return <Button title="Tap me!" onPress={() => console.log("Pressed!!!!")} />;
						// 	},
						// }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

// #351401
// #3f2f25
