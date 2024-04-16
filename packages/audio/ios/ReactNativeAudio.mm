#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTUtils.h>

@interface RCT_EXTERN_MODULE(ReactNativeAudio, NSObject)

RCT_EXTERN_METHOD(startRecording:(RCTPromiseResolveBlock) resolve reject:(RCTPromiseRejectBlock)reject);
// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeReactNativeAudioSpecJSI>(params);
}
#endif

@end
