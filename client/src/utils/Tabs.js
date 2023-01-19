import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const Tabs = (props) => {
  const { changeCurrentTab } = props;
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center gap-20 text-gray-500 dark:text-gray-400">
        <li
          className="mr-2"
          onClick={() => changeCurrentTab("Added Properties")}
        >
          <div className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg focus:text-red-600 focus:border-red-600 
           hover:text-white  hover:bg-violet-800 dark:hover:text-gray-300 group">
            <AiOutlineHome className="w-5 h-5 mr-2 text-white " />
            Add Property
          </div>
        </li>

        <li className="mr-2" onClick={() => changeCurrentTab("messages")}>
          <div className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg  hover:text-white  hover:bg-violet-800">
            <AiOutlineHome className="w-5 h-5 mr-2 text-white" />
            Messages
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
