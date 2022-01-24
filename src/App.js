import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './views/UserForm';
import UserForm from './views/UserForm';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='UserList'
            >
                <Stack.Screen 
                    name='UserList'
                    component={UserList}
                />
                <Stack.Screen 
                    name='UserForm'
                    component={UserForm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;