/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  IconButton,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {setDarkTheme, setDefaultTheme} from '@store/reducers/themeSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '@screens/home';
import DetailScreen from '@screens/detail';
import EditScreen from '@screens/edit';
import AddScreen from '@screens/add';
import Colors from '@utils/colors';
import {defaultTheme, darkTheme} from '@utils/theme';

const Stack = createStackNavigator();

const Routers = () => {
  const themes = useTheme();
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.darkmode);

  return (
    <PaperProvider theme={theme === true ? darkTheme : defaultTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleStyle: {color: 'black', fontSize: 22},
            headerStyle: {backgroundColor: Colors.white},
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
            // options={({route, navigation}) => ({
            //   title: 'Contacts',
            //   headerStyle: {
            //     backgroundColor: themes.colors.background,
            //   },
            //   headerRight: () => (
            //     <IconButton
            //       icon={() => (
            //         <MaterialIcons
            //           name={themes === false ? 'settings' : 'person'}
            //           size={24}
            //           color={themes.colors.text}
            //         />
            //       )}
            //       onPress={() => {
            //         theme === false
            //           ? dispatch(setDarkTheme())
            //           : dispatch(setDefaultTheme());
            //       }}
            //     />
            //   ),
            // })}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routers;
