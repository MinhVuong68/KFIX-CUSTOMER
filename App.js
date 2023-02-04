
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { colors } from './src/contains';
import { Accuracy, ForgotPassword, Login, Main, NewOrder, Register, SelectLocationOnMap, Welcome } from './src/screens';
import SearchLocation from './src/screens/CreateOrder/SearchLocation/SearchLocation';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Welcome'} component={Welcome} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'Accuracy'} component={Accuracy} />
        <Stack.Screen name={'NewOrder'} component={NewOrder} />
        <Stack.Screen name={'SearchLocation'} component={SearchLocation} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name={'SelectLocationOnMap'} component={SelectLocationOnMap} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name={'Main'} component={Main} />
      </Stack.Navigator>
      {/* <StatusBar animated={true} backgroundColor={colors.primaryColor}/> */}
    </NavigationContainer>
  );
};
export default App;
