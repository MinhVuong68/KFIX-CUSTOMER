import {Text, View, Dimensions} from 'react-native';

import {generalStyle} from '../../contains';
import stylesHome from './stylesHome';
import {problems} from '../../assets/datas';
import {IntroduceHome, Option} from '../../components';

const windowWidth = Dimensions.get('window').width;

const Home = () => {
  return (
    <View style={[generalStyle.wrapper]}>
      <Text style={stylesHome.hello}>Chào Nguyễn Minh Vương!</Text>
      <IntroduceHome 
        height={200}    
      />
      <View style={stylesHome.wOpt}>
        <Text style={stylesHome.titleProblem}>Vấn đề của bạn</Text>
        <View style={stylesHome.opts}>
          {problems.map(problem => {
            return <Option key={problem.id} problem={problem.name} img={problem.image}/>;
          })}
        </View>
      </View>
    </View>
  );
};

export default Home;
