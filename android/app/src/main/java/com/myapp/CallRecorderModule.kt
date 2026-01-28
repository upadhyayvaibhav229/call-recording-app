package com.myapp   // ⚠️ must match package name

import android.media.MediaRecorder
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CallRecorderModule(
  reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

  private var recorder: MediaRecorder? = null

  override fun getName(): String {
    return "CallRecorder"
  }

  @ReactMethod
  fun startRecording(fileName: String) {
    try {
      val filePath =
        reactApplicationContext
          .getExternalFilesDir(null)
          ?.absolutePath + "/$fileName.mp3"

      recorder = MediaRecorder().apply {
        setAudioSource(MediaRecorder.AudioSource.VOICE_COMMUNICATION)
        setOutputFormat(MediaRecorder.OutputFormat.MPEG_4)
        setAudioEncoder(MediaRecorder.AudioEncoder.AAC)
        setOutputFile(filePath)
        prepare()
        start()
      }
    } catch (e: Exception) {
      e.printStackTrace()
    }
  }

  @ReactMethod
  fun stopRecording() {
    recorder?.apply {
      stop()
      release()
    }
    recorder = null
  }
}
