import {useCallback, useState} from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList, ListRenderItem,
} from "react-native";

export default function Index() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const goalInputHandler = useCallback((enteredText: string) => {
    setEnteredGoalText(enteredText);
  }, [])

  const addGoalHandler = useCallback(() => {
    setCourseGoals((currentCourseGoals: Array<string>) =>
      [...currentCourseGoals, enteredGoalText]);
  }, [enteredGoalText])

  // item MUST be called item, because it's a property of ListRenderItemInfo
  const goalItem = useCallback<ListRenderItem<string>>(({item}) => {
    return (
      <Text
        style={styles.goalItem}
        key={item}
      >{item}
      </Text>
    )
  }, [])

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='you course goal'
          onChangeText={goalInputHandler} // the function is not immediately executed here
        />
        <Button
          title='add goal'
          onPress={() => {
            addGoalHandler()
          }}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={goalItem}/>
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
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  }
})