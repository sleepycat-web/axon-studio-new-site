import React from "react";
import { MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
     <section className="text-white pt-8   ">
           <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
             <dl className="grid grid-cols-2 gap-4">
               {/* Address */}
               <div className="bg-primary-400/10 rounded-3xl px-6 py-8 w-full">
                 <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
                   <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary-400" />
                   <div className="text-base font-medium">
                     <div className="flex flex-col md:flex-row md:gap-1">
                       <span className="text-sm md:text-base">
                         Sevoke Road,
                       </span>
                       <span className="text-sm md:text-base">
                         Siliguri - 734001
                       </span>
                     </div>
                   </div>
                 </dd>
               </div>

               {/* Email */}
               <div className="bg-primary-400/10 rounded-3xl px-6 py-8 w-full ">
                 <dd className="flex flex-col lg:flex-row lg:items-center items-start gap-4">
                   <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-primary-400 shrink-0" />
                   <p className="text-sm md:text-base font-medium">
                     <a
                       href="mailto:info@axonstudio.tech"
                       className="inline-flex flex-wrap"
                     >
                       <span className="break-keep">info@axonstudio</span>
                       <span className="break-all">.tech</span>
                     </a>
                   </p>
                 </dd>
               </div>
             </dl>
           </div>
         </section>
  );
};

export default ContactSection;
