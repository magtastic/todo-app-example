import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoItem, { Todo as TodoType } from "./components/TodoItem";

export default function App() {
	const [todos, setTodos] = useState<TodoType[]>([]);

	const addTodo = (todo: string) => {
		setTodos((currentTodos) => [
			...currentTodos,
			{ text: todo, id: uuid(), done: false },
		]);
	};

	const setTodoDoneStatus = (todoId: string, done: boolean) => {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === todoId) {
					return { ...todo, done: done };
				}
				return todo;
			});
		});
	};

	return (
		<View style={styles.container}>
			<Text onPress={() => addTodo("Nýtt verkefni")} style={styles.title}>
				Hallo!
			</Text>
			<View style={styles.todosContainer}>
				{todos.map((todo) => (
					<TodoItem
						markTodoDone={setTodoDoneStatus}
						key={todo.id}
						todo={todo}
					/>
				))}
			</View>
			<TodoInput addTodo={addTodo} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FBFBFB",
		justifyContent: "flex-end",
	},
	title: {
		fontSize: 80,
		fontWeight: "bold",
	},
	todosContainer: {
		gap: 10,
		paddingBottom: 10,
		paddingHorizontal: 20,
	},
});
