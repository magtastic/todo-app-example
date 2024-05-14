import { create } from "zustand";
import { Todo } from "../components/TodoItem";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

export const useStore = create<{
	todos: Todo[];
	addManyTodos: (todos: Todo[]) => void;
	addTodo: (todo: string) => void;
	deleteTodo: (todoId: string) => void;
	setTodoDoneStatus: (todoId: string, done: boolean) => void;
}>((set) => ({
	todos: [],
	addManyTodos: (todos: Todo[]) =>
		set((state) => ({
			todos: [...state.todos, ...todos],
		})),
	addTodo: (todo: string) =>
		set((state) => ({
			todos: [...state.todos, { id: uuid(), text: todo, done: false }],
		})),
	deleteTodo: (todo: string) =>
		set((state) => ({ todos: state.todos.filter((t) => t.id !== todo) })),
	setTodoDoneStatus: (todoId: string, done: boolean) =>
		set((state) => ({
			todos: state.todos.map((todo) => ({
				...todo,
				done: todo.id === todoId ? done : todo.done,
			})),
		})),
}));
