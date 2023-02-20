import React from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import generalStyle from "../../../contains/styles";
import styleProfile from "./stylesProfile";
const { width } = Dimensions.get("window");

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={generalStyle.wrapper}>
      <View style={{ flexDirection: "row" }}>
        <Image
          //style={styles.tinyLogo}
          style={styleProfile.avatar}
          source={{
            uri: "https://www.themoviedb.org/t/p/w500/blKKsHlJIL9PmUQZB8f3YmMBW5Y.jpg",
          }}
        />
        <View style={styleProfile.viewInfo}>
          <View style={styleProfile.info}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Nguyễn Minh Vương
            </Text>
            <Text style={{ fontSize: 20 }}>0899306681</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <Foundation name="pencil" color="#666" size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={generalStyle.mt10}>
        <TouchableOpacity style={generalStyle.opt}>
          <MaterialIcons name="feedback" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Phản hồi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={generalStyle.opt}>
          <Entypo name="log-out" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;
