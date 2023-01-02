import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { SoundObject } from './SoundObject';

type SoundButtonProps = {
  soundObject: SoundObject;
};
export default function SoundButton({ soundObject }: SoundButtonProps) {
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(soundObject.sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  function addToFavorites() {
    // a function to add the sound to a favorites list that is stored in local storage
      
  }

  return (
    <TouchableOpacity onPress={playSound} style={styles.button} onLongPress={addToFavorites}>
      <Image source={soundObject.image} style={styles.image}/>
      <Text>Play Sound</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: { 
    flex: 1,
    margin: 10, 
    backgroundColor: 'lavender', 
    height: 200, 
    borderRadius: 20 
  },
  image: {
    flex: 1,
    marginBottom: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 10
  }
});
