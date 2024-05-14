import { useRef } from "react";
import {
	KeyboardAvoidingView,
	Pressable,
	StyleSheet,
	TextInput,
	View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
	addTodo: (todo: string) => void;
};

export default function TodoInput({ addTodo }: Props) {
	const inputValueText = useRef<string>("");

	return (
		<KeyboardAvoidingView behavior="padding">
			<View style={styles.inputContainer}>
				<View style={styles.inputInnerContainer}>
					<TextInput
						style={styles.input}
						placeholder="Fara út með ruslið..."
						onChangeText={(text) => {
							inputValueText.current = text;
						}}
					/>
					<Pressable
						onPress={() => {
							addTodo(inputValueText.current);
						}}
					>
						<Ionicons name="send" size={24} color="#5438DC" />
					</Pressable>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	inputInnerContainer: {
		flexDirection: "row",
		borderColor: "#5438DC",
		padding: 10,
		borderWidth: 1,
		borderRadius: 13,
	},
	inputContainer: {
		padding: 20,
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	input: {
		flex: 1,
	},
});
