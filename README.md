# To build a React native app for users to install via link instead of downloading from the store

1. Create an Expo account at https://expo.dev/signup

2. Add your app as a project to Expo dashboard
<!-- you'd be prompted to install eas cli with your project id -->

3. Install the latest EAS CLI
- npm install --global eas-cli && \
eas init --id c1c619bf-a05f-4780-bc78-3bec80bdea7b

4. Configure the project
- eas build:configure <!-- this generates an eas.json file -->

5. Run a build .... from this point, it differs depending on if you are building for app store, Android Emulator/device, iOS Simulator
<!-- For Android Emulator/device: To generate an .apk, modify the eas.json by adding one of the following properties in a build profile: -->
- developmentClient to true (default)
- android.buildType to apk
- android.gradleCommand to :app:assembleRelease, :app:assembleDebug or any other gradle command that produces .apk
<!-- here's how the eas.json should now look like -->
<!-- {
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
} -->
<!-- OR -->
<!-- For iOS Simulator -->
<!-- here's how the eas.json should now look like -->
<!-- {
  "build": {
    "preview": {
      "ios": {
        "simulator": true
      }
    },
    "production": {}
  }
} -->

6. Run your build
- eas build -p android --profile preview <!-- For Android Emulator/device -->
<!-- you'd be prompted to install or open the android emulator -->
<!-- OR -->
- eas build -p ios --profile preview <!-- For iOS Simulator -->
<!-- you'd be prompted to install or open the ios simulator -->
<!-- you can name the profile whatever you like .e.g. preview, local, emulator... -->

7. Once your build is completed, copy the URL to the APK from the build details page or the link provided when eas build is done. Send the URL to users to download, install the APK and run it.