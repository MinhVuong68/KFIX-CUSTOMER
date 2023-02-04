import {StyleSheet} from 'react-native';

const generalStyle = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  flex1: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  containCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#000',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default generalStyle;
