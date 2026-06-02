"use client";

import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Mountain,
  CheckCircle2,
} from "lucide-react";

export default function SignUp() {
  const { setAuthUser } = useUserContext();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/user/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setAuthUser({
          userId: data.user.userId,
          name: data.user.name,
          email: data.user.email,
        });
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        setName("");
        router.push("/cabins");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full pt-5 pb-2 pl-10 pr-4 rounded-xl border bg-white text-[#0f3d3e]
    text-sm outline-none transition-all duration-200 ${
      focusedField === field
        ? "border-[#0f3d3e] shadow-[0_0_0_3px_rgba(15,61,62,0.06)]"
        : "border-[#0f3d3e]/15 hover:border-[#0f3d3e]/30"
    }`;

  const labelClass = (field: string, value: string) =>
    `absolute left-10 transition-all duration-200 pointer-events-none ${
      focusedField === field || value
        ? "top-1.5 text-[10px] text-[#a8d5d0] font-medium tracking-wide"
        : "top-1/2 -translate-y-1/2 text-sm text-gray-400"
    }`;

  const perks = [
    "Access 120+ destinations worldwide",
    "Save cabins to your wishlist",
    "Track and manage your bookings",
    "Get local guide recommendations",
    "Collect Rewards & Points",
    "Get Our Special Member Offers",
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* ── Left panel ── */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-[#0f3d3e] flex-col
        justify-between p-12 relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.05]">
            <svg viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#e8f0ed"
                strokeWidth="0.5"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="#e8f0ed"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.06]">
            <svg viewBox="0 0 100 100">
              <path d="M50 5 L10 90 L90 90 Z" fill="#e8f0ed" />
              <path d="M50 25 L25 90 L75 90 Z" fill="#e8f0ed" opacity=".4" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-10 w-32 h-32 opacity-[0.04]">
            <svg viewBox="0 0 100 100">
              <polygon
                points="50,5 95,75 5,75"
                stroke="#e8f0ed"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Logo */}
        <div className="relative flex items-center gap-2">
          <div
            className="w-8 h-8 bg-[#a8d5d0] rounded-lg flex items-center
            justify-center"
          >
            <Mountain size={16} className="text-[#0f3d3e]" />
          </div>
          <span className="text-[#e8f0ed] font-medium text-lg">Cabinly</span>
        </div>

        {/* Center content */}
        <div className="relative">
          <p
            className="text-[10px] font-medium tracking-[0.3em] uppercase
            text-[#a8d5d0] mb-4"
          >
            Join the community
          </p>
          <h2 className="font-serif text-4xl text-[#e8f0ed] leading-[1.2] mb-6">
            Your next adventure starts here
          </h2>
          <p
            className="text-[#e8f0ed]/50 font-light text-sm leading-relaxed
            max-w-sm mb-8"
          >
            Create your free account and unlock access to handpicked cabins,
            local guides, and unforgettable experiences across the globe.
          </p>

          {/* Perks list */}
          <div className="space-y-3">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-3">
                <CheckCircle2
                  size={15}
                  className="text-[#a8d5d0] flex-shrink-0"
                />
                <span className="text-sm text-[#e8f0ed]/70 font-light">
                  {perk}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="relative border-t border-[#e8f0ed]/10 pt-6">
          <p className="text-xs text-[#e8f0ed]/30 font-light">
            Already trusted by 2,400+ travellers across 6 continents. No credit
            card required to sign up.
          </p>
        </div>
      </div>

      {/* ── Right panel — form ── */}
      <div
        className="flex-1 flex flex-col items-center justify-center
        px-6 py-12 overflow-y-auto"
      >
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2 mb-10">
          <div
            className="w-8 h-8 bg-[#0f3d3e] rounded-lg flex items-center
            justify-center"
          >
            <Mountain size={16} className="text-[#a8d5d0]" />
          </div>
          <span className="text-[#0f3d3e] font-medium text-lg">Cabinly</span>
        </div>

        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="mb-8">
            <p
              className="text-[10px] font-medium tracking-[0.25em] uppercase
              text-[#a8d5d0] mb-2"
            >
              Get started
            </p>
            <h1 className="font-serif text-3xl text-[#0f3d3e]">
              Create your account
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className={labelClass("name", name)}>
                Full name
              </label>
              <div
                className="absolute left-3 top-1/2 -translate-y-1/2
                text-[#a8d5d0]"
              >
                <User size={16} />
              </div>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClass("name")}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className={labelClass("email", email)}>
                Email address
              </label>
              <div
                className="absolute left-3 top-1/2 -translate-y-1/2
                text-[#a8d5d0]"
              >
                <Mail size={16} />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClass("email")}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className={labelClass("password", password)}
              >
                Password
              </label>
              <div
                className="absolute left-3 top-1/2 -translate-y-1/2
                text-[#a8d5d0]"
              >
                <Lock size={16} />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClass("password")}
              />
            </div>

            {/* Confirm password */}
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className={labelClass("confirmPassword", confirmPassword)}
              >
                Confirm password
              </label>
              <div
                className="absolute left-3 top-1/2 -translate-y-1/2
                text-[#a8d5d0]"
              >
                <Lock size={16} />
              </div>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setFocusedField("confirmPassword")}
                onBlur={() => setFocusedField(null)}
                required
                className={`${inputClass("confirmPassword")} ${
                  confirmPassword && confirmPassword !== password
                    ? "!border-red-300 !shadow-[0_0_0_3px_rgba(239,68,68,0.06)]"
                    : confirmPassword && confirmPassword === password
                      ? "!border-[#a8d5d0] !shadow-[0_0_0_3px_rgba(168,213,208,0.1)]"
                      : ""
                }`}
              />
              {/* Password match indicator */}
              {confirmPassword && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {confirmPassword === password ? (
                    <CheckCircle2 size={15} className="text-[#a8d5d0]" />
                  ) : (
                    <div
                      className="w-3.5 h-3.5 rounded-full border-2
                      border-red-300"
                    />
                  )}
                </div>
              )}
            </div>

            {/* Password strength hint */}
            {password && (
              <p className="text-[11px] text-gray-400 font-light -mt-2 px-1">
                Use at least 8 characters with a mix of letters and numbers
              </p>
            )}

            {/* Error */}
            {error && (
              <div
                className="flex items-center gap-2 bg-red-50 border
                border-red-100 rounded-xl px-4 py-3"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full bg-red-400
                  flex-shrink-0"
                />
                <p className="text-xs text-red-600">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#0f3d3e] text-[#e8f0ed]
                text-sm font-medium flex items-center justify-center gap-2
                hover:bg-[#1a5c5e] disabled:opacity-60 disabled:cursor-not-allowed
                transition-all duration-200 group mt-2"
            >
              {loading ? (
                <>
                  <div
                    className="w-4 h-4 rounded-full border-2
                    border-[#e8f0ed]/30 border-t-[#e8f0ed] animate-spin"
                  />
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-0.5
                    transition-transform"
                  />
                </>
              )}
            </button>

            {/* Terms note */}
            <p
              className="text-[11px] text-center text-gray-400 font-light
              leading-relaxed"
            >
              By creating an account you agree to our{" "}
              <Link
                href="/terms"
                className="text-[#0f3d3e] hover:text-[#a8d5d0] transition-colors"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-[#0f3d3e] hover:text-[#a8d5d0] transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#0f3d3e]/08" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-[#0f3d3e]/08" />
          </div>

          {/* Log in link */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/log-in"
              className="text-[#0f3d3e] font-medium hover:text-[#a8d5d0]
              transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
