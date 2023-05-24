// import React from 'react'
// import { useState } from 'react';



// const Input=
// [
//   {
//     label: "Menu 1",
//   },
//   {
//     label: "Menu 2",
//     submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
//   },
//   {
//     label: "Menu 3",
//     submenu: [
//       { label: "Sub Menu 1" },
//       { label: "Sub Menu 2" },
//       { label: "Sub Menu 3" },
//       { label: "Sub Menu 4" },
//     ],
//   },
//   {
//     label: "Menu 4",
//     submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
//   },
// ];

// const ChallengeOne= () => {
//     const[label,setLabel] = useState([])

//     return(
//         <>
//         <select  value={label} onChange={(e)=>{setLabel([e.target.value])}}>
//             {
//                 Input.map((item,index)=> <option value={index} key={index}>{item.label}</option> )
//             }
//         </select>
//             <select name="" id="" >
//                 {
//                     Input[label] &&
//                     Input[label].submenu.map((item,index)=><option value="">{item.label}</option> )
//                 }
//             </select>

//         </>
//     )
//   };
  
// export default ChallengeOne


// import "./styles.css";
// import {  useState } from "react";
// const countries = [
//   { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
//   { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
//   { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
// ];

// export default function App() {
//   // state to store the value of the country
//   const [country, setCountry] = useState([]);


//   return (
//     <div className="App">
//       {/* 1st DropDown */}
//       <select
//         value={country}
//         onChange={(e) => {
//           console.log(e.target.value);
//           setCountry([e.target.value]);
//         }}
//       >
//         {countries.map((item, index) => {
//           return (
//             <option key={index} value={index}>
//               {item.name}
//             </option>
//           );
//         })}
//       </select>

//       {/* 2nd DropDown */}

//       <select>
//         {countries[country] &&
//           countries[country].cities.map((item, index) => {
//             return <option value={index}>{item}</option>;
//           })}
//       </select>
//     </div>
//   );
// }
import React, { useState } from 'react';

const Input = [
  {
    label: "Menu 1",
    // submenu:[{label:"sub menu 1"}],
  },
  {
    label: "Menu 2",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
  {
    label: "Menu 3",
    submenu: [
      { label: "Sub Menu 1" },
      { label: "Sub Menu 2" },
      { label: "Sub Menu 3" },
      { label: "Sub Menu 4" },
    ],
  },
  {
    label: "Menu 4",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
];

const ChallengeOne = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuChange = (e) => {
    setSelectedMenu(parseInt(e.target.value));
  };

  const renderMenuOptions = () => {
    return Input.map((item, index) => (
      <option value={index} key={index}>
        {item.label}
      </option>
    ));
  };

  const renderSubMenuOptions = () => {
    const submenu = Input[selectedMenu]?.submenu || [];
    return submenu.map((item, index) => (
      <option value={index} key={index}>
        {item.label}
      </option>
    ));
  };

  return (
    <>
      <select value={selectedMenu} onChange={handleMenuChange}>
        {renderMenuOptions()}
      </select>
      <select>
        {renderSubMenuOptions()}
      </select>
    </>
  );
};

export default ChallengeOne;
