"use client"
import Image from 'next/image';
import { CheckCircle, Mail, Lock, User, Users, Settings, AlertCircle, Building, Thermometer, Gauge, Zap, FileText, Smartphone, Link }
   from 'lucide-react';


export default function ConsultantFlow() {
   return (
       <div id="consultant"className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
           <div className="mb-20">
               <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                   <div className="md:flex gap-x-16 gap-y-8">
                       <div className="md:w-1/2 p-8 md:p-12">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                   <span className="text-lg font-bold">1</span>
                               </div>
                               <h1 className="ml-4 text-2xl font-bold text-gray-900">Welcome to BioPima</h1>
                           </div>


                           <p className="text-black mb-6">
                               The teaser screens introduces our platform which is designed to help you monitor biogas systems efficiently.
                           </p>


                           <div className="space-y-4">
                               <div className="flex items-start">
                                   <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                       <CheckCircle className="h-4 w-4 text-green-600" />
                                   </div>
                                   <p className="ml-3 text-black">Learn something about our monitoring features from teaser screens</p>
                               </div>


                               <div className="flex items-start">
                                   <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                       <CheckCircle className="h-4 w-4 text-green-600" />
                                   </div>
                                   <p className="ml-3 text-black">Click "Get Started" to begin the setup process</p>
                               </div>
                           </div>
                       </div>


                       <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/bio-teaser3.png"
                                   alt="Welcome Screen"
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
                   <div className="md:flex gap-x-16 gap-y-8">
                       <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/chooserole.png"
                                   alt="Choose Role"
                                   fill
                                   className="object-cover"
                                   priority
                               />
                           </div>
                       </div>


                       <div className="md:w-1/2 p-8 md:p-12 order-1 md:order-2">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                   <span className="text-lg font-bold">2</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-black">Choose Your Role</h2>
                           </div>


                           <p className="text-black mb-6">
                               Select how you'll be using our platform. We offer two main roles with different access levels:
                           </p>


                           <div className="space-y-6">
                               <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                   <div className="flex items-center mb-3">
                                       <User className="h-6 w-6 text-green-600 mr-2" />
                                       <h3 className="font-bold text-lg text-green-800">Consultant</h3>
                                   </div>
                                   <p className="text-gray-700 mb-3">For professionals who manage multiple biogas systems and clients</p>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>Manage multiple client installations</span>
                                       </li>
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>Add institutional operators</span>
                                       </li>
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>Access comprehensive analytics</span>
                                       </li>
                                   </ul>
                               </div>


                               <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                   <div className="flex items-center mb-3">
                                       <Building className="h-6 w-6 text-blue-600 mr-2" />
                                       <h3 className="font-bold text-lg text-blue-800">Institution</h3>
                                   </div>
                                   <p className="text-black mb-3">For institutional biogas operators</p>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>Monitor your biogas systems</span>
                                       </li>
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>View performance reports</span>
                                       </li>
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>Manage system settings</span>
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
                   <div className="md:flex gap-x-16 gap-y-8">
                       <div className="md:w-1/2 p-8 md:p-12">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                   <span className="text-lg font-bold">3</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-gray-900">Create Consultant Account</h2>
                           </div>


                           <p className="text-black mb-6">
                               Fill in your details to create your consultant account. This will give you access to manage multiple biogas installations.
                           </p>


                           <div className="space-y-4">
                               <div className="bg-gray-50 rounded-lg p-4">
                                   <h3 className="font-bold text-gray-800 mb-2">Required Information</h3>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <User className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Full Name:</strong> Your legal name</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Building className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Company Name:</strong> Your consulting company</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Mail className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Email Address:</strong> A valid email you have access to</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Smartphone className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Phone Number:</strong> Your contact number</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Lock className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Password:</strong> At least 8 characters</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Lock className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Confirm Password:</strong> Re-enter your password</span>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>


                       <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/bio-signup.png"
                                   alt="Consultant Signup"
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
                   <div className="md:flex gap-x-16 gap-y-8">
                       <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/bio-login.png"
                                   alt="Consultant Login"
                                   fill
                                   className="object-cover"
                                   priority
                               />
                           </div>
                       </div>


                       <div className="md:w-1/2 p-8 md:p-12 order-1 md:order-2">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                   <span className="text-lg font-bold">4</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-gray-900">Consultant Login</h2>
                           </div>


                           <p className="text-black mb-6">
                               After creating your account, you log in using your email and password to access the consultant dashboard.
                           </p>


                           <div className="space-y-4">
                               <div className="bg-gray-50 rounded-lg p-4">
                                   <h3 className="font-bold text-gray-800 mb-2">Login Information</h3>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <Mail className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Email:</strong> The email you used during registration</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Lock className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Password:</strong> Your account password</span>
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
               <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                   <div className="md:flex gap-x-16 gap-y-8">
                       <div className="md:w-1/2 p-8 md:p-12">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                   <span className="text-lg font-bold">5</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-black">Consultant Dashboard</h2>
                           </div>


                           <p className="text-gray-600 mb-6">
                               After logging in, you'll be taken to your consultant dashboard where you can monitor all your biogas installations.
                           </p>


                           <div className="space-y-4">
                               <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                   <h3 className="font-bold text-green-800 mb-2">Dashboard Features</h3>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <Thermometer className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Temperature Monitoring:</strong> Real-time temperature readings</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Gauge className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Pressure Tracking:</strong> System pressure levels</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Zap className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span><strong>Methane Levels:</strong> Methane concentration monitoring</span>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>


                       <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/consultant-dashboard.png"
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
                   <div className="md:flex gap-x-16 gap-y-8">
                       <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/consultant-client.png"
                                   alt="Adding Institutional Clients"
                                   fill
                                   className="object-cover"
                                   priority
                               />
                           </div>
                       </div>


                       <div className="md:w-1/2 p-8 md:p-12 order-1 md:order-2">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                   <span className="text-lg font-bold">6</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-black">Adding Clients</h2>
                           </div>


                           <p className="text-black mb-6">
                               As a consultant, you can add institutional operators who will be managing a biogas systems.
                           </p>


                           <div className="space-y-4">
                               <div className="bg-gray-50 rounded-lg p-4">
                                   <h3 className="font-bold text-black mb-2">Adding a Client</h3>
                                   <ol className="space-y-2 list-decimal list-inside">
                                       <li>Click "Clients" on the sidebar</li>
                                       <li>Enter the institutional operator's details (Institutional name, email, user name, and phone number)</li>
                                       <li>Click "Add user"</li>
                                       <li>The institutional operator will receive an email with a setup link</li>
                                   </ol>
                               </div>


                               <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                   <h3 className="font-bold text-blue-800 mb-2">What Happens Next?</h3>
                                   <ul className="space-y-2">
                                       <li className="flex items-start">
                                           <Mail className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>The institutional operator receives an email with a unique setup link</span>
                                       </li>
                                       <li className="flex items-start">
                                           <Link className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>They click the link to set their password</span>
                                       </li>
                                       <li className="flex items-start">
                                           <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                           <span>Once set up, they can log in and access the institution dashboard</span>
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
                   <div className="md:flex gap-x-16 gap-y-8">
                       <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
                           <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                               <Image
                                   src="/images/settings.png"
                                   alt="Settings"
                                   fill
                                   className="object-cover"
                                   priority
                               />
                           </div>
                       </div>


                       <div className="md:w-1/2 p-8 md:p-12 order-1 md:order-2">
                           <div className="flex items-center mb-6">
                               <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                                   <span className="text-lg font-bold">8</span>
                               </div>
                               <h2 className="ml-4 text-2xl font-bold text-black">Settings</h2>
                           </div>


                           <p className="text-black mb-6">
                               Update biogas consultant profile picture and detailed information.
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
                   </div>
               </div>
           </div>
       </div>
   );
}