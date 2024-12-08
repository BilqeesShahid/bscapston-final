"use client"
import Footer from '@/components/Footer';
import { useState } from 'react';
import { SiNike } from 'react-icons/si';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign-Up Attempted:', { email, password, firstName, lastName, dob, nationality, gender, subscribe });
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <div className=" w-[350px] lg:w-[380px] h-auto p-6 rounded-lg ">
        <div className="flex justify-center mb-6">
          {/* Nike Logo */}
          <SiNike className="text-6xl text-black" />
        </div>

        <h2 className="text-center text-2xl font-bold uppercase text-black mb-4">
          Become a Nike Member
        </h2>

        <p className="text-center text-sm text-[#8D8D8D] mb-4 capitalize">
          Create your Nike member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="Email address"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]"></label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Password"
            />
          </div>

          {/* First Name Field */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]"></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="First Name"
            />
          </div>

          {/* Last Name Field */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]"></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Last Name"
            />
          </div>

          {/* Date of Birth Field */}
          <div className="flex flex-col">
            <label htmlFor="dob" className="text-sm lg:text-[14px] font-normal text-[#8D8D8D]"></label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Date of Birth"
            />
          </div>
          <div><p className='text-[11px] text-[#8D8D8D]'>Get a Nike Member Reward every year on your Birthday.</p></div>

          {/* Nationality Field */}
          <div className="flex flex-col">
            <label htmlFor="nationality" className="text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Nationality"
            />
          </div>

          {/* Gender Selection */}
          <div className="flex gap-4">
            <div className="flex flex-col w-[48%]">
              <label htmlFor="male" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]"></label>
              <input
                type="text"
                id="male"
                name="gender"
                value={gender === 'Male' ? 'Male' : ''}
                onChange={() => setGender('Male')}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Male"
              />
            </div>
            <div className="flex flex-col w-[48%]">
              <label htmlFor="female" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]"></label>
              <input
                type="text"
                id="female"
                name="gender"
                value={gender === 'Female' ? 'Female' : ''}
                onChange={() => setGender('Female')}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Female"
              />
            </div>
          </div>


          {/* Checkbox for Newsletter */}
          <div className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              id="subscribe"
              checked={subscribe}
              onChange={() => setSubscribe(!subscribe)}
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="subscribe" className="ml-2 text-[#8D8D8D] text-[11px]">
              Sign up for emails to get updates from Nike on products, offers, and your member benefits.
            </label>
          </div>

          {/* Privacy Policy & Terms of Use */}
          <div className="text-center text-sm text-[12px] text-[#8D8D8D] mt-2">
            <p>
              By creating an account, you agree to Nike's
              <a href="/privacy-policy" className="text-[#8D8D8D] hover:underline"> Privacy Policy</a> and
              <a href="/terms" className="text-[#8D8D8D] hover:underline"> Terms of Use</a>.
            </p>
          </div>

          {/* Sign-Up Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 font-medium uppercase hover:bg-gray-800"
            >
              Join Us
            </button>
          </div>
        </form>

        {/* Already a Member */}
        <div className="text-center text-sm text-[#8D8D8D] mt-4">
          <p>
            Already a member?{' '}
            <a
              href="/signin"
              className="text-black text-[12px] font-normal  hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
