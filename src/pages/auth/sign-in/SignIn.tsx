import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignInMutation } from "@/redux/api/customer-api";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "@/redux/features/token-slice";
import { saveStorage } from "@/utils";
import { saveEmail } from "@/redux/features/otp-slice";
import { RootState } from "@/redux";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters.")
    .required("Password is required."),
});

interface ISignIn {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.token.access_token);
  if (token) {
    return <Navigate replace to={"/auth/profile"} />;
  }
  const [showPassword, setShowPassword] = useState(false);
  const [signIn] = useSignInMutation();
  const [lgError, setlgError] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: ISignIn) => {
    signIn(data)
      .unwrap()
      .then((res) => {
        dispatch(saveToken(res?.data?.access_token));
        saveStorage("access_token", res?.data?.access_token);
        saveEmail({
          email: res?.data?.payload.otp_email,
          verification_key: res?.data?.payload.verification_key,
        });
        setlgError("");
        navigate("/auth/profile");
      })
      .catch((err) => {
        const errorMessage = err?.data?.message;
        if (typeof errorMessage === "string") {
          setlgError(errorMessage);
        } else if (Array.isArray(errorMessage)) {
          setlgError(errorMessage[0]);
        } else {
          setlgError("An unknown error occurred.");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <Link to={"/"} className="absolute top-6 left-6 text-xl">
        <FaArrowLeft />
      </Link>
      <div className="max-w-md w-full bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Sign In
        </h2>

        {lgError && (
          <div className="text-red-500 text-sm mb-4 text-center">{lgError}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className={`w-full px-4 py-2 border ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-gray-50 dark:bg-gray-700 dark:text-white`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className={`w-full px-4 py-2 border ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-gray-50 dark:bg-gray-700 dark:text-white`}
                placeholder="••••••••"
              />
              <span
                onClick={togglePasswordVisibility}
                className="text-xl absolute top-[50%] right-4 cursor-pointer -translate-y-1/2 text-gray-500 dark:text-gray-300"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 dark:border-gray-600 text-yellow-600 focus:ring-yellow-500"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                Remember me
              </span>
            </label>
            <Link
              to={"#"}
              className="text-sm text-yellow-600 dark:text-yellow-700 hover:text-yellow-500"
            >
              Forgot password?
            </Link>
          </div>

          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link
            to={token ? "/auth/profile" : "/auth/sign-up"}
            className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
