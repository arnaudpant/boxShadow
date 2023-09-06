import { useEffect, useState } from "react";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowCheckbox from "./ShadowCheckbox";
import { useDispatch } from "react-redux";
import { removeShadow } from "../../features/shadows";

const Shadow = ({ shadowNumber, shadow }) => {

    const dispatch = useDispatch()
    const [toggleShadow, setToggleShadow] = useState(false);

    useEffect( () => {
        if(shadowNumber === 1) {
            setToggleShadow(true)
        }
    }, [])

    const shadowInputs = shadow.inputs.map((input, index) => {
        if (input.type === "range") {
            return (
                <ShadowRange
                    key={index}
                    inputData={shadow.inputs[index]}
                    shadowID={shadow.id}
                />
            );
        } else if (input.type === "color") {
            return (
                <ShadowColorPicker
                    key={index}
                    inputData={shadow.inputs[index]}
                    shadowID={shadow.id}
                />
            );
        }
    });

    return (
        <li className="bg-gray-50 border-b border-gray-300 ">
            <button className="flex w-full px-6 py-4 justify-between items-center hover:bg-gray-100"
                onClick={() => {
                    setToggleShadow(!toggleShadow);
                }}
            >
                <span className="text-[#0078AA] font-bold">Shadow {shadowNumber}</span>
                <BiSolidChevronRightCircle className="text-[#0078AA] text-xl mr-1" 
                    style={{transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`, transition: "all 0.4s"}} />
            </button>
            {toggleShadow && (
                <>
                    <div className="flex items-end pt-4 px-6">
                        <ShadowCheckbox name={"active"} shadowID={shadow.id}  />
                        <ShadowCheckbox name={"inset"} shadowID={shadow.id}  />
                        <button 
                        onClick={()=>dispatch(removeShadow(shadow.id))}
                        className="ml-auto text-sm  bg-red-600 text-[#F6F6F6] hover:bg-red-700 px-3 py-1 rounded">
                            Supprimer
                        </button>
                    </div>
                    <div className="py-4 px-6">{shadowInputs}</div>
                </>
            )}
        </li>
    );
};

export default Shadow;
