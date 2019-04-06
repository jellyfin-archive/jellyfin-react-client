# jellyfin-react-client

The next generation client application for Jellyfin

Project created manually, based on: https://github.com/react-everywhere/re-start/pull/60

This project uses `yarn`.

## Install
Run `yarn install` in the `jellyfinclient` directory

## Run the project on a specific platform
All the following commands are run inside the `jellyfinclient` directory
### Android/iOS
```sh
yarn run android
yarn run ios
```
In case of problems, this [tutorial](https://facebook.github.io/react-native/docs/running-on-device.html) will help you to configure your environment.

### Desktop (Electron)
```sh
yarn run electron
```

### Web
```sh
yarn run web
```

### Windows (UWP)
```sh
yarn run windows
```
Windows platforms needs to have installed the `Windows 10 SDK Build 14393` to be able to be build. A certificate is needed to sign the binary, follow the [instructions](https://msdn.microsoft.com/en-us/library/windows/apps/br230260(v=vs.110).aspx) to create or update the sign certificate. After that, a pop-up window would appear during the first time you exec the build process asking to install the certificate you've just created, just accept it.

## Build for production

### Android
```sh
yarn run android:release
```

### Electron
```sh
yarn run electron:release
```
If you are running this on Linux or OSX, this will need you have `wine` 1.6 installed in your system because setting the Windows app icon makes usage internally of the [node-rcedit](https://github.com/atom/node-rcedit) package.

### iOS
```sh
yarn run ios:release
```

### Web
```sh
yarn run web:release
```
This will build your production ready bundle

### Windows (UWP)
```sh
yarn run windows:release
```
