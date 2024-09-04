import { Link } from "react-router-dom";
import { TextInput } from "../components/TextInput";

export const Login = () => {
  return (
    <div className="flex items-center justify-center bg-[#040915] h-screen">
      <div className="items-center justify-center flex w-full mt-20 bg-yellow-400">
        <div className="p-2 rounded-lg h-full w-96 bg-green-200">
          <div className="p-2">
            <p className="text-xl text-white font-semibold">
              Login to your Rebike Account
            </p>
          </div>
          <TextInput
            type="email"
            label="Email"
            placeholder="shyamlalkp007@gmail.com"
          />
          <TextInput type="password" label="Password" placeholder="********" />
        </div>
      </div>
    </div>
  );
};
