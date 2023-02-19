
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { colors } from './src/contains';
import { Accuracy, ForgotPassword, Login, Main, NewOrder, Register, SelectLocationOnMap, Welcome } from './src/screens';
import Bill from './src/screens/Bill/Bill';
import HaveEmployee from './src/screens/CreateOrder/HaveEmployee/HaveEmployee';
import OrderEstimate from './src/screens/CreateOrder/OrderEstimate/OrderEstimate';
import SearchLocation from './src/screens/CreateOrder/SearchLocation/SearchLocation';
import EditProfile from './src/screens/Me/EditProfile/EditProfile';
import Chat from './src/screens/Order/Chat/Chat';
import Vote from './src/screens/Order/Vote/Vote';

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
        <Stack.Screen name={'Bill'} component={Bill} />
        <Stack.Screen name={'Vote'} component={Vote} />
        <Stack.Screen name={'Chat'} component={Chat} />
        
        <Stack.Screen name={'HaveEmployee'} component={HaveEmployee} />
        <Stack.Screen name={'OrderEstimate'} component={OrderEstimate} />
        <Stack.Screen name={'SearchLocation'} component={SearchLocation} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name={'SelectLocationOnMap'} component={SelectLocationOnMap} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name={'EditProfile'} component={EditProfile} options={{animation:'slide_from_right'}}/>
        <Stack.Screen name={'Main'} component={Main} />
      </Stack.Navigator>
      {/* <StatusBar animated={true} backgroundColor={colors.primaryColor}/> */}
    </NavigationContainer>
  );
};
export default App;
