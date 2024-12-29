import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export default function Index() {

    function

  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='you course goal'
            />
            <Button title='add goal' onPress={() => {}}/>
        </View>
        <View style={styles.goalsContainer}>
            <Text>list of goals...</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginEnd: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    }
})