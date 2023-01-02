import { AVPlaybackSource } from "expo-av";
import { ImageSourcePropType } from "react-native";

export type SoundObject = { id: number; sound: AVPlaybackSource; name: string; image: ImageSourcePropType};