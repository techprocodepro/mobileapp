import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

export const ProceedCards = (props) => {
  return props.data.map((item, index) => {
    return (
      <View
        key={index}
        style={{
          width: "70%",
          height: 100,
          backgroundColor: "#212122",
          borderRadius: 30,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={require("../assets/table.jpg")}
          style={{
            width: 60,
            height: 60,
            margin: 20,
            borderRadius: 10,
            display: "flex",
          }}
          resizeMode="contain"
        >
          <Image
            source={item.img}
            resizeMode="contain"
            style={{ width: 50, height: 50 }}
          />
        </ImageBackground>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <View>
            <Text style={{ color: "white" }}>
              Quantity{" "}
              <Text style={{ fontWeight: "bold" }}>: {item.order}</Text>
            </Text>
            <Text style={{ color: "white" }}>
              Total{" "}
              <Text style={{ fontWeight: "bold" }}>
                : {item.price * item.order} Rs
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  });
};
