import * as React from "react";
import { TextProps, GestureResponderEvent, TextStyle } from "react-native";

interface IconPropsBase extends TextProps {
  type: string;
  name: string;
  size?: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: TextStyle;
}

interface AntDesignProps extends IconPropsBase {
  type: "AntDesign";
}
interface MaterialIconsProps extends IconPropsBase {
  type: "MaterialIcons";
}
interface EvilIconsProps extends IconPropsBase {
  type: "EvilIcons";
}
interface EntypoProps extends IconPropsBase {
  type: "Entypo";
}
interface FontAwesomeProps extends IconPropsBase {
  type: "FontAwesome";
}
interface FoundationProps extends IconPropsBase {
  type: "Foundation";
}
interface IoniconsProps extends IconPropsBase {
  type: "Ionicons";
}
interface MaterialCommunityIconsProps extends IconPropsBase {
  type: "MaterialCommunityIcons";
}
interface ZocialProps extends IconPropsBase {
  type: "Zocial";
}
interface OcticonsProps extends IconPropsBase {
  type: "Octicons";
}
interface SimpleLineIconsProps extends IconPropsBase {
  type: "SimpleLineIcons";
}
interface FontistoProps extends IconPropsBase {
  type: "Fontisto";
}
interface FeatherProps extends IconPropsBase {
  type: "Feather";
}

interface FontAwesome5Props extends IconPropsBase {
  type: "FontAwesome5";
  brand?: boolean;
  solid?: boolean;
}

type IconProps =
  | AntDesignProps
  | MaterialIconsProps
  | EvilIconsProps
  | EntypoProps
  | FontAwesomeProps
  | FoundationProps
  | IoniconsProps
  | MaterialCommunityIconsProps
  | ZocialProps
  | OcticonsProps
  | SimpleLineIconsProps
  | FontistoProps
  | FeatherProps
  | FontAwesome5Props;

const Icon = (props: IconProps): JSX.Element => {
  const { name, color, size, onPress, style, ...textProps } = props;

  switch (props.type) {
    case "AntDesign": {
      const { AntDesign } = require("@expo/vector-icons");
      return (
        <AntDesign
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Entypo": {
      const { Entypo } = require("@expo/vector-icons");
      return (
        <Entypo
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Ionicons": {
      const { Ionicons } = require("@expo/vector-icons");
      return (
        <Ionicons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "SimpleLineIcons": {
      const { SimpleLineIcons } = require("@expo/vector-icons")
        .default;
      return (
        <SimpleLineIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "EvilIcons": {
      const { EvilIcons } = require("@expo/vector-icons");
      return (
        <EvilIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "MaterialIcons": {
      const { MaterialIcons } = require("@expo/vector-icons")
        .default;
      return (
        <MaterialIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "FontAwesome": {
      const { FontAwesome } = require("@expo/vector-icons")
        .default;
      return (
        <FontAwesome
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "FontAwesome5": {
      const { FontAwesome5 } = require("@expo/vector-icons")
        .default;
      const { brand, solid } = props;
      return (
        <FontAwesome5
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
          brand={brand}
          solid={solid}
        />
      );
    }
    case "Foundation": {
      const { Foundation } = require("@expo/vector-icons")
        .default;
      return (
        <Foundation
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "MaterialCommunityIcons": {
      const { MaterialCommunityIcons } = require("@expo/vector-icons")
        .default;
      return (
        <MaterialCommunityIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Zocial": {
      const { Zocial } = require("@expo/vector-icons");
      return (
        <Zocial
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Octicons": {
      const { Octicons } = require("@expo/vector-icons");
      return (
        <Octicons
          {...textProps}
          name={name}
          style={style}
          color={color}
          size={size ? size : 18}
          onPress={onPress}
        />
      );
    }
    case "Fontisto": {
      const { Fontisto } = require("@expo/vector-icons");
      return (
        <Fontisto
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Feather": {
      const { Feather } = require("@expo/vector-icons");
      return (
        <Feather
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    default: {
      const { MaterialIcons } = require("@expo/vector-icons")
        .default;
      return (
        <MaterialIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
  }
};

Icon.defaultProps = {
  size: 20,
  style: {},
  onPress: null,
  color: "#757575",
};

export default Icon;
