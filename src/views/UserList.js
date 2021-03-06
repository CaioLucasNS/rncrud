import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

function UserList({ navigation }) {

    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDelection(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser', 
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getAction(user) {
        return (
            <>
                <Button 
                    onPress={() => navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='orange' />}
                />
                <Button 
                    onPress={() => confirmUserDelection(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red' />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => navigation.navigate('UserForm', user)}
            >
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getAction(user)}
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList 
                keyExtractor={user => user.id}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

export default UserList;