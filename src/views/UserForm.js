import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import UsersContext from '../context/UsersContext';

function UserForm({ route, navigation }) {
    const [user, setUser] = useState(route.params ? route.params : {});
    const { dispatch } = useContext(UsersContext);

    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder='Informe o nome'
                value={user.name}
            />

            <Text>E-mail</Text>
            <TextInput
                style={styles.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder='Informe o email'
                value={user.email}
            />

            {/* TODO: update url avatar */}
            <Text>URL do Avatar</Text>
            <TextInput
                style={styles.input}
                onChangeText={avatar => setUser({ ...user, avatar })}
                placeholder='Informe a URL do avatar'
                value={user.avatarUrl}
            />

            <Button
                title='Salvar'
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })

                    navigation.goBack()
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})

export default UserForm;