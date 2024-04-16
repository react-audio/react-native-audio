package com.audio.reactnativeaudio

import com.facebook.react.bridge.ReactApplicationContext

abstract class ReactNativeAudioSpec internal constructor(context: ReactApplicationContext) :
  NativeReactNativeAudioSpec(context) {
  abstract fun foo(promise: Promise)
}
