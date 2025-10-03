"use client"
import Image from 'next/image';
import { CheckCircle, Shield, ArrowRight }
from 'lucide-react';

export default function ForgotPasswordFlow() {
   return (
       <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
           <div className="mb-20">
               <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                   <div className="md:flex">
                       <div className="md:w-1/2 p-8 md:p-12">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600">
                                   <span className="text-lg font-bold">14</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-gray-900">Forgot Password</h2>
                           </div>

                           <p className="text-black mb-6">
                               If you&aposve forgotten your password, you can reset it using our secure recovery process.
                           </p>

                           <div className="space-y-4">
                               <div className="bg-gray-50 rounded-lg p-4">
                                   <h3 className="font-bold text-black mb-2">Password Recovery Process</h3>
                                   <ol className="space-y-2 list-decimal list-inside">
                                       <li>Click &quot;Forgot Password?&quot; on the login page</li>
                                       <li>Enter your email address</li>
                                       <li>Check your email for a verification code (OTP)</li>
                                       <li>Enter the OTP on the verification page</li>
                                       <li>Create a new password on the reset password page</li>
                                   </ol>
                               </div>

                               <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>The OTP is valid only for 3 minutes</span>
                                       </li>
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>If you don&apost receive the email, check your spam folder or try again</span>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>

                       <div className="md:w-1/2 bg-gray-100 p-8">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/forgot password.png"
                                   alt="Consultant Dashboard"
                                   fill
                                   className="object-cover"
                                   priority
                               />
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <div className="mb-20">
               <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                   <div className="md:flex">
                       <div className="md:w-1/2 bg-gray-100 p-8">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/verify code.png"
                                   alt="Consultant Dashboard"
                                   fill
                                   className="object-cover"
                                   priority
                               />
                           </div>
                       </div>
                       <div className="md:w-1/2 p-8 md:p-12 order-1 md:order-2">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600">
                                   <span className="text-lg font-bold">15</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-gray-900">Verify Your Identity</h2>
                           </div>

                           <p className="text-black mb-6">
                               After requesting a password reset, you&aposll receive an OTP via email. Enter this 4-digit code to verify your identity.
                           </p>

                           <div className="space-y-4">
                               <div className="bg-gray-50 rounded-lg p-4">
                                   <h3 className="font-bold text-black mb-2">OTP Verification</h3>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <Shield className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>The OTP is a 4-digit code sent to your email</span>
                                       </li>
                                       <li className="flex items-start">
                                           <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>After verification, you&aposll be taken to the reset password page</span>
                                       </li>
                                   </ul>
                               </div>
                           </div>

                           <p className="text-black mb-6">
                               The OTP sent to the users will expire after 3 minute.
                           </p>
                       </div>
                   </div>
               </div>
           </div>

           <div className="mb-20">
               <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                   <div className="md:flex">
                       <div className="md:w-1/2 p-8 md:p-12">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600">
                                   <span className="text-lg font-bold">16</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-gray-900">Reset Password</h2>
                           </div>

                           <p className="text-black mb-6">
                               After verifying your identity with the OTP, you can set a new password for your account.
                           </p>

                           <div className="space-y-4">
                               <div className="bg-gray-50 rounded-lg p-4">
                                   <h3 className="font-bold text-black mb-2">Password Requirements</h3>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>At least 8 characters long</span>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>

                       <div className="md:w-1/2 bg-gray-100 p-8">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/reset-password.png"
                                   alt="Consultant Dashboard"
                                   fill
                                   className="object-cover"
                                   priority
                               />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
}
