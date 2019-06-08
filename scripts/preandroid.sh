#!/usr/bin/env sh

if [[ -z ${ANDROID_HOME} ]]; then
    #ANDROID_HOME is required by the build.gradle script that React generates
    echo "ANDROID_HOME environment variable needs to be set for React"
    exit -1
else
    # kill server from previous session
    npm run android:kill_server || exit $?

    # start emulator if no device is detected
    if ! adb devices | grep device$ -q; then
      echo "Device not detected, running emulator"
      npm run android:emulator &
    else
      echo "Running on device"
    fi
fi
