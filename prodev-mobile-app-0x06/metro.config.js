// Import Expo's default Metro config
const { getDefaultConfig } = require("expo/metro-config");

// Get the default config
const config = getDefaultConfig(__dirname);

// Add NativeWind's transformer to handle Tailwind CSS
config.transformer.babelTransformerPath = require.resolve("nativewind/metro");

// Export the modified config
module.exports = config;
