import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AddTodo from './src/components/AddTodo';
import Navbar from './src/components/Navbar';
import Todo from './src/components/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prev,
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <View style={styles.form}>
          <AddTodo onSubmit={addTodo} />
        </View>

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todo}>
              <Todo todo={item} onRemove={removeTodo} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  form: {
    marginBottom: 15,
  },

  todo: {
    marginBottom: 10,
  },
});
