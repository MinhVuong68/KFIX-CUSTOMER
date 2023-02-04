import {useRef} from 'react';
import {Text, TextInput, View} from 'react-native';

import {colors, generalStyle} from '../../contains';
import styleOTP from './styleOTP';
import Button from '../Button';

const OTP = ({action}) => {
  const firstOTP = useRef();
  const secondOTP = useRef();
  const thirdOTP = useRef();
  const fourOTP = useRef();
  const fiveOTP = useRef();

  return (
    <View style={[generalStyle.wrapper, generalStyle.containCenter]}>
      <Text>Vui lòng nhập mã xác thực đã gửi đến số điện thọa của bạn</Text>
      <View style={styleOTP.otps}>
        <TextInput
          ref={firstOTP}
          autoFocus
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          onChangeText={text => {text && secondOTP.current.focus()}}
        />
        <TextInput
          ref={secondOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          onChangeText={text => {text && thirdOTP.current.focus()}}
        />
        <TextInput
          ref={thirdOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          onChangeText={text => {text && fourOTP.current.focus()}}
        />
        <TextInput
          ref={fourOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          onChangeText={text => {text && fiveOTP.current.focus()}}
        />
        <TextInput
          ref={fiveOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
        />
      </View>
      <Button
        title="Xác thực"
        onPress={action}
      />
    </View>
  );
};

export default OTP;
