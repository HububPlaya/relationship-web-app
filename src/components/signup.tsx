import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { supabase } from "../supabaseConfig";
import { Link, useNavigate } from "react-router-dom";

// create the interface for the form data 
interface Signup {
    email: string
    password: string
    firstName: string, 
    lastName: string,
    dob: Date,
    phoneNumber: string,

}

const Signup:React.FC = () => {
    const { register, handleSubmit, formState: { isSubmitting, isSubmitSuccessful, isSubmitted, errors }, setError} = useForm<Signup>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Signup> = async (data) => {
        const { error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    dob: data.dob,
                    phoneNumber: data.phoneNumber
                }
            }
        })  
        if(error) {
        setError('email', { type: 'manual', message: 'Invalid email or password' });
        setError('password', { type: 'manual', message: 'Invalid email or password' });
        setError('firstName', { type: 'manual', message: 'Invalid First Name must be letters' });
        setError('lastName', { type: 'manual', message: 'Invalid Last Name must be letters' });
        setError('dob', { type: 'manual', message: 'Invalid DOB must be MM-DD-YYYY' });
        setError('phoneNumber', { type: 'manual', message: 'Invalid phone number must be xxx-xxx-xxxx all numbers' });
        setError('password', { type: 'manual', message: 'Invalid email or password' });
        } else {
            navigate('/login');

        }
        
    }
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Make an Account Today</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* first Name Input */}
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        {...register("firstName", {required: "First Name is required"})}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    { errors.firstName && <p className="mt-2 text-sm text-red-600"> {errors.firstName.message} </p>}
                </div>

                {/* Last Name Input */}
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        {...register("lastName", {required: "Last Name is required"})}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    { errors.lastName && <p className="mt-2 text-sm text-red-600"> {errors.lastName.message} </p>}
                </div>

                {/* Email Address Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", {required: "Email Address is required"})}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    { errors.email && <p className="mt-2 text-sm text-red-600"> {errors.email.message} </p>}
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register("password", {required: "Password is required"})}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    { errors.password && <p className="mt-2 text-sm text-red-600"> {errors.password.message} </p>}
                </div>

                {/* Phone Number Input */}
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="phoneNumber"
                        type="text"
                        {...register("phoneNumber", {required: "Phone Number is required"})}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    { errors.phoneNumber && <p className="mt-2 text-sm text-red-600"> {errors.phoneNumber.message} </p>}
                </div>

                {/* DOB Input */}
                <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                        id="firstName"
                        type="date"
                        {...register("firstName", {required: "Date of birth is required"})}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    { errors.dob && <p className="mt-2 text-sm text-red-600"> {errors.dob.message} </p>}
                </div>
                
                {/* Button to submit the form */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </button>

            </form>

            {/* shows if account was created or not */}
            {isSubmitSuccessful && <p className="mt-4 text-sm text-green-600 text-center">Account created successfully!</p>}
            {isSubmitted && !isSubmitSuccessful && !errors.email && !errors.password && (
                <p className="mt-4 text-sm text-red-600 text-center">Account creation failed. Please try again.</p>
            )}

            {/* lets the user go back to login page */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Already have an account? 
                    <Link  to="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link>
                </p>
            </div>
        </div>
    </div>
    )
}

export default Signup;