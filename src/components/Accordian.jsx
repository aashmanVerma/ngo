import React, { useState } from "react";

export default function Accordian() {

    const [one,setOne] = useState(false);
    const [two,settwo] = useState(false);
    const [three,setThree] = useState(false);

   

  return (
    <div className="w-[85%] mx-auto">
      <div className="my-4 text-center">
        <i className="text-lg font-medium">Frequently Asked Questions</i>
      </div>
      <div className="md:w-[35rem] mx-auto ">
        <div className="my-2 bg-green-500 text-white px-2 py-1 rounded">
            <i className="text-sm font-medium block" onClick={()=>setOne(!one)}>Who is KSHITIKSHA FOUNDATION ?</i>
            {one && <i className="mt-2">Company name is a KSHITIKSHA FOUNDATION registered in Uttar Pradesh.</i> }
        </div>
        <div className="my-2 bg-green-500 text-white px-2 py-1 rounded">
        <i className="text-sm font-medium block" onClick={()=>settwo(!two)}>What is CIN NUMBER of KSHITIKSHA FOUNDATION ?</i>
            {two && <i className="mt-2">CIN NUMBER of KSHITIKSHA FOUNDATION is : U85300UP2021NPL148888 . Corporate Identification Number which sometimes referred to as CIN is a unique identification number which is assigned by the ROC (Registrar of Companies) of various states under the MCA (Ministry of Corporate Affairs).</i> }
        </div>
        <div className="my-2 bg-green-500 text-white px-2 py-1 rounded">
        <i className="text-sm font-medium block" onClick={()=>setThree(!three)}>When KSHITIKSHA FOUNDATION was incorporated?</i>
            {three && <i className="mt-2">The Company Was incorporated on Dated - 15-Jul-2021. You can see the list of Company Who was incorpated on same date with this Company.</i> }
        </div>
      </div>
    </div>
  );
}
