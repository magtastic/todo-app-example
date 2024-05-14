import { useRef } from "react";
import {
	KeyboardAvoidingView,
	Pressable,
	StyleSheet,
	TextInput,
	View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
	addTodo: (todo: string) => void;
};

export default function TodoInput({ addTodo }: Props) {
	const inputValueText = useRef<string>("");
	const inputRef = useRef<TextInput>(null);

	return (
		<KeyboardAvoidingView keyboardVerticalOffset={50} behavior="padding">
			<View style={styles.inputContainer}>
				<SafeAreaView edges={["bottom"]}>
					<View style={styles.inputInnerContainer}>
						<TextInput
							ref={inputRef}
              autoComplete="off"
							style={styles.input}
							placeholder="Fara út með ruslið..."
							onChangeText={(text) => {
								inputValueText.current = text;
							}}
						/>
						<Pressable
							onPress={() => {
								inputRef.current?.clear();
								inputRef.current?.blur();
								addTodo(inputValueText.current);
							}}
						>
							<Ionicons name="send" size={24} color="#5438DC" />
						</Pressable>
					</View>
				</SafeAreaView>
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
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3.84,
	},
	input: {
		flex: 1,
	},
});
