import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Text, View } from "react-native";

const App: FC = () => {
	return (
		<View className="flex-1 items-center justify-center bg-base">
			<StatusBar style="light" />
			<Text className="text-text">
				Open up App.tsx to start working on your app!
			</Text>
		</View>
	);
};

registerRootComponent(App);
