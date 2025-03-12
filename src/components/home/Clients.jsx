import React from "react";
import Fleet from "../../assets/About/fleet.png";
import Globe from "../../assets/About/canva.png";
import GIS from "../../assets/About/gisai.png";
import Aws from "../../assets/logos/aws.png";
import Birac from "../../assets/logos/birac.jpg";
import Drdo from "../../assets/logos/drdo.jpg";
import Esri from "../../assets/logos/esri.jpg";
import Harvard from "../../assets/logos/harvard.png";
import Iocl from "../../assets/logos/iocl.jpg";
import Nsdc from "../../assets/logos/nsdc.jpg";
import Isb from "../../assets/logos/logo-isb.jpg";
import Who from "../../assets/logos/who.jpg";
import Jio from "../../assets/logos/jio.jpg";
import Microsoft from "../../assets/logos/microsoft.png";
import Mit from "../../assets/logos/mit.jpg";
import Google from "../../assets/logos/google.jpg";
import Nature from "../../assets/logos/theNature.png";
import Cris from "../../assets/logos/crisTag.png";

const logos = [
  Harvard,
  Aws,
  Birac,
  Drdo,
  Esri,
  Iocl,
  Nsdc,
  Isb,
  Who,
  Jio,
  Microsoft,
  Mit,
  Google,
  Nature,
  Cris,
];

const Clients = () => {
  return (
    <div className="marquee-container w-full overflow-hidden py-12">
      <div className="marquee flex w-max animate-marquee">
        {/* Duplicating to ensure seamless transition */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="px-8 object-contain"
          />
        ))}
      </div>
    </div>
  );
};


// const Clients = () => {
//   return (
//     <div className="marquee-container py-12 w-full overflow-hidden">
//       <div className="marquee flex animate-marquee">
//         {[
//           Harvard,
//           Aws,
//           Birac,
//           Drdo,
//           Esri,
//           Iocl,
//           Nsdc,
//           Isb,
//           Who,
//           Jio,
//           Microsoft,
//           Mit,
//           Google,
//           Nature,
//           Cris,
//         ].map((logo, index) => (
//           <img
//             key={index}
//             src={logo}
//             alt={`Logo ${index}`}
//             className="logo px-10  object-contain flex-shrink-0"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export default Clients;
