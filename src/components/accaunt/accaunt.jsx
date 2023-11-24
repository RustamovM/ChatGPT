import logo from "../../assets/ChatGPT_logo.svg.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./accaunt.css";
import Home from "../pages/home";

function Accaunt() {
  const gmail = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    localStorage.setItem("Email", "Gmail");
    localStorage.setItem("Password", "Code");
  };

  if (localStorage.length == 2) {
    return <Home />;
  } else {
    return (
      <section className="">
        <div className="container mx-auto">
          <Link to="/">
            <img
              src={logo}
              width={30}
              height={30}
              alt=""
              className="flex items-center mx-auto mb-24 mt-10"
            />
          </Link>
          <h1 className="font-bold text-4xl">Welcome back</h1>
          <form
            onSubmit={handleSubmit}
            className="w-[500px] flex items-center flex-col mx-auto gap-5 mt-10"
          >
            <div className="flex items-center gap-5">
              <div className="label-float">
                <input
                  type="email"
                  placeholder="Email address"
                  className="font-semibold text-sm"
                  required
                  ref={gmail}
                />
                <label className="font-bold ">Email</label>
              </div>
              <div className="label-float">
                <input
                  type="password"
                  placeholder="Password"
                  className="font-semibold text-sm relative"
                  required
                  ref={password}
                />
                <label className="font-bold relative">Password</label>
              </div>
            </div>
            <button
              type="submit"
              className="px-10 py-3 bg-[#4DBDEF] rounded-xl text-white text-xl font-medium hover:scale-95 ease-in duration-500 mt-5"
            >
              Continue
            </button>
          </form>
        </div>
      </section>
    );
  }
}
export default Accaunt;
