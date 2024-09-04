import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Steps } from "../components/Steps";
import { toast } from "sonner";

export const Landing = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Hero />
      <Steps />

      <button
        onClick={() => toast.success("My first toast")}
        className="bg-red-300 rounded-sm p-2"
      >
        Give me a toast
      </button>
    </div>
  );
};
