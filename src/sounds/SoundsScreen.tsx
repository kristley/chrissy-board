import { FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SoundObject } from '../shared/SoundObject';
import SoundButton from '../shared/SoundButton';

const data: SoundObject[] = [
  {
    id: 3,
    sound: require('../../assets/mlem.mp3'),
    name: 'mlem',
    image: require('../../assets/mlem.jpg')
  },
  {
    id: 4,
    sound: require('../../assets/yee.mp3'),
    name: 'Yee',
    image: {
      uri: 'https://static.wikia.nocookie.net/dat-meme-wiki/images/6/68/YeE.jpeg/revision/latest?cb=20190502181402'
    }
  }
];

export function SoundsScreen() {
  return (
    <SafeAreaView 
        style={{ backgroundColor: '#948FD3', flex: 1}}>
      <FlatList
        data={data.length % 2 === 0 ? data : [...data, false]}
        numColumns={2}
        renderItem={({ item }) => {
          return typeof item === 'boolean' ? (
            <View style={{ flex: 1, margin: 10, height: 200 }} />
          ) : (
            <SoundButton soundObject={item} />
          );
        }}
        columnWrapperStyle={{ paddingHorizontal: 10, justifyContent: 'space-between' }}
      />
    </SafeAreaView>
  );
}

/*
import { FlatList, Text, View } from 'react-native';
import SoundButton from '../shared/SoundButton';
import { SoundObject } from '../shared/SoundObject';

export function SoundsScreen() {
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({ item }) => 
      <View style={{ flex: 1, margin: 20, backgroundColor:'orange' }}/>
      //<SoundButton soundObject={item} />
    }
    />
  );
}
*/
