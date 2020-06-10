import React from "react";
import {View, Text,  StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373b44", "#4286f4"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00c6fb", "#005bea"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7de2fc", "#b9b6e5"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#fef253", "#ff7300"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#d7d2cc", "#304352"],
    title: "Clouds",
    subtitle: "Just don't go outside",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4ca0b0", "#d39d38"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
};

export default function Weather({temp, condition}) {
    return (
      <LinearGradient
        // condition이 안먹음
        colors={weatherOptions["Clouds"].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            size={96}
            // condition이 안먹음
            name={weatherOptions["Clouds"].iconName}
            color="white"
          />
          <Text style={styles.temp}>{temp}˚</Text>
        </View>
        {/* condition이 안먹음 */}
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{weatherOptions["Clouds"].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions["Clouds"].subtitle}
          </Text>
        </View>
      </LinearGradient>
    );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 44,
    color: "white",
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  textContainer: {
      paddingHorizontal: 20,
      alignItems: "flex-start"
  }
});