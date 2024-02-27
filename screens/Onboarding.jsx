import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
  ScrollView
} from "react-native";
import { useState, useRef,useContext } from "react";
import themeContext from "./theme/themeContext";
import theme from "./theme/theme";
import tw from 'twrnc';

import slides from "./slides";
import OnboardingItem from "./OnboardingItem";
//import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
//import { ViewPropTypes } from "deprecated-react-native-prop-types";

export default Onboarding = () => {

  const theme=useContext(themeContext)

  const [darkMode,setDarkMode]=useState(false)

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={[{flex : 3}]}>
      <Text style={[tw`text-lg mt-1 mb-3 text-center`,{color:theme.color}]}>ပင်မစာမျက်နှာကိုဘယ်လိုအသုံးပြုမလဲ</Text>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
      </View>

      <View style={[{flex : 3}]}>
      <Text style={[tw`text-lg mt-5 mb-3 text-center`,{color:theme.color}]}>ရုံးကိုဘယ်လိုဆက်သွယ်မလဲ</Text>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
      </View>

        </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
