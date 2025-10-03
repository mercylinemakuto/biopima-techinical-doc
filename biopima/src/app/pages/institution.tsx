"use client";
import Image from 'next/image';
import { CheckCircle, Mail, Lock,Thermometer, Gauge, Zap, FileText, Settings, AlertTriangle }
   from 'lucide-react';

export default function InstitutionFlow() {
   return (
       <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
           <div className="mb-20">
               <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                   <div className="md:flex">
                       <div className="md:w-1/2 p-8 md:p-12">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                                   <span className="text-lg font-bold">9</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-gray-900">Setting Up Institution Account</h2>
                           </div>

                           <p className="text-black mb-6">
                               After receiving an invitation from a consultant, you'll need to set up your institution account.
                           </p>

                           <div className="space-y-4">
                               <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                   <h3 className="font-bold text-blue-800 mb-2">Setup Process</h3>
                                   <ol className="space-y-2 list-decimal list-inside">
                                       <li>Check your email for an invitation from your consultant</li>
                                       <li>Click the unique setup link in your email</li>
                                       <li>You'll be taken to a password set page</li>
                                       <li>Create a password for your account</li>
                                       <li>Confirm your password and set</li>
                                   </ol>
                               </div>
                           </div>
                       </div>

                       <div className="md:w-1/2 bg-gray-100 p-8">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/set.png"
                                   alt="Reports"
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
                                   src="/images/institution-login.png"
                                   alt="Reports"
                                   fill
                                   className="object-cover"
                                   priority
                               />
                           </div>
                       </div>

                       <div className="md:w-1/2 p-8 md:p-12 order-1 md:order-2">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                                   <span className="text-lg font-bold">10</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-gray-900">Institution Login</h2>
                           </div>

                           <p className="text-black mb-6">
                               After setting up your account, you log in using your email and the password you created.
                           </p>

                           <div className="space-y-4">
                               <div className="bg-gray-50 rounded-lg p-4">
                                   <h3 className="font-bold text-gray-800 mb-2">Login Information</h3>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <Mail className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Email:</strong> The email that received the invitation</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Lock className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Password:</strong> The password you created during setup</span>
                                       </li>
                                   </ul>
                               </div>

                               <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                   <h3 className="font-bold text-blue-800 mb-2">Forgot Password?</h3>
                                   <p className="text-black mb-3">
                                       If you can't remember your password, click the "Forgot password?"
                                   </p>
                                   <div className="text-sm text-blue-700">
                                       The recovery process involves:
                                       <ul className="mt-2 space-y-1">
                                           <li>• Entering your email address</li>
                                           <li>• Verifying your identity with an OTP sent to your email</li>
                                           <li>• Setting a new password</li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <div className="mb-20">
               <div className="mb-20">
                   <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                       <div className="md:flex">
                           <div className="md:w-1/2 p-8 md:p-12">
                               <div className="flex items-center mb-6">
                                   <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                                       <span className="text-lg font-bold">11</span>
                                   </div>
                                   <h2 className="ml-4 text-2xl font-bold text-gray-900">Institution Dashboard</h2>
                               </div>

                               <p className="text-black mb-6">
                                   After logging in, you'll be taken to your institution dashboard where you can monitor your biogas systems.
                               </p>

                               <div className="space-y-4">
                                   <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                       <h3 className="font-bold text-green-800 mb-2">Dashboard Features</h3>
                                       <ul className="space-y-2">
                                           <li className="flex items-start">
                                               <Thermometer className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Temperature Monitoring:</strong> Real-time temperature readings with alert status</span>
                                           </li>
                                           <li className="flex items-start">
                                               <Gauge className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Pressure Tracking:</strong> System pressure levels with alert status</span>
                                           </li>
                                           <li className="flex items-start">
                                               <Zap className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Methane Levels:</strong> Methane concentration monitoring with alert status</span>
                                           </li>
                                           <li className="flex items-start">
                                               <AlertTriangle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Alert System:</strong> Showing alert status for all metrics</span>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>

                           <div className="md:w-1/2 bg-gray-100 p-8">
                               <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                                   <Image
                                       src="/images/institution-dashboard.png"
                                       alt="Dashboard"
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
                                       src="/images/reports.png"
                                       alt="Reports"
                                       fill
                                       className="object-cover"
                                       priority
                                   />
                               </div>
                           </div>

                           <div className="md:w-1/2 p-8 md:p-12 order-1 md:order-2">
                               <div className="flex items-center mb-6">
                                   <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                       <span className="text-lg font-bold">12</span>
                                   </div>
                                   <h2 className="ml-4 text-2xl font-bold text-gray-900">Reports</h2>
                               </div>

                               <p className="text-black mb-6">
                                   Detailed reports about your biogas systems and analyze performance data.
                               </p>

                               <div className="space-y-4">
                                   <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                       <h3 className="font-bold text-green-800 mb-2">Report Features</h3>
                                       <ul className="space-y-2">
                                           <li className="flex items-start">
                                               <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Reports:</strong> Create detailed gas consumption and performance reports</span>
                                           </li>
                                           <li className="flex items-start">
                                               <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Download Report:</strong> Download reports as it's in your reports screen in pdf form</span>
                                           </li>
                                           <li className="flex items-start">
                                               <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Usage Type:</strong> Different activity type and their gas consumption</span>
                                           </li>
                                       </ul>
                                   </div>

                                   <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                       <ul className="space-y-2">
                                           <li className="flex items-start">
                                               <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span>Performance Summary Reports</span>
                                           </li>
                                           <li className="flex items-start">
                                               <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span>Gas Consumption Analysis</span>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="mb-20">
                   <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                       <div className="md:flex">
                           <div className="md:w-1/2 p-8 md:p-12">
                               <div className="flex items-center mb-6">
                                   <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                       <span className="text-lg font-bold">13</span>
                                   </div>
                                   <h2 className="ml-4 text-2xl font-bold text-gray-900">Settings</h2>
                               </div>

                               <p className="text-black mb-6">
                                   Update biogas institutional operator profile picture and detailed information.
                               </p>

                               <div className="space-y-4">
                                   <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                                       <ul className="space-y-2">
                                           <li className="flex items-start">
                                               <Settings className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Personal Information:</strong> Update your first name, last name, email, and phone number</span>
                                           </li>
                                           <li className="flex items-start">
                                               <Settings className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                                               <span><strong>Profile:</strong> Edit profile picture</span>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>

                           <div className="md:w-1/2 bg-gray-100 p-8 order-2 md:order-1">
                               <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                                   <Image
                                       src="/images/institution-setting.png"
                                       alt="Settings"
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
       </div>
   );
}
