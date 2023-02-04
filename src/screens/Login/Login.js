import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {generalStyle} from '../../contains';
import {Button, FormGroup, InputField} from '../../components';
import stylesLogin from './styleLogin';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={generalStyle.wrapper}>
      <FormGroup>
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
        <Button
          title="Quên mật khẩu?"
          noBackground
          customStyle={{marginTop: 20, fontSize: 19, alignItems: 'flex-end'}}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <Button
          title="ĐĂNG NHẬP"
          onPress={() => navigation.navigate('Main')}
        />
      </FormGroup>
      <View style={stylesLogin.wNewUser}>
        <Text style={{fontSize: 19}}>Người dùng mới?</Text>
        <Button
          title="Đăng ký"
          noBackground
          customStyle={{fontSize: 19, marginLeft: 8}}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default Login;
