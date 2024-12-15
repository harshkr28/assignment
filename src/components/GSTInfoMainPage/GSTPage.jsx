// import { useState } from "react";
// import GSTInfo from "../GSTInfo/GSTInfo";
// import "./Modal.scss";

// const GSTPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userValue, setUserValue] = useState("");
//   const [totalGSTBenefits, setTotalGSTBenefits] = useState(0);
//   const [gstVal, setGstVal] = useState(0);
//   const [remainingValue, setRemainingValue] = useState(0);

//   const closeModal = () => {
//     setUserValue("");
//     setIsModalOpen(false);
//   };

//   const handleInputChange = (event) => {
//     setUserValue(event.target.value);
//   };

//   const calculateGST = (userValue) => {
//     const userValueNumber = parseFloat(userValue);
//     const gstVal = (userValueNumber * 28) / 100;
//     const remainingValue = userValueNumber - gstVal;
//     setGstVal(gstVal);
//     setRemainingValue(remainingValue);
//     setTotalGSTBenefits((prevTotal) => prevTotal + gstVal);
//     return { gstVal, remainingValue };
//   };

//   const openModal = () => {
//     if (userValue && !isNaN(userValue) && userValue > 0) {
//       const { gstVal, remainingValue } = calculateGST(userValue);
//       console.log("GST Value:", gstVal);
//       console.log("Remaining Value:", remainingValue);
//       setIsModalOpen(true);
//     } else {
//       alert("Please enter an amount greater than 0.");
//     }
//   };

//   return (
//     <div className="App">
//       <h2 className="input-label">Enter the amount to calculate GST:</h2>
//       <input
//         type="number"
//         value={userValue}
//         onChange={handleInputChange}
//         placeholder="Enter amount"
//         min="1"
//       />
//       <button className="open-modal-btn" onClick={openModal}>
//         Open GST Info
//       </button>
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <GSTInfo
//             gstVal={gstVal}
//             remainingValue={remainingValue}
//             closeModal={closeModal}
//             userValue={userValue}
//             totalGSTBenefits={totalGSTBenefits}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default GSTPage;

import { useState } from "react";
import GSTInfo from "../GSTInfo/GSTInfo";
import "./Modal.scss";

const GSTPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [totalGSTBenefits, setTotalGSTBenefits] = useState(0);
  const [gstVal, setGstVal] = useState(0);
  const [remainingValue, setRemainingValue] = useState(0);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setUserValue(""), 200); 
  };

  const handleInputChange = (event) => {
    setUserValue(event.target.value);
  };

  const calculateGST = (userValue) => {
    const userValueNumber = parseFloat(userValue);
    const gstVal = (userValueNumber * 28) / 100;
    const remainingValue = userValueNumber - gstVal;
    setGstVal(gstVal);
    setRemainingValue(remainingValue);
    setTotalGSTBenefits((prevTotal) => prevTotal + gstVal);
    return { gstVal, remainingValue };
  };

  const openModal = () => {
    if (userValue && !isNaN(userValue) && userValue > 0) {
      calculateGST(userValue);
      setIsModalOpen(true);
    } else {
      alert("Please enter an amount greater than 0.");
    }
  };

  return (
    <div className="App">
      <h2 className="input-label">Enter the amount to calculate GST :</h2>
      <input
        type="number"
        value={userValue}
        onChange={handleInputChange}
        placeholder="Enter amount"
        min="1"
      />
      <button className="open-modal-btn" onClick={openModal}>
        Get GST Info
      </button>
      <div className={`modal-overlay ${isModalOpen ? "open" : "close"}`}>   
          <GSTInfo
            gstVal={gstVal}
            remainingValue={remainingValue}
            closeModal={closeModal}
            userValue={userValue}
            totalGSTBenefits={totalGSTBenefits}
          />
      </div>
    </div>
  );
};

export default GSTPage;

