# Softlofy RN Components

A collection of commonly used components on React Native project developed by [Softlofy](https://softlofy.com/).

## **Installation:**

**Step 1:** Run `npm i softlofy-rn-components`

**Step 2** Install packages `npm i --dev react-native-svg-transformer & npm i react-native-svg react-native-reanimated`

**Step 3** Add `react-native-reanimated/plugin` plugin to your `babel.config.js`.

       module.exports = {
        presets: [
          ... // don't add it here :)
        ],
        plugins: [
          ...
          'react-native-reanimated/plugin',
        ],
      };

**Step 4** Change your `metro.config.js`

#### For Expo SDK v41.0.0 or newer

Merge the contents from your project's `metro.config.js` file with this config (create the file if it does not exist already).

`metro.config.js`:

    const { getDefaultConfig } = require("expo/metro-config");

    module.exports = (() => {
      const config = getDefaultConfig(__dirname);

      const { transformer, resolver } = config;

      config.transformer = {
        ...transformer,
        babelTransformerPath: require.resolve("react-native-svg-transformer")
      };
      config.resolver = {
        ...resolver,
        assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...resolver.sourceExts, "svg"]
      };

      return config;
    })();

#### For React Native v0.72.1 or newer:

    const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

    const defaultConfig = getDefaultConfig(__dirname);
    const { assetExts, sourceExts } = defaultConfig.resolver;


    const config = {
      transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer")
      },
      resolver: {
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
      }
    };

    module.exports = mergeConfig(defaultConfig, config);

#### For React Native v0.59 or newer

Merge the contents from your project's `metro.config.js` file with this config (create the file if it does not exist already).

`metro.config.js`:

    const { getDefaultConfig } = require("metro-config");

    module.exports = (async () => {
      const {
        resolver: { sourceExts, assetExts }
      } = await getDefaultConfig();
      return {
        transformer: {
          babelTransformerPath: require.resolve("react-native-svg-transformer")
        },
        resolver: {
          assetExts: assetExts.filter((ext) => ext !== "svg"),
          sourceExts: [...sourceExts, "svg"]
        }
      };
    })();

### Using TypeScript

If you are using TypeScript, you need to add this to your `declarations.d.ts` file (create one if you don't have one already):

    declare module "*.svg" {
      import React from "react";
      import { SvgProps } from "react-native-svg";
      const content: React.FC<SvgProps>;
      export default content;
    }

# Usage

Wrap your app by Wrapper

    import  React  from  'react';
    import  {Wrapper}  from  'softlofy-rn-components';

    const  App  =  ()  =>  {
    return  (
        <Wrapper>
    	    // Your App
        </Wrapper>
    )};



    export  default  App;

# Hooks

### **useColors**

Will give you a color palette
**Note:** Color palette is inspired by [Tailwind CSS's Colors](https://tailwindcss.com/docs/customizing-colors)
You will get the 500 variant's color of tailwind's color palatte.

    const colors = useColors()

will return the following object

    {
        white:  '#ffffff',
        light_gray:  '#d1d5db',
        black:  '#000000',
        slate:  '#64748b',
        gray:  '#6b7280',
        zinc:  '#71717a',
        neutral:  '#737373',
        stone:  '#78716c',
        red:  '#ef4444',
        orange:  '#f97316',
        amber:  '#f59e0b',
        yellow:  '#eab308',
        lime:  '#84cc16',
        green:  '#22c55e',
        emerald:  '#10b981',
        teal:  '#14b8a6',
        cyan:  '#06b6d4',
        sky:  '#0ea5e9',
        blue:  '#3b82f6',
        indigo:  '#6366f1',
        violet:  '#8b5cf6',
        purple:  '#a855f7',
        fuchsia:  '#d946ef',
        pink:  '#ec4899',
        rose:  '#f43f5e',
    }

### **useLoading**

    const  {isLoading,  setIsLoading}  =  useLoading();

is loading will return the loading state, and `setIsLoading(stateYouWannaSet: boolean, colorYouWannaSeeTheSpinner?:string)`

### **useSnackBar**

    const  {showSnackBar}  =  useSnackBar();

    showSnackBar(message:string, variant:'success'  |  'error'  |  'warning'  |  'info')

### **useThemeColor**

    const themeColor = useThemeColor()

will return

       if (deviceTheme==="dark"){
    	    return '#242424'
       } else{
           return '#F1F1F1'
       }

### **useAccentColor**

    const accentColor = useAccentColor()

will return

       if (deviceTheme==="dark"){
    	    return colors.white
       } else{
           return colors.black
       }
       // Where colors is the object returned by useColors hook

# Components

## Button

**Props**
|Name| Type | is required |Default|
|--|--|--|--|
| variant| `'fillRounded'  |  'transparent'  |  'outline'` | true | N/A
| onPress | `((event:  GestureResponderEvent)  =>  void)  |  undefined;` | false| `undefined`
| title | `string` | false | ""|
| disabled | `boolean`| false | `undefined` |
|width | `DimensionValue  |  undefined` | false | `'100%'` |
|flex | `number` | false | `undefined` |
|backgroundColor (for **_fillRounded_** variant only) | `string` | false | undefined |
|textColor | `string` | false | accentColor|
|icon | `React.ReactNode` | false | undefined|
| themeColor (for **_outline_** only) | `string` | false | undefined

## Typography

**Props**
|Name| Type | is required |Default|
|--|--|--|--|
| children| `React.ReactNode` | true | N/A
|textAlign| `'left'  |  'right'  |  'center'  |  'justify'  |  undefined;` | false | `left`
|color | `string` | false | `accentColor`
| fontSize | `number` | false | 16
| fontWeight | `'normal'|  'bold' |  '100' |  '200' |  '300' |  '400' |  '500' |  '600' |  '700' |  '800' |  '900' |  undefined;` | false | `normal`
| flex | `number` | false | 0
| opacity | `number` | false | 1

## InputField

**Props**
|Name| Type ==================== | is required |Default|
|--|--|--|--|
| bgColor| `string` | false | `colors.gray` for dark mode device and `colors.light_gray` for light mode
| textColor | `string` | false | `colors.white` for dark mode and `colors.black` for light mode |
|error|`string` | false | "" |
|placeholder | `string` | false | undefined |
| placeholderTextColor | `string` | false | `colors.light_gray` for darks mode and `colors.gray` for light mode |
| cursorColor | `string` | false | `colors.sky`
| onFocus | `()  =>  void` | false| undefined |
|onChangeText | `(text:  string)  =>  void` | false | undefined|
| value| `string` | false | ""|

## PhoneInput

**Props**
Everything from **InputField** &
|Name| Type | is required |Default|
|--|--|--|--|
| dialCode| `string` | false | undefined
| setDialCode| `(dialCode:  string)  =>  void` | true | N/A

## CustomStatusBar

**Props**
|Name| Type | is required |Default|
|--|--|--|--|
| backgroundColor| `string` | false | themeColor
| barStyle | `StatusBarStyle  |  null  |  undefined` | false | `theme  ===  'dark'  ?  'light-content'  :  'dark-content';`

## FlexContainer

**Props**
|Name| Type | is required |Default|
|--|--|--|--|
| children| `React.ReactNode` | true| N/A
| justifyContent | `'center'|  'flex-start' |  'flex-end' |  'space-between'|  'space-around' |  'space-evenly'` | false | `space-between`
| alignItems | `'center'  |  'flex-start'  |  'flex-end'` | false | `center`
| flex | `number` | false | undefined
| gap | `number` | false | undefined
| padding | `number` | false | undefined
| margin | `number` | false | undefined
| backgroundColor | `string` | false | undefined
| width | `DimensionValue  |  undefined` | false | undefined

## FullWidthContainer

**Props**
|Name| Type | is required |Default|
|--|--|--|--|
| children| `React.ReactNode` | true| N/A
| style | `StyleProp<ViewStyle>;` | false| `{width:  '100%',}`

## InputError

**Props**
|Name| Type | is required |Default|
|--|--|--|--|
| error| `string` | true| N/A

## NonScrollableScreenContainer

**Props**
|Name| Type | is required |Default
|--|--|--|--|
| children| `string` | true| N/A
| paddingHorizontal | `number` | false | 16
| paddingVertical | `number` | false | 16
| backgroundColor | `number` | false | `themeColor`
| statusBarBg | `string` | false | default style of **< CustomStatusBar />**
| barStyle | `StatusBarStyle  |  null  |  undefined;` | false | default style of **< CustomStatusBar />**
| screenTitleProps | Same as **< ScreenTitle />** | false | Default of **< ScreenTitle />**

## ScrollableScreenContainer

**Props**
Everything from **_NonScrollableScreenContainer_** &
|Name| Type | is required |Default
|--|--|--|--|
| refreshing| `boolean` | false| undefined
| onRefresh | `()  =>  void` | false | undefined
|refreshControlColors | `string[]` | false | default

## ScreenTitle

**Props**
|Name| Type | is required |Default
|--|--|--|--|
| showBackButton| `boolean` | false| `false`
| customBackIcon| `React.ReactNode` | false | undefined
| onBackClick | `()  =>  void` | false | undefined
| title | `string` | false | ""
| paddingHorizontal | number | false | undefined
| rightComponent | `React.ReactNode` | false | **_< Spacer />_**

## Spacer

**Props**
|Name| Type | is required |Default
|--|--|--|--|
| height| `number` | false| `undefined`
|width |`DimensionValue` | false | `100%`

## Tag

**Props**
|Name| Type | is required |Default
|--|--|--|--|
| tag| `string` | true| N/A
| backgroundColor | `string` | true | N/A
| color | `string` | false | white
| flex | `number` | false | 0
