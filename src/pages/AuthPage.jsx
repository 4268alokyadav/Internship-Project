import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../lib/api";
import { useAuth } from "../context/auth";

export default function AuthPage({ mode }) {
  const [searchParams] = useSearchParams();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: searchParams.get("email") || "" },
  });
  const { login, register: createAccount, verifyEmail } = useAuth();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const title = {
    login: "Login to your account",
    register: "Create student account",
    verify: "Verify email OTP",
    forgot: "Reset password",
  }[mode];

  const submit = async (values) => {
    setError("");
    setMessage("");
    try {
      if (mode === "login") {
        const user = await login(values);
        navigate(user.role === "STUDENT" ? "/dashboard" : "/admin");
      }
      if (mode === "register") {
        await createAccount(values);
        setMessage("Account created. Check console/mail for OTP, then verify email.");
        navigate(`/verify-email?email=${encodeURIComponent(values.email)}`);
      }
      if (mode === "verify") {
        const user = await verifyEmail(values);
        navigate(user.role === "STUDENT" ? "/dashboard" : "/admin");
      }
      if (mode === "forgot") {
        if (values.otp && values.password) {
          await api.post("/auth/reset-password", values);
          setMessage("Password reset successful. You can login now.");
        } else {
          await api.post("/auth/forgot-password", { email: values.email });
          setMessage("If the email exists, a reset OTP has been sent.");
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="min-h-[720px] bg-slate-50 px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg bg-white shadow-2xl shadow-slate-200 lg:grid-cols-[420px_1fr]">
        <div className="bg-[#1a1a2e] p-10 text-white">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f5a623]">Secure Portal</p>
          <h1 className="mt-4 text-4xl font-black leading-tight">{title}</h1>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Email OTP verification is mandatory before a student can submit the scholarship application.
          </p>
        </div>
        <form onSubmit={handleSubmit(submit)} className="grid gap-5 p-8">
          {mode === "register" && (
            <>
              <Field label="Full Name" error={errors.name} input={<input {...register("name", { required: true })} />} />
              <Field label="Mobile Number" error={errors.mobile} input={<input {...register("mobile", { required: true, minLength: 10 })} />} />
            </>
          )}
          <Field label="Email" error={errors.email} input={<input type="email" {...register("email", { required: true })} />} />
          {mode !== "verify" && (
            <Field label={mode === "forgot" ? "New Password (only for reset)" : "Password"} error={errors.password} input={<input type="password" {...register("password", { required: mode !== "forgot", minLength: 8 })} />} />
          )}
          {(mode === "verify" || mode === "forgot") && (
            <Field label="OTP" error={errors.otp} input={<input {...register("otp", { minLength: 6, maxLength: 6 })} />} />
          )}
          {message && <div className="rounded-md bg-green-50 p-3 text-sm font-bold text-green-700">{message}</div>}
          {error && <div className="rounded-md bg-red-50 p-3 text-sm font-bold text-red-700">{error}</div>}
          <button className="rounded-md bg-[#f5a623] px-5 py-3 font-black text-[#1a1a2e]">
            {mode === "login" ? "Login" : mode === "register" ? "Register" : mode === "verify" ? "Verify Email" : "Continue"}
          </button>
          <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-600">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/forgot-password">Forgot password</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, input, error }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#1a1a2e]">
      {label}
      <span className="block [&>input]:h-12 [&>input]:w-full [&>input]:rounded-md [&>input]:border [&>input]:border-slate-200 [&>input]:bg-slate-50 [&>input]:px-3 [&>input]:outline-none [&>input:focus]:border-[#f5a623]">
        {input}
      </span>
      {error && <span className="text-xs text-red-600">This field is required or invalid.</span>}
    </label>
  );
}
