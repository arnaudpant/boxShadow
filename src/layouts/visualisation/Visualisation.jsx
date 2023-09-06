import ModalBtn from "./modals/ModalBtn";
import { useSelector } from "react-redux";
import getBoxShadowValues from "../../features/utils/getBoxShadowValues";

const Visualisation = () => {
    const shadowsValues = useSelector((state) => state.shadows);
    const boxValues = useSelector((state) => state.boxProperties);
    console.log(boxValues);
    return (
        <div className="flex flex-col p-5 ml-10 mt-5 lg:ml-28 lg:mt-10">
            <ModalBtn />
            <div
                className="h-[250px] w-[250px] bg-gray-50 rounded-xl"
                style={{
                    boxShadow: `${getBoxShadowValues(shadowsValues).slice(
                        0,
                        -1
                    )}`,
                    borderRadius: `${boxValues[0].value}px`,
                    height: `${boxValues[1].value}px`,
                    width: `${boxValues[2].value}px`,
                    backgroundColor: `${boxValues[3].value}`,
                }}
            ></div>
        </div>
    );
};

export default Visualisation;
