import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from './redux/reducer/user'; // Đảm bảo đường dẫn đúng
import { Button } from '@ant-design/react-native';

const MyApp = () => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.user.name); // Lấy tên từ Redux store

    const updateName = () => {
        dispatch(setName('newName')); // Dispatch action để cập nhật tên
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity style={styles.button} onPress={updateName}>
                <Text style={styles.buttonText}>Update Name</Text>
            </TouchableOpacity>
            <Button type="primary">Click Me</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default MyApp;