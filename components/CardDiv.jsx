import React from "react";
import { ScrollView, View, Text } from "react-native";
import Cards from "./Cards";
import styles from "../appcss";

const CardDiv = (props) => {
  return (
    <View style={styles.carddiv}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Cards data={props.data} />
      </ScrollView>
    </View>
  );
};

export default CardDiv;
