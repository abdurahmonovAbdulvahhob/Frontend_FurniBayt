import {
  useCreateCustomerMutation,
  useCreateOtpMutation,
} from "@/redux/api/customer-api";
import { saveEmail } from "@/redux/features/otp-slice";
import { ICustomer } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup
  .object({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  })
  .required();


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [createCustomer, { isLoading }] = useCreateCustomerMutation();
  const [createOtp, { isLoading: otpLoading }] = useCreateOtpMutation();
  console.log(isLoading);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ICustomer) => {
    createCustomer(data)
      .unwrap()
      .then((res) => {
        toast.success("Welcome", { position: "bottom-right" });
         if (!res.verification_key) {
           throw new Error("Verification key is missing");
         }
        dispatch(
          saveEmail({
            email: data.email,
            verification_key: res.verification_key, // mana shu yerni tekshiring
          })
        );
        createOtp({ email: data.email })
          .unwrap()
          .then(() => {
            navigate("/auth/otp");
          })
          .catch((err) => {
            console.log("Error in createOtp:", err); // Yuborilgan ma'lumot va xatolikni tekshirish
          });
      })
      .catch((err) => {
        console.log(err);

        let msg = err?.data?.message;
        toast.error(Array.isArray(msg) ? msg[0] : msg, {
          position: "bottom-right",
        });
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-1 md:space-y-2"
              action=""
            >
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  {...register("first_name")}
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First name"
                  required
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  {...register("last_name")}
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last name"
                  required
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  {...register("confirm_password")}
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Confirm password"
                  required
                />
                {errors.confirm_password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div>
                <button
                  disabled={isLoading || otpLoading}
                  className="p-2.5 bg-bg-primary w-full text-white rounded-lg disabled:opacity-70"
                >
                  {isLoading || otpLoading ? "Loading..." : "Sign up"}
                </button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
