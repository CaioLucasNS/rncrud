import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './views/UserForm';
import UserForm from './views/UserForm';
import { Button, Icon } from 'react-native-elements';
// import { Icon } from 'react-native-vector-icons/Icon';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='UserList'
                screenOptions={screenOptions}
            >
                <Stack.Screen 
                    name='UserList'
                    component={UserList}
                    options={
                        () => {
                            return {
                                title: 'Lista de Usuários',
                                headerRight: () => {
                                    return(
                                        <Button 
                                            type='clear'
                                            icon={<Icon name='add' size={25} color='white' />}
                                        />
                                    );
                                }
                            }
                        }
                    }
                />
                <Stack.Screen 
                    name='UserForm'
                    component={UserForm}
                    options={{
                        title: 'Formulário de Usuários'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}

export default App;