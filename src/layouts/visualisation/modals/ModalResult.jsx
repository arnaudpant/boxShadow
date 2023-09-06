import { useEffect } from "react";
import getBoxShadowValues from "../../../features/utils/getBoxShadowValues";
import { useSelector } from "react-redux";

const ModalResult = ({ closeModal }) => {
    const shadowsValues = useSelector((state) => state.shadows);

    useEffect(() => {
        document.body.style.overflowY = "hidden";

        return () => (document.body.style.overflowY = "auto");
    }, []);

    let runningAnimation = false;

    function handleCopy(e) {
        if (!runningAnimation) {
            runningAnimation = true;
            e.target.textContent = "Copied !";

            setTimeout(() => {
                e.target.textContent = "Copy";
                runningAnimation = false;
            }, 1200);
        }
        navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValues(shadowsValues)}`);
    }

    return (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75">
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-[400px] rounded p-7 bg-[#F6F6F6] mb-[10vh]"
            >
                <div className="flex items-end mb-5">
                    <p className="font-semibold mr-5">Your code 👇🏻</p>
                    <button
                        onClick={handleCopy}
                        className="ml-auto mr-2 py-1 px-3 text-sm text-[#F6F6F6] bg-[#0078AA] hover:bg-[#3AB4F2] rounded"
                    >
                        Copy
                    </button>
                    <button
                        className="py-1 px-3 text-sm text-[#F6F6F6] bg-red-600 hover:bg-red-400 rounded"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>

                <p className="rounded bg-gray-200 p-5">
                    <span className="text-sm">
                        box-shadow: {getBoxShadowValues(shadowsValues)}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ModalResult;
