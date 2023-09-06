import { useSelector, useDispatch } from "react-redux";
import { addShadow } from "../../features/shadows";
import Shadow from "./Shadow";

const ShadowList = () => {
    const shadows = useSelector((state) => state.shadows);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="flex justify-between p-6 border-b border-gray-300">
                <p className="font-bold text-lg">Customize Shadows</p>
                <button
                    onClick={() => dispatch(addShadow())}
                    className="py-1 px-3 text-sm  rounded bg-[#0078AA] 
                    text-[#F6F6F6] 
                    focus:outline-none
                    focus:ring-2 
                    focus:ring-offset-1 
                    hover:bg-[#3AB4F2] "
                >
                    Add Shadow
                </button>
            </div>
            <ul>
                {shadows.map((shadow, index) => (
                    <Shadow
                        key={shadow.id}
                        shadowNumber={index + 1}
                        shadow={shadow}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ShadowList;
