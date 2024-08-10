// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../Logo";

// function Footer() {
//   return (
//     <section className="relative overflow-hidden py-10 bg-customBlue border border-t-2 border-t-black">
//       <div className="relative z-10 mx-auto max-w-7xl px-4">
//         <div className="-m-6 flex flex-wrap">
//           <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//             <div className="flex h-full flex-col justify-between">
//               <div className="mb-4 inline-flex items-center">
//                 <Logo width="100px" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">
//                   &copy; Copyright 2023. All Rights Reserved by DevUI.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Company
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Features
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Pricing
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Affiliate Program
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Press Kit
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Support
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Account
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Help
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Customer Support
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Legals
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Terms &amp; Conditions
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Licensing
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;
 
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhone, FaUser } from "react-icons/fa";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-5 bg-customBlue border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap -m-4">
          {/* Logo and Copyright Section */}
          <div className="w-full p-4 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center justify-center md:justify-start">
                <Logo width="100px" className="lg:w-32" />
              </div>
              <div>
                <p className="text-sm text-gray-600 text-center md:text-left">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>

          {/* Full Footer Content for Desktop */}
          <div className="hidden md:flex w-full md:w-1/2 lg:w-7/12">
            <div className="flex flex-col md:flex-row md:w-full">
              {/* Company Section */}
              <div className="w-full p-4 lg:w-4/12">
                <div className="h-full">
                  <h3 className="tracking-px mb-5 text-xs font-semibold uppercase text-gray-500">
                    Company
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Features
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Affiliate Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Press Kit
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Support Section */}
              <div className="w-full p-4 lg:w-4/12">
                <div className="h-full">
                  <h3 className="tracking-px mb-5 text-xs font-semibold uppercase text-gray-500">
                    Support
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Account
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Help
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Customer Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Legals Section */}
              <div className="w-full p-4 lg:w-4/12">
                <div className="h-full">
                  <h3 className="tracking-px mb-5 text-xs font-semibold uppercase text-gray-500">
                    Legals
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Licensing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Minimized Footer for Mobile */}
          <div className="md:hidden w-full p-4 text-center">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link
                  className="text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  <FaHome size={20} />
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  <FaInfoCircle size={20} />
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  <FaUser size={20} />
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  <FaPhone size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
