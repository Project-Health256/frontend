import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

export function LinkableIconCard({ pathName, caption }) {
  return <div className="ml-5 p-5 w-min">
        <Link to={pathName}>
          <AiOutlineQuestionCircle className="text-[5rem] pt-2 pl-2" />
          <figcaption className="text-center">{caption}</figcaption>
        </Link>
      </div>;
}
  

// export function LinkableIconCard({}) {
//     return <div className="ml-5 p-5 w-min">
//           <Link to="foodplate">
//             <AiOutlineQuestionCircle className="text-[5rem] pt-2 pl-2" />
//             <figcaption className="text-center">Proto 1</figcaption>
//           </Link>
//         </div>;
//   }
    