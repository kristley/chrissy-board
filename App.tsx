import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LikedScreen } from './src/liked/LikedScreen';
import { SoundsScreen } from './src/sounds/SoundsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chrissy Sounds" component={SoundsScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
