import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../components/TodoItem";

export function saveTodosToDevice(todos: Todo[]) {
	AsyncStorage.setItem("todos", JSON.stringify(todos));
}

export async function getTodosFromDevice(): Promise<Todo[]> {
	// Your code here
	const todos = await AsyncStorage.getItem("todos");
	if (todos === null) {
		return [];
	}
	return JSON.parse(todos);
}
