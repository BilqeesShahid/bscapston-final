"use client"
import { useState } from 'react';
import { SiNike } from 'react-icons/si';
import Footer from '@/components/Footer';  // Make sure to adjust the path as per your file structure

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign-In Attempted:', { email, password, keepSignedIn });
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className=" w-[350px] lg:w-[380px] h-auto p-6 rounded-lg">
        <div className="flex justify-center mb-6">
          {/* Nike Logo */}
          <SiNike className="text-6xl text-black" />
        </div>

        <h2 className="text-center text-2xl font-bold text-black mb-4">
          Your Account <br />for Everything <br />Nike
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none
               focus:ring-2 focus:ring-gray-700"
              placeholder="Email address"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 focus:ring-gray-700"></label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
              placeholder="Password"
            />
          </div>

          {/* Keep me signed in Checkbox */}
          <div className="flex items-center text-[12px] space-x-2 gap-2">
            <input
              type="checkbox"
              id="keep-signed-in"
              checked={keepSignedIn}
              onChange={() => setKeepSignedIn(!keepSignedIn)}
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="keep-signed-in" className="text-sm text-gray-500">
              Keep me signed in
            </label>
            <div className="text-center">
              <a
                href="/forgot-password"
                className="text-sm text-gray-500 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Privacy Policy and Terms & Conditions */}
          <div className="text-center text-sm text-gray-600 mt-2">
            <p>
              By logging in, you agree to Nike&#39;s
              <a href="/privacy-policy" className="text-gray-500 hover:underline">
                {' '}
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:underline">
                {' '}
                <br />
                and Terms &#38; Conditions
              </a>
              .
            </p>
          </div>

          {/* Sign-In Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 font-medium hover:bg-gray-800"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600 mt-4">
          <p>
            Not a member?{' '}
            <a
              href="/joinus"
              className="text-black text-[12px] font-normal hover:underline"
            >
              Join Us
            </a>
          </p>
        </div>
      </div>
</div>
      {/* Footer Component */}
      <Footer />
    </>
    
  );
};

export default SignIn;
