import React from "react";

export default function Footer() {
  return (
    <div className="mt-10 border border-t-gray-[#393646] bg-[#393646]">
      <div className="w-[85%] mx-auto">
        <i className="text-xl sm:text-2xl text-white font-medium my-5 block">About us</i>
        <div className="my-5">
          <table className="bg-[#393646]">
            <thead>
              <tr>
                <td scope="col">Address</td>
                <td scope="col">H NO. 303, BLOCK 12, HIG APARTMENTS OMICRON I , GREATER NOIDA NOIDA GAUTAM BUDDHA NAGAR UTTAR PRADESH 201310 INDIA</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operational Area-States</td>
                <td>UTTAR PRADESH</td>
              </tr>
              <tr>
                <td>Mobile No</td>
                <td>8433263544</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>kshitikshafoundation@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
