import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, AppState } from "react-native";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import TodoInput from "../components/TodoInput";
import TodoItem, { Todo as TodoType } from "../components/TodoItem";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { getTodosFromDevice, saveTodosToDevice } from "../utils/localStorage";
import { useStore } from "../utils/store";

export default function App() {
	const todos = useStore((state) => state.todos);
	const addManyTodos = useStore((state) => state.addManyTodos);
	const addTodo = useStore((state) => state.addTodo);
	const deleteTodo = useStore((state) => state.deleteTodo);
	const setTodoDoneStatus = useStore((state) => state.setTodoDoneStatus);

	useEffect(() => {
		if (todos.length === 0) {
			getTodosFromDevice().then((todos) => {
				addManyTodos(todos);
			});
		}

		const listener = AppState.addEventListener("change", (nextAppState) => {
			if (nextAppState === "background") {
				saveTodosToDevice(todos);
			} else if (nextAppState === "active") {
				getTodosFromDevice().then((todos) => {
					addManyTodos(todos);
				});
			}
		});
		return () => {
			listener.remove();
		};
	}, [todos, addManyTodos]);

	return (
		<SafeAreaProvider>
			<SafeAreaView edges={["top"]} style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Verkefni dagsins!</Text>
					<Text>
						Verkefni lokið: {todos.filter((todo) => todo.done).length} /{" "}
						{todos.length}
					</Text>
				</View>
				<ScrollView contentContainerStyle={styles.todosContainer}>
					{todos.map((todo) => (
						<TodoItem
							deleteTodo={deleteTodo}
							markTodoDone={setTodoDoneStatus}
							key={todo.id}
							todo={todo}
						/>
					))}
				</ScrollView>
				<TodoInput addTodo={addTodo} />
				<StatusBar style="auto" />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FBFBFB",
		justifyContent: "flex-end",
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
	},
	todosContainer: {
		gap: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	titleContainer: {
		padding: 20,
	},
});
