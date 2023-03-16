import { useNavigation } from "@react-navigation/native";
import { View, Pressable, Text, LogBox, TextInput, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import ReadMore from "react-native-read-more-text";

import { Button, HeaderScreen } from "../../../components";
import { colors, generalStyle } from "../../../contains";
import stylesNewOrder from "./stylesNewOrder";
import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonAddImage from "./ButtonAddImage/ButtonAddImage";

const NewOrder = ({ route }) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Hỏng chìa khóa", value: "huchia" },
    { label: "Mất chìa khóa", value: "matchia" },
    { label: "Hỏng ổ khóa", value: "hongo" },
  ]);

  useEffect(() => {
    if (route.params) {
      const address = route?.params?.currentLocation?.address;
      if (address != "") setAddress(address);
    }
  }, [route]);
  //const address = route?.params?.currentLocation?.address;
  console.log(route);
  return (
    <View style={generalStyle.wrapper}>
      <HeaderScreen goBack name="Đặt đơn" />
      <View>
        <Text style={generalStyle.label}>Địa chỉ của bạn:</Text>
        <Pressable
          style={generalStyle.input}
          onPress={() => {
            navigation.navigate("SearchLocation");
          }}
        >
          <View style={stylesNewOrder.wConstainLocatin}>
            <Entypo name="location-pin" size={35} color={colors.primaryColor} />
            <View style={{ width: "85%" }}>
              <ReadMore numberOfLines={1} renderTruncatedFooter={() => null}>
                <Text style={stylesNewOrder.txtLocation}>
                  {address ? address : "Chưa có"}
                </Text>
              </ReadMore>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={generalStyle.label}>Loại khóa</Text>
        <Pressable
          style={generalStyle.input}
          onPress={() => {
            navigation.navigate("SearchLocation");
          }}
        >
          <View style={stylesNewOrder.wConstainLocatin}>
            <Entypo name="location-pin" size={35} color={colors.primaryColor} />
            <View style={{ width: "85%" }}>
              <ReadMore numberOfLines={1} renderTruncatedFooter={() => null}>
                <Text style={stylesNewOrder.txtLocation}>
                  {route.params.problem}
                </Text>
              </ReadMore>
            </View>
          </View>
        </Pressable>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={generalStyle.label}>Mô tả vấn đề của bạn:</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          labelStyle={{ fontSize: 18 }}
          textStyle={{ fontSize: 18 }}
          listMode="SCROLLVIEW"
          scrollViewProps={{
            nestedScrollEnabled: true,
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={generalStyle.label}>Ảnh minh họa:</Text>
        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              resizeMode: 'contain'

            }}
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            
          />
          <Image 
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              resizeMode: 'contain'
            }}
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
          />
          <ButtonAddImage />
        </View>
      </View>
      {/* <Pressable style={{
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: "dashed",
        borderColor: colors.mainGreen,
        justifyContent: "center",
        alignItems: "center",
      }} >
      <Text style={{
        width: 30,
        height: 30,
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 1,
        borderRadius: 100,
        borderStyle: "dashed",
        borderColor: colors.mainGreen,
        color: colors.mainGreen,
      }}>+</Text>
      <Text style={{ color: colors.primaryColor }}>Thêm</Text>
    </Pressable> */}

      <Button
        title="Gửi yêu cầu"
        onPress={() => navigation.navigate("HaveEmployee")}
      />
    </View>
  );
};

export default NewOrder;
