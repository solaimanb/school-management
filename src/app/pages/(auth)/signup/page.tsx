import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/providers/auth/AuthProvider";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const {
    register: signup,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();
  const authContext = useContext(AuthContext);
  const router = useRouter();

  if (!authContext) {
    return null;
  }

  const { register } = authContext;

  const onSubmit = async ({ email, password, confirmPassword }: FormData) => {
    if (password !== confirmPassword) {
      setError("confirmPassword", { message: "Passwords do not match" });
      return;
    }

    try {
      await register(email, password);
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError("email", { message: error.message });
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...signup("email", { required: true })} />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...signup("password", { required: true })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Confirm Password"
          {...signup("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
