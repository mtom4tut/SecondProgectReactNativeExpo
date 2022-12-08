import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Todo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={() => onRemove(todo.id)}
      onPress={() => console.log('Press:', todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
});

export default Todo;
