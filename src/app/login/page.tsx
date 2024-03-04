"use client";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "@/components/shared/Navbar";
import { useAppDispatch } from "@/lib/hooks/reduxHooks";
import { login } from "@/lib/features/userReducer";
import MaxWidthWraper from "@/components/shared/MaxWidthWrapper";
import { useRouter } from "next/navigation";
import { PersonIcon } from "@radix-ui/react-icons";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [resposeData, setResponseData] = useState({} as any);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(" /api/login", formData);
      // Save user data to redux store
      if (response.status !== 200) throw new Error("Invalid credentials");
      setResponseData(response.data);

      // Handle successful login
      dispatch(login(response.data));
    } catch (e: any) {
      console.error(e);
      setError(e.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <Navbar />
      <MaxWidthWraper>
        <div className="sm:w-1/2 h-96 mx-auto shadow-2xl p-6 flex flex-col justify-around">
          <h1 className="text-2xl text-center font-bold mb-4 ">
            Login <PersonIcon className="inline animate-bounce" />
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div>
            <input
              type="username"
              placeholder="Username..."
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-2 mb-4 border border-primary border-gray-300 rounded`}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button
            className="w-full bg-primary text-white py-2 rounded hover:scale-[.98] transition-all duration-300 ease-in-out"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </MaxWidthWraper>
    </div>
  );
};

export default LoginPage;
