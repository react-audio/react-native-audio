import { NativeModules, Platform } from "react-native";

const LINKING_ERROR =
  `The package '@react-native-audio/audio' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: "" }) +
  "- You rebuilt the app after installing the package\n" +
  "- You are not using Expo Go\n";

const isTurboModuleEnabled = global.__turboModuleProxy != null;

const ReactNativeAudioModule = isTurboModuleEnabled
  ? require("./NativeReactNativeAudio").default
  : NativeModules.ReactNativeAudio;

const ReactNativeAudio = ReactNativeAudioModule
  ? ReactNativeAudioModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function foo() {
  return ReactNativeAudio.foo();
}
