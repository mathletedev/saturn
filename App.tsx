import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<Text>Open up App.tsx to start working on your app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1e1e2e",
		alignItems: "center",
		justifyContent: "center"
	}
});
