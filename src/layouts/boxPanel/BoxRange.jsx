import { useDispatch } from "react-redux";
import { updateBoxValues } from "../../features/boxProperties";

const BoxRange = ({ inputData }) => {
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
        <div className="my-8">
            <div className="flex justify-between">
                <p>{inputData.name}</p>
                <div className="flex items-baseline mb-2">
                    <input
                        type="number"
                        value={inputData.value}
                        onChange={(e) => handleInputs(e)}
                        className="w-14 h-8 mr-2 border border-gray200 text-center"
                    />
                    <p>px</p>
                </div>
            </div>
            <div className="relative z-0 w-full flex items-center">
                <input
                    type="range"
                    value={inputData.value}
                    onChange={handleInputs}
                    min={inputData.minMax[0]}
                    max={inputData.minMax[1]}
                    className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="absolute -z-10 w-0.5 h-3 bg-gray-300 left-1/2 translate-x-1/2 rounded"></div>
            </div>
        </div>
    );
};

export default BoxRange;
