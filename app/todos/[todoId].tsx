import { Link, useLocalSearchParams } from "expo-router";

import { Text, View } from "react-native";
import { useStore } from "../../utils/store";

export default function TodoPage() {
	const { todoId } = useLocalSearchParams();

	const todo = useStore((state) => state.todos.find((t) => t.id === todoId));

	return (
		<Link href="..">
			<View>
				<Text>todo id: {todoId}</Text>
				<Text>{todo?.text}</Text>
				<Text>is done?: {todo?.done.toString()}</Text>
			</View>
		</Link>
	);
}
