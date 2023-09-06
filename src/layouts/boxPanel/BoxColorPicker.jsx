import { useDispatch } from "react-redux";
import { updateBoxValues } from "../../features/boxProperties";

const BoxColorPicker = ({ inputData }) => {
    const dispatch = useDispatch();

    function handleInputs(e) {
        dispatch(
            updateBoxValues({
                inputNumber: inputData.inputNumber,
                value: e.target.value,
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
                    className="cursor-pointer h-[40px] w-[40px] ml-4"
                    type="color"
                    value={inputData.value}
                    onChange={handleInputs}
                />
            </div>
        </div>
    );
};

export default BoxColorPicker;
