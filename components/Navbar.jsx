import React from "react";
import { Text, View } from "react-native";
import styles from "../appcss";

const Navbar = (props) => {
  return (
    <View style={styles.navbartextcontainer}>
      <Text
        style={[styles.navbarbtn, props.params === 0 && styles.active]}
        onPress={() => {
          props.setParams(0);
        }}
      >
        Drinks
      </Text>
      <Text
        style={[styles.navbarbtn, props.params === 1 && styles.active]}
        onPress={() => {
          props.setParams(1);
        }}
      >
        Pizza
      </Text>
      <Text
        style={[styles.navbarbtn, props.params === 2 && styles.active]}
        onPress={() => {
          props.setParams(2);
        }}
      >
        Burger
      </Text>
      <Text
        style={[styles.navbarbtn, props.params === 3 && styles.active]}
        onPress={() => {
          props.setParams(3);
        }}
      >
        Snacks
      </Text>
    </View>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { styles } from "../App";
// import { Text, View } from "react-native";
// import CardDiv from "./CardDiv";

// const Navbar = (props) => {

//   const [selectedTab, setSelectedTab] = useState(0);

//   const handleTabClick = (tabIndex) => {
//     setSelectedTab(tabIndex);
//   };

//   return (
//     <View>
//       <View style={styles.navbar}>
//         <Text
//           style={[styles.navbarops, selectedTab === 0 && styles.selectedTab]}
//           onPress={() => handleTabClick(0)}
//         >
//           Drinks
//         </Text>
//         <Text
//           style={[styles.navbarops, selectedTab === 1 && styles.selectedTab]}
//           onPress={() => handleTabClick(1)}
//         >
//           Pizza
//         </Text>
//         <Text
//           style={[styles.navbarops, selectedTab === 2 && styles.selectedTab]}
//           onPress={() => handleTabClick(2)}
//         >
//           Burger
//         </Text>
//         <Text
//           style={[styles.navbarops, selectedTab === 3 && styles.selectedTab]}
//           onPress={() => handleTabClick(3)}
//         >
//           Snacks
//         </Text>
//       </View>
//       <CardDiv selectedTab={selectedTab} />
//     </View>
//   );
// };

// export default Navbar;
