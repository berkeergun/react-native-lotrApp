import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Books from './pages/Books/Books';
import BookChapter from "./pages/BookChapter/BookChapter";

import Movies from "./pages/Movies/Movies"
import MovieDetail from "./pages/MovieDetail/MovieDetail"

import Characters from './pages/Characters/Characters';
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BookStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="BooksPage"
        component={Books}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Books',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#8e5232'},
          headerTitleStyle:{fontFamily:"albertus_mt1"}
          
        }}
      />
      <Stack.Screen
        name="BookChapter"
        component={BookChapter}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Chapters',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#8e5232'},
          headerTitleStyle:{fontFamily:"albertus_mt1"}
        }}
      />
    </Stack.Navigator>
  );
};

const MovieStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MoviePage"
        component={Movies}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Movies',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#8e5232'},
          headerTitleStyle:{fontFamily:"albertus_mt1"}
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Movie Details',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#8e5232'},
          headerTitleStyle:{fontFamily:"albertus_mt1"}
        }}
      />
    </Stack.Navigator>
  );
};

const CharacterStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="CharacterPage"
        component={Characters}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Characters',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#8e5232'},
          headerTitleStyle:{fontFamily:"albertus_mt1",}
        }}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Character Details',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#8e5232'},
          headerTitleStyle:{fontFamily:"albertus_mt1"}
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Book"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Book') {
              iconName = focused ? 'book-open-page-variant' : 'book-open-page-variant-outline';
            } else if (route.name === 'Movie') {
              iconName = focused ? 'movie-open' : 'movie-open-outline';
            } else if (route.name === 'Character') {
              iconName = focused ? 'account-star' : 'account-star-outline';
            }
            return <Icon name={iconName} size={24} color="#fff" />;
          },
          tabBarStyle: {backgroundColor: '#8e5232'},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#888',
          tabBarIconStyle: {textAlign: 'center'},
          headerShown: false,
          tabBarLabelStyle: {fontSize: 14},
        })}>
        <Tab.Screen name="Book" component={BookStack} options={{title:"Books",tabBarLabelStyle:{fontFamily:"albertus_mt1",fontSize:16}}} />
        <Tab.Screen
          name="Movie"
          component={MovieStack}
          options={{title:"Movies",tabBarLabelStyle:{fontFamily:"albertus_mt1",fontSize:16}}}
          // options={{
          //   tabBarBadge: favorites > 0 ? favorites : null,
          //   tabBarBadgeStyle: {
          //     backgroundColor: '#0076b5',
          //     color: '#fff',
          //     borderColor: '#fff',
          //     borderWidth: 2,
          //     marginLeft: 9,
          //   },
          // }}
        />
        <Tab.Screen
          name="Character"
          component={CharacterStack}
          options={{title:"Characters",tabBarLabelStyle:{fontFamily:"albertus_mt1",fontSize:16}}}
          
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;