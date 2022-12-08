import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (!value.trim()) {
      Alert.alert('Ошибка', 'Название дела не может быть пустым');
      return;
    }

    onSubmit(value);
    setValue('');
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder='Введите название дела...'
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setValue}
      />
      <Button style={styles.btn} title='Добавить' onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: '#3949ab',
  },
  btn: {},
});

export default AddTodo;
