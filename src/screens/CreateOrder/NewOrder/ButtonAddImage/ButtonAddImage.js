import { Pressable, Text, View } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { colors, generalStyle } from "../../../../contains"
import styles from "./styles"

const ButtonAddImage = () => {
    return(
        <Pressable style={styles.btnAdd}>
            <Entypo
                name="camera"
                size={24}
                color={colors.primaryColor}
            />
            <Text style={styles.descTxtBtn}>Thêm ảnh</Text>
        </Pressable>
    )
}

export default ButtonAddImage