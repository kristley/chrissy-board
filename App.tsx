import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LikedScreen } from './src/liked/LikedScreen';
import { SoundsScreen } from './src/sounds/SoundsScreen';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      
      tabBarOptions={{
        activeTintColor: '#6e69a6',
        inactiveTintColor: '#908ADA',
        style: { backgroundColor: '#C4C0F2', paddingVertical: 10, height: 60, paddingBottom: 10}
      }}>
      <Tab.Screen
        name="Chrissy sounds"
        component={SoundsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'heart' : 'heart-outline'} color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
