// import React from "react";

// import { Text, View, TouchableOpacity, Image } from "react-native";

// const Cards = (props) => {
//   return props.data.map((item, index) => {
//     return (
//       <View style={props.styles.cards} key={index}>
//         <View style={props.styles.container}>
//           <View style={props.styles.content}>
//             <Image style={props.styles.img} source={item.img} />
//             <View style={props.styles.textContainer}>
//               <Text style={props.styles.title}>{item.mainname}</Text>
//               <Text style={props.styles.description}>price starts from:</Text>
//             </View>
//             <View style={props.styles.priceContainer}>
//               <Text style={props.styles.price}>{item.price} Rs</Text>
//               <Text style={props.styles.priceDescription}></Text>
//             </View>
//           </View>

//             <TouchableOpacity
//               style={props.styles.button}
//               onPress={() => console.log("Button pressed")}
//             >
//               <Text style={props.styles.buttonText}>add to cart</Text>
//             </TouchableOpacity>

//         </View>
//       </View>
//     );
//   });
// };

// export default Cards;

import React from "react";
import styles from "../appcss";
import { addAmount, subAmount } from "../redux/action-creator";

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Cards = (props) => {
  const dispatch = useDispatch();

  return props.data.map((item, index) => {
    const order = useSelector(
      (state) => state.find((data) => data.name === item.name)?.order || 0
    );
    return (
      <View style={styles.cards} key={index}>
        <View>
          <View style={{}}>
            <ImageBackground source={require("../assets/table.jpg")}>
              <View
                style={{
                  backgroundColor: "",
                  borderRadius: 20,
                  width: 140,
                  marginLeft: 20,
                  marginRight: 20,
                  padding: 5,
                }}
              >
                <Image
                  style={styles.cardsimage}
                  source={item.img}
                  resizeMode="contain"
                />
              </View>
            </ImageBackground>

            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                price starts from :
              </Text>
            </View>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <Text
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
              >
                {item.price} Rs
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#008080",
                borderRadius: 10,
                width: 100,
                height: 30,

                alignItems: "center",
                justifyContent: "center",
                margin: 5,
              }}
              onPress={() => {
                dispatch(addAmount(item));
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                add to cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "",
                borderRadius: 10,
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                border: 2,
                borderWidth: 1,
                borderColor: "white",
                margin: 5,
              }}
              onPress={() => {
                dispatch(subAmount(item));
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              {order}
            </Text>
          </View>
        </View>
      </View>
    );
  });
};

export default Cards;
