import {useNavigation } from '@react-navigation/native'
import {View, Pressable, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ReadMore from 'react-native-read-more-text'

import {HeaderScreen} from '../../../components';
import {colors, generalStyle} from '../../../contains';
import stylesNewOrder from './stylesNewOrder';

const NewOrder = ({route}) => {
  
  const navigation = useNavigation()
  return (
    <View style={generalStyle.wrapper}>
      <HeaderScreen goBack name="Đặt đơn" />
      <View>
        <Text style={generalStyle.label}>Địa chỉ của bạn:</Text>
        <Pressable style={generalStyle.input}
          onPress={()=>{
            navigation.navigate('SearchLocation')
          }}
        >
          <View style={stylesNewOrder.wConstainLocatin}>
            <Entypo name="location-pin" size={35} color={colors.primaryColor} />
            <View style={{ width: '85%' }}>
            <ReadMore numberOfLines={1} renderTruncatedFooter={() => null}>
              <Text style={stylesNewOrder.txtLocation}>Chưa có</Text>
            </ReadMore>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default NewOrder;
