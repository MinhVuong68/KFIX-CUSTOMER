import { Image, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import generalStyle from "../../../contains/styles";
import { Button } from "../../../components";
import styleProfile from "../Profile/stylesProfile";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
const EditProfile = () => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={generalStyle.wrapper}>
      <Pressable onPress={pickImageAsync  }>
        <Image
          style={styleProfile.avatar}
          source={{
            uri: "https://www.themoviedb.org/t/p/w500/blKKsHlJIL9PmUQZB8f3YmMBW5Y.jpg",
          }}
        />
      </Pressable>

      <View style={generalStyle.mt10}>
        <TextInput
          style={{
            height: 50,
            borderWidth: 1,
            paddingHorizontal: 10,
            fontSize: 20,
            marginBottom: 10,
          }}
          placeholder="Tên của bạn"
        />
        <TextInput
          style={{
            height: 50,
            borderWidth: 1,
            paddingHorizontal: 10,
            fontSize: 20,
            marginBottom: 10,
          }}
          placeholder="Số điện thoại"
          keyboardType="numeric"
        />
      </View>

      <Button title="Thay đổi" />
    </View>
  );
};

export default EditProfile;
