import { StyleSheet } from "react-native";
import { colors } from "../../../../contains";
const styles = StyleSheet.create({
  btnAdd: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "dashed",
    borderColor: colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  descTxtBtn: {
    color: '#888'
  }
});
export default styles
