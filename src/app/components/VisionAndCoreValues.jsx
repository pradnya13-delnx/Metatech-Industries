import React from "react";

const VisionMission = () => {
  return (
    <div className=" text-white font-calibri  sm:p-10 overflow-hidden">
      {/* Lightning Border Effect for the entire page */}
      <div className="absolute inset-0 border-4 border-transparent"></div>

      {/* Lightning Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-200 to-transparent animate-lightning-bg"></div>

      {/* Content */}
      <div className="relative bg-gray-900 text-white py-8 px-6 ">
        {/* Vision & Mission Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Vision & Mission</h1>
        </div>

        {/* Vision & Mission Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 px-4 sm:px-12">
          {/* Vision Section */}
          <div className="w-full sm:w-1/2 h-full p-6 sm:p-8 border border-blue-400 bg-gray-800 text-center rounded-lg hover:border-blue-700 hover:border-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Vision</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              To be the leading provider of innovative and transformative IT solutions that empower businesses worldwide.
            </p>
          </div>

          {/* Mission Section */}
          <div className="w-full sm:w-1/2 h-full p-6 sm:p-8 border border-blue-400 bg-gray-800 text-center rounded-lg hover:border-blue-700 hover:border-4 hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Mission</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              To deliver custom, high-quality IT services and solutions that drive growth, and success for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;




// import React from "react";

// const VisionMission = () => {
//   return (
//     <div className="relative min-h-screen bg-black text-white font-calibri p-10 overflow-hidden">
//       {/* Lightning Border Effect for the entire page */}
//       <div className="absolute inset-0 border-4 border-transparent animate-lightning-border"></div>

//       {/* Lightning Background Effect */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-20 animate-lightning-bg"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Vision & Mission Heading */}
//         <div className="text-center mb-20">
//           <h1 className="text-6xl font-bold mb-4 text-orange-500 animate-pulse">
//             Vision & Mission
//           </h1>
//           <p className="text-lg text-gray-700 hover:underline">Our guiding principles</p>
//         </div>

//         {/* Vision Section */}
// <div className=" flex flex-row gap-10">
//   <div className="mb-16  h-full w-1/2">
//     <div className="p-8 border-4 border-transparent rounded-lg animate-lightning-border">
//       <h2 className="text-4xl font-bold text-orange-500 mb-6">Vision</h2>
//       <p className="text-lg text-gray-700 hover:underline leading-relaxed text-wrap">
//         To be the leading provider of innovative and transformative IT
//         solutions that empower businesses worldwide.
//       </p>
//     </div>
//   </div>

//   {/* Mission Section */}
//   <div className="mb-16  h-full w-1/2">
//     <div className="p-8 border-4 border-transparent rounded-lg animate-lightning-border">
//       <h2 className="text-4xl font-bold text-orange-500 mb-6">Mission</h2>
//       <p className="text-lg text-gray-700 hover:underline leading-relaxed">
//         To deliver custom, high-quality IT services and solutions that
//         drive efficiency, growth, and success for our clients.
//       </p>
//     </div>
//   </div>
// </div>

//         {/* Core Values Section */}
//         <div>
//           <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border">
//             <h2 className="text-4xl font-bold text-orange-500 mb-6">Core Values</h2>
//             <ul className="space-y-4 text-lg text-gray-700 hover:underline">
//               <li>
//                 <span className="font-bold text-orange-500">Integrity:</span> We
//                 uphold the highest standards of integrity in all our actions.
//               </li>
//               <li>
//                 <span className="font-bold text-orange-500">Customer-Centricity:</span>{" "}
//                 Our clients are at the heart of everything we do.
//               </li>
//               <li>
//                 <span className="font-bold text-orange-500">Innovation:</span> We
//                 constantly innovate to meet the evolving needs of our clients.
//               </li>
//               <li>
//                 <span className="font-bold text-orange-500">Collaboration:</span> We
//                 believe in the power of teamwork and collaboration.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisionMission;