import { View, StyleSheet, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import Animated, { BounceInLeft, FlipOutXUp } from "react-native-reanimated";

type Props = {
	todo: Todo;
	markTodoDone: (todoId: string, done: boolean) => void;
	deleteTodo: (todoId: string) => void;
};

export type Todo = {
	id: string;
	text: string;
	done: boolean;
};

export default function TodoItem({ todo, markTodoDone, deleteTodo }: Props) {
	return (
		<Animated.View entering={BounceInLeft} exiting={FlipOutXUp}>
			<View style={styles.todoItem}>
				<View style={styles.inputAndCheckbox}>
					<Checkbox
						style={styles.checkbox}
						color="#5438DC"
						value={todo.done}
						onValueChange={(value) => {
							markTodoDone(todo.id, value);
						}}
					/>
					<Link href={`todos/${todo.id}`} style={styles.text}>
						{todo.text}
					</Link>
				</View>
				<Pressable
					style={{ padding: 10, backgroundColor: "#FEECEC", borderRadius: 73 }}
					onPress={() => {
						deleteTodo(todo.id);
					}}
				>
					<AntDesign name="delete" size={24} color="#EC1A21" />
				</Pressable>
			</View>
		</Animated.View>
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
		gap: 10,
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	text: {
		fontWeight: "bold",
		fontSize: 17,
	},
});
