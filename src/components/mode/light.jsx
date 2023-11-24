import icon from "../../assets/light_mode/main.svg";
import chats from "../../assets/light_mode/chats.svg";
import star from "../../assets/light_mode/star.svg";
import shieldWarning from "../../assets/light_mode/ShieldWarning.svg";
import chat from "../../assets/light_mode/chattext.svg";
import trash from "../../assets/light_mode/Trash.svg";
import sun from "../../assets/light_mode/Sun.svg";
import user from "../../assets/light_mode/User.svg";
import arrows from "../../assets/light_mode/ArrowSquareOut.svg";
import sign from "../../assets/light_mode/SignOut.svg";
import microphone from "../../assets/light_mode/microphone.svg";
import image from "../../assets/light_mode/image.svg";
import paperplaneright from "../../assets/light_mode/paperplaneright.svg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./light.css";

function Light() {
  // const email = JSON.parse(window.localStorage.getItem("Email"));
  // const password = JSON.parse(window.localStorage.getItem("Password"));
  const [isOpen, setIsOpen] = useState(false);
  const qusesion = useRef();
  return (
    <section className="mt-5">
      <div className="container mx-auto">
        <div className="fixed flex item flex-col justify-between w-[282px] h-screen top-0 start-0 border-e-2 overflow-y-hidden pt-5">
          <div className="m-5 flex items-center flex-col gap-1">
            <div className="w-[242px] flex items-center justify-center gap-2 bg-[#1C1C1C] px-4 py-2 rounded-xl text-white mx-auto">
              <p className=" text-lg">+ New chat</p>
            </div>
            <div className="flex items-start flex-col mx-auto">
              <div className="flex items-center p-3 gap-2 rounded-lg">
                <img src={chat} width={24} height={24} alt="" />
                <p className="">AI Chat Tool Ethics</p>
              </div>
              <div className="flex items-center p-3 gap-2 rounded-lg">
                <img src={chat} width={24} height={24} alt="" />
                <p className="">Al Tool Impact Writing</p>
              </div>
              <div className="flex items-center p-3 gap-2 rounded-lg">
                <img src={chat} width={24} height={24} alt="" />
                <p className="">New chat</p>
              </div>
            </div>
          </div>
          <div className="p-5 gap-1 border-t-2 ">
            <div className="mx-auto">
              <div className="flex items-center justify-start p-3 gap-2 rounded-lg">
                <img src={trash} alt="" />
                <p className="">Clear conversations</p>
              </div>
              <Link to="/dark">
                <div className="flex items-center justify-start p-3 gap-2 rounded-lg">
                  <img src={sun} alt="" />
                  <p className="">Dark mode</p>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-start p-3 gap-2 rounded-lg"
              >
                <img src={user} alt="" />
                <p className="">My account</p>
              </button>
              <a
                href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                className=""
                target="_blank"
              >
                <div className="flex items-center justify-start p-3 gap-2 rounded-lg">
                  <img src={arrows} alt="" />
                  <p className="">Updates & FAQ</p>
                </div>
              </a>
              <Link to="/">
                <button
                  onClick={() => {
                    localStorage.clear([]);
                  }}
                  className="flex items-center justify-start p-3 gap-2 rounded-lg"
                >
                  <img src={sign} alt="" />
                  <p className="">Log out</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="ms-[300px] relative">
          <img
            src={icon}
            width={286}
            height={64}
            alt="icon"
            className="mb-[80px] mx-auto"
          />
          <div
            className={`modal w-[300px] h-[100px] text-black absolute top-0  end-0 rounded-2xl  ${
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
                <h4 className="">Examples</h4>
              </div>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                "Explain quantum computing insimple terms"
              </p>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                "Got any creative ideas for a 10year old's birthday?"
              </p>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                "How do I make an HTTP requestin Javascript?"
              </p>
            </div>
            <div className="w-[280px] gap-4 flex flex-col items-center">
              <div className=" flex items-center flex-col">
                <img src={star} alt="" />
                <h4 className="">Capabilities</h4>
              </div>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                Remembers what user saidearlier in the conversation.
              </p>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                Allows user to provide follow-up corrections.
              </p>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                Trained to decline lorem inappropriate requests.
              </p>
            </div>
            <div className="w-[280px] gap-4 flex flex-col items-center">
              <div className=" flex items-center flex-col">
                <img src={shieldWarning} alt="" />
                <h4 className="">Limitations</h4>
              </div>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                May occasionally generate incorrect information.
              </p>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                May occasionally produce harmful instructions or biased content.
              </p>
              <p className="px-2 py-1 bg-[#F7F9FB] text-sm text-[#1C1C1C] text-left">
                Limited knowledge of world andevents after 2021.
              </p>
            </div>
          </div>
          <form className="w-[720px] flex items-center py-4 px-5 rounded-2xl bg-[#F7F9FB] gap-3 mx-auto">
            <img src={microphone} alt="" className="hover:cursor-pointer" />
            <img src={image} alt="" className="hover:cursor-pointer" />
            <input
              type="text"
              placeholder="Type message"
              className="input w-[612px] rounded-lg outline-0"
              ref={qusesion}
            />
            <button type="submit">
              <img
                src={paperplaneright}
                alt=""
                className="hover:cursor-pointer"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Light;
