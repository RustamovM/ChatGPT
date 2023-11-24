import icons from "../../assets/dark_mode/logodark.svg";
import starr from "../../assets/dark_mode/Star.svg";
import shieldWarninge from "../../assets/dark_mode/ShieldWarning.svg";
import microphon from "../../assets/dark_mode/Microphone.svg";
import img from "../../assets/dark_mode/Image.svg";
import paperplanerighte from "../../assets/dark_mode/Paperplaneright.svg";
import chats from "../../assets/dark_mode/Chattext.svg";
import trashu from "../../assets/dark_mode/Trash.svg";
import chates from "../../assets/dark_mode/Chats.svg";
import sune from "../../assets/dark_mode/Sun.svg";
import users from "../../assets/dark_mode/User.svg";
import arrow from "../../assets/dark_mode/ArrowSquareOut.svg";
import signUp from "../../assets/dark_mode/SignOut.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Darkhome() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-[#1C1C1C] pt-5">
      <div className="container mx-auto">
        <div className="fixed flex item flex-col justify-between w-[282px] h-screen top-0 start-0 border-e-2 overflow-y-hidden pt-5">
          <div className="m-5 flex items-center flex-col gap-1">
            <div className="w-[242px] flex items-center justify-center gap-2 bg-[#C6C7F8] px-4 py-2 rounded-xl text-[#1C1C1C] mx-auto">
              <p className=" text-lg">+ New chat</p>
            </div>
            <div className="flex items-start flex-col mx-auto">
              <div className="flex items-center p-3 gap-2 rounded-lg">
                <img src={chates} width={24} height={24} alt="" />
                <p className="text-white">AI Chat Tool Ethics</p>
              </div>
              <div className="flex items-center p-3 gap-2 rounded-lg">
                <img src={chates} width={24} height={24} alt="" />
                <p className="text-white">Al Tool Impact Writing</p>
              </div>
              <div className="flex items-center p-3 gap-2 rounded-lg">
                <img src={chates} width={24} height={24} alt="" />
                <p className="text-white">New chat</p>
              </div>
            </div>
          </div>
          <div className="p-5 gap-1 border-t-2">
            <div className="mx-auto">
              <div className="flex items-center justify-start p-3 gap-2 rounded-lg">
                <img src={trashu} alt="" />
                <p className="text-white">Clear conversations</p>
              </div>
              <Link to="/home">
                <div className="flex items-center justify-start p-3 gap-2 rounded-lg">
                  <img src={sune} alt="" />
                  <p className="text-white">Light mode</p>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-start p-3 gap-2 rounded-lg"
              >
                <img src={users} alt="" />
                <p className="text-white">My account</p>
              </button>
              <a
                href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                className=""
                target="_blank"
              >
                <div className="flex items-center justify-start p-3 gap-2 rounded-lg">
                  <img src={arrow} alt="" />
                  <p className="text-white">Updates & FAQ</p>
                </div>
              </a>
              <Link to="/">
                <button
                  onClick={() => {
                    localStorage.clear([]);
                  }}
                  className="flex items-center justify-start p-3 gap-2 rounded-lg"
                >
                  <img src={signUp} alt="" />
                  <p className="text-white">Log out</p>
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="ms-[300px]">
          <img
            src={icons}
            width={286}
            height={64}
            alt="icon"
            className="mb-[80px] mx-auto"
          />{" "}
          <div
            className={`modal w-[300px] h-[100px] text-white absolute top-2  end-2 rounded-2xl  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className={`relative ${isOpen ? "block" : "hidden"}`}>
              <button
                className=" flex items-center absolute end-1 top-1  bg-slate-500 text-white px-2  rounded-full "
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <p className=""></p>
              <p className=""></p>
            </div>
          </div>
          <div className="w-[920px] flex items-center gap-10 mx-auto mb-[212px]">
            <div className="w-[280px] gap-4 flex flex-col items-center">
              <div className=" flex items-center flex-col">
                <img src={chats} alt="" />
                <h4 className="text-white">Examples</h4>
              </div>
              <p className="px-2 py-1 bg-[#1C1C1C] text-sm text-white text-left ">
                "Explain quantum computing insimple terms"
              </p>
              <p className="px-2 py-1 bg-[#1C1C1C] text-white text-sm text-left">
                "Got any creative ideas for a 10year old's birthday?"
              </p>
              <p className="px-2 py-1 bg-[#1C1C1C] text-white text-sm text-left">
                "How do I make an HTTP requestin Javascript?"
              </p>
            </div>
            <div className="w-[280px] gap-4 flex flex-col items-center">
              <div className=" flex items-center flex-col">
                <img src={starr} alt="" />
                <h4 className="text-white">Capabilities</h4>
              </div>
              <p className="px-2 py-1 bg-[#1C1C1C] text-sm text-white text-left">
                Remembers what user saidearlier in the conversation.
              </p>
              <p className="px-2 py-1 bg-[#1C1C1C] text-sm text-white text-left">
                Allows user to provide follow-up corrections.
              </p>
              <p className="px-2 py-1 bg-[#1C1C1C] text-sm text-white text-left">
                Trained to decline lorem inappropriate requests.
              </p>
            </div>
            <div className="w-[280px] gap-4 flex flex-col items-center">
              <div className=" flex items-center flex-col">
                <img src={shieldWarninge} alt="" />
                <h4 className="text-white">Limitations</h4>
              </div>
              <p className="px-2 py-1 bg-[#1C1C1C] text-sm text-white text-left">
                May occasionally generate incorrect information.
              </p>
              <p className="px-2 py-1 bg-[#1C1C1C] text-sm text-white text-left">
                May occasionally produce harmful instructions or biased content.
              </p>
              <p className="px-2 py-1 bg-[#1C1C1C] text-sm text-white text-left">
                Limited knowledge of world andevents after 2021.
              </p>
            </div>
          </div>
          <form className="w-[720px] flex items-center py-4 px-5 rounded-2xl bg-[#1C1C1C] gap-3 mx-auto">
            <img src={microphon} alt="" className="hover:cursor-pointer" />
            <img src={img} alt="" className="hover:cursor-pointer" />
            <input
              type="text"
              placeholder="Type message"
              className="inputdark w-[612px] rounded-lg outline-0 bg-[#1C1C1C] text-white"
            />
            <img
              src={paperplanerighte}
              alt=""
              className="hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
export default Darkhome;
