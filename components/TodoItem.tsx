import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
	todo: Todo;
	markTodoDone: (todoId: string, done: boolean) => void;
};

export type Todo = {
	id: string;
	text: string;
	done: boolean;
};

export default function TodoItem({ todo, markTodoDone }: Props) {
	return (
		<View style={styles.todoItem}>
			<View style={styles.inputAndCheckbox}>
				<Checkbox
					style={styles.checkbox}
					value={todo.done}
					onValueChange={(value) => {
						markTodoDone(todo.id, value);
					}}
				/>
				<Text>{todo.text}</Text>
			</View>
			<AntDesign name="delete" size={24} color="black" />
		</View>
	);
}

const styles = StyleSheet.create({
	checkbox: {},
	todoItem: {
		flexDirection: "row",
		padding: 20,
		borderRadius: 13,
		backgroundColor: "white",
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3.84,
	},
	inputAndCheckbox: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
});
