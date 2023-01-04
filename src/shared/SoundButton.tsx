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

  return (
    <TouchableOpacity onPress={playSound} style={styles.button}>
      <Image source={soundObject.image} style={styles.image}/>
      <Text style={styles.text}>{soundObject.name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: { 
    flex: 1,
    margin: 10, 
    backgroundColor: '#C4C0F2', 
    height: 200, 
    borderRadius: 20 
  },
  image: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 10
  }
});
