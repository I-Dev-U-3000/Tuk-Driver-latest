import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from "react-native";

export default Pagintor = ({ data, scrollx }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollx.interpolate({
          inputRange,
          outputRange : [5,10,5],
          extrapolate : 'clamp',
        });

        const opacity = scrollx.interpolate({
          inputRange,
          outputRange :[0.3,1,0.3],
          extrapolate : 'clamp',
        })

        return <Animated.View 
        style={[styles.dot, 
        { 
          width: dotWidth,
          opacity, 
        }]} 
        key={i.toString()} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 5,
    borderRadius: 5,
    backgroundColor: "#000000",
    marginHorizontal: 8,
  },
});
