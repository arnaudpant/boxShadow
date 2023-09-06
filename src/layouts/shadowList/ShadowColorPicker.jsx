import { useDispatch } from "react-redux";
import { updateShadowValues } from "../../features/shadows";


const ShadowColorPicker = ({ inputData, shadowID}) => {
    const dispatch = useDispatch();
    
        function handleInputs(e) {
            dispatch(
                updateShadowValues({
                    inputNumber: inputData.inputNumber,
                    value: e.target.value,
                    shadowID
                })
            );
        }
    return (
        <div className="mt-3">
        <p>{inputData.name}</p>
        <div className="flex mt-2">
            <input
                type="text"
                value={inputData.value}
                onChange={handleInputs}
                className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-300"
            />
            <input
                className="cursor-pointer h-[40px ]"
                type="color"
                value={inputData.value}
                onChange={handleInputs}
            />
        </div>
    </div>
    );
};

export default ShadowColorPicker;