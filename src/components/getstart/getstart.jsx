import logo from "../../assets/ChatGPT_logo.svg.png";
import { Link } from "react-router-dom";
function GetStart() {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="w-[900px] h-screen mx-auto my-[-30px]">
          <div className="">
            <h1 className="font-bold text-3xl mb-10 pt-[150px]">Get Started</h1>
            <div className="gap-10 flex items-center justify-center">
              <Link
                to="register"
                className="py-4 px-20 bg-[#3C46FF] text-2xl font-medium text-white rounded-2xl mb-[250px]  hover:scale-95 ease-in duration-500"
              >
                Login
              </Link>
            </div>
            <div className="w-[100px] flex items-center mx-auto gap-5 hover:cursor-pointer">
              <img src={logo} alt="logo" width={25} height={25} />
              <p className="font-bold text-xl text-[#CDCDCD]">OpenAI</p>
            </div>
            <div className="flex items-center justify-center gap-5 pt-10 text-[#CDCDCD]">
              <p className="border-e-2 pe-5">
                <a
                  href="https://openai.com/policies/terms-of-use"
                  target="_blink"
                  className="font-bold text-xl"
                >
                  Terms of use
                </a>
              </p>
              <p className="">
                <a
                  href="https://openai.com/policies/privacy-policy"
                  target="_blink"
                  className="font-bold text-xl"
                >
                  Privacy policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GetStart;
