import React from "react";

const ForgotPassword:React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign up for a new password today!</h2>
                <form>
                    <div>
                        <label></label>
                        <input/>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;