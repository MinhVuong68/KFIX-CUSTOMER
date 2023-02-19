import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import {generalStyle} from '../../contains';
import { Button, FormGroup, InputField } from '../../components';
import stylesLogin from '../Login/styleLogin';


const Register = () => {
  

  const navigation = useNavigation();

  const handle = () => {
    navigation.navigate('Main')
  }
  const handleRegister = () => {
    navigation.navigate('Accuracy',{name: 'l',action: handle})
  }
  return (
    <ScrollView style={generalStyle.wrapper}>
      <FormGroup>
        <InputField label="Tên:" error="Tên không hợp lệ!" />
        <InputField
          label="Số điện thoại:"
          keyboardType="numeric"
          error="Số điện thoại không hợp lệ!"
        />
        <InputField
          label="Mật khẩu:"
          secureTextEntry={true}
          error="Mật khẩu gồm ít nhất 8 kí tự gồm chữ thường, chữ hoa, số và kí tự đặc biệt!"
        />
        <InputField
          label="Nhập lại mật khẩu:"
          secureTextEntry={true}
          error="Mật khẩu không trùng khớp!"
        />
        <Button
          title="ĐĂNG KÝ"
          onPress={handleRegister}
        />
        <View
          style={stylesLogin.wNewUser}>
          <Text style={{fontSize: 19}}>Bạn đã có tài khoản?</Text>
          <Button
            title="Đăng nhập"
            noBackground
            customStyle={{fontSize: 19, marginLeft: 8}}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </FormGroup>
    </ScrollView>
  );
};

export default Register;
