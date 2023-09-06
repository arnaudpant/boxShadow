import { useState } from "react";
import ShadowList from "./shadowList/ShadowList";
import BoxPanel from "./boxPanel/BoxPanel";

const LeftContainer = () => {
    const [tab, setTab] = useState(0);
    
    const tabList = [
        { name: "Shadow", component: <ShadowList /> },
        { name: "Box", component: <BoxPanel /> },
    ];

    return (
        <div className="relative mt-20 mb-10 w-[600px] h-min-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-12 md:mb-5">
            <div className="absolute flex -translate-y-full -left-[1px]">
                {tabList.map((tab, index) => (
                    <button
                        key={index}
                        className="min-w-[125px] 
                            py-2 px-3 mr-4 
                            font-bold border-t border-x border-gray-300 
                            bg-gray-50 
                            hover:bg-gray-200 text-slate-700 rounded-t focus:outline-none focus:bg-[#0078AA] focus:text-[#F6F6F6]"
                        onClick={() => setTab(index)}
                        aria-valuenow= {index}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className="h-full overflow-auto">{tabList[tab].component}</div>
        </div>
    );
};

export default LeftContainer;
