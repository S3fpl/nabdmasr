"use client";

import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shapes } from "@/components/ui/Shaps";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Form = ({ closeForm, initialAuthType = "login" }) => {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(closeForm, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Email is invalid.";
    if (!formData.password.trim()) return "Password is required.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setStatus(error);
    } else {
      try {
        const result = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (result?.error) {
          setStatus("Invalid email or password");
        } else {
          setStatus("Login successful!");
          setTimeout(() => {
            router.push('/');
          }, 1000);
        }
      } catch {
        setStatus("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"
        }`}
    >
      <div
        className={`relative w-[95%] max-w-sm p-4 rounded-md shadow-lg backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 transform transition-transform duration-300 ${animate ? "scale-100" : "scale-90"
          }`}
      >
        <div className="absolute -top-5 -right-5 opacity-80 animate-float z-[9999] pointer-events-none">
          <Shapes className="w-10 h-10" />
        </div>
        <div className="absolute -bottom-5 -left-5 opacity-80 animate-float z-[9999]">
          <Shapes className="w-10 h-10" />
        </div>

        <XIcon
          onClick={handleClose}
          className="absolute top-3 right-3 w-5 h-5 cursor-pointer text-white hover:text-red-500 transition duration-200"
        />

        <h2 className="text-xl font-semibold text-center text-red-500 mb-6">
          {initialAuthType === "login" ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 text-sm border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 text-sm border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none"
          />

          <Button
            type="submit"
            className="w-full bg-red-600 text-white text-sm py-2 rounded hover:bg-red-700 transition"
          >
            {initialAuthType === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-white/30" />
          <span className="mx-2 text-xs text-white/70">or</span>
          <div className="flex-grow h-px bg-white/30" />
        </div>

        <Button
          variant="outline"
          className="w-full border-white/30 text-white text-sm py-2 hover:bg-white/10 hover:border-white/50 transition flex items-center justify-center gap-2"
          onClick={() => signIn("google")}
        >
          <img src="/google-icon.svg" alt="Google" className="w-4 h-4" />
          Login with Google
        </Button>

        <p className="mt-6 text-center text-xs text-gray-300">
          {initialAuthType === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              closeForm();
              router.push(initialAuthType === "login" ? '/signup' : '/login');
            }}
            className="text-red-500 font-semibold hover:underline"
          >
            {initialAuthType === "login" ? "Sign up" : "Login"}
          </button>
        </p>

        {status && (
          <p
            className={`text-center mt-3 text-sm ${status.toLowerCase().includes("success")
              ? "text-green-300"
              : "text-red-300"
              }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
