import React from "react";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import ChatContainer from "../components/ChatContainer";
import { useState } from "react";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext.jsx";

const HomePage = () => {
 
const {selectedUser}=useContext(ChatContext)
  return (
    <div className="w-full h-screen sm:px-[10%] sm:py-[2%] ">
      <div
        className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-2 relative ${
          selectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
