import { StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function TodoForm({ addTask }) {

    const [taskText, setTaskText] = useState('')

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add Task" onPress={() => addTask(taskText)} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
    },
});