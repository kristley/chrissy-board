import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function LikedScreen() {
  return (
    <SafeAreaView 
        style={{ backgroundColor: '#948FD3', flex: 1}}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
    </View></SafeAreaView>
  );
}
