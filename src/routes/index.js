import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { SplashScreen } from '../pages/splashScreen';
import { Login } from '../pages/loginScreen';
import Register from '../pages/RegisterScreen';
import Home from '../pages/homeScreen';
import Agenda from '../pages/AgendaScreen';
import Pesquisar from '../pages/PesquisarScreen';
import { Temas } from '../global/themes';


export const Routes = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Registro' component={Register} />
                <Stack.Screen name='Home' component={BottomRoute} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const BottomRoute = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name={routeIcon[route.name]} size={size} color={color} />
                },
                tabBarActiveTintColor: Temas.colors.secondary,
                tabBarInactiveTintColor: Temas.colors.black,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Temas.colors.bgTabBar,
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Pesquisar' component={Pesquisar} />
            <Tab.Screen name='Agenda' component={Agenda} />
        </Tab.Navigator>
    )
}

const routeIcon = {
    'Home': 'home-outline',
    'Agenda': 'calendar-outline',
    'Pesquisar': 'search-outline',
}