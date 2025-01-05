# React Native Expo Customize Gradle Properties

This repository demonstrates how to customize Gradle properties in an Expo project using config plugins. It shows how to enable AndroidX and Jetifier in your Expo project by modifying the Gradle properties.

## Features

- Custom Expo config plugin to modify Android Gradle configuration
- Enable AndroidX support
- Enable Jetifier

## How It Works

The repository contains a custom Expo config plugin:

`withGradleProperties.js`: Modifies the Gradle properties to enable AndroidX and Jetifier support in your Expo project.

This plugin is integrated into the project through the `app.json` configuration.

## Installation

```bash
# Clone the repository
git clone https://github.com/hknakn/react-native-expo-customize-gradle-properties.git

# Install dependencies
cd react-native-expo-customize-gradle-properties
npm install
```

## Usage

The plugin is already configured in the project. To use this in your own project:

1. Create an `expo-plugins` directory in your project
2. Copy the `withGradleProperties.js` file from this repository
3. Update your `app.json` to include the plugin:

```json
{
  "expo": {
    "plugins": [
      "./expo-plugins/withGradleProperties"
    ]
  }
}
```

## Development

```bash
# Start the development server
npx expo start
```

## License

MIT

## Contributing

Feel free to submit issues and pull requests.
