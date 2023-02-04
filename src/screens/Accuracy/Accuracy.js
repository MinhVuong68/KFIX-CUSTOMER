import { OTP } from "../../components"

const Accuracy = ({route}) => {
    console.log(route.params.action);
    return (
        <OTP
            action={route.params.action}
        />
    )
}

export default Accuracy