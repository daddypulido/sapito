import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contact info"
  }
  
  export default function Menu() {
      return (
        <div className="flex justify-center text-center" >
          <div>
            <h1>LLAMA AHORA</h1>
    <a href="tel:+16822277374"><h1 className="bg-clearImage p-2 rounded-2xl">Issac Pulido | 682-227-7374 </h1></a>

          </div>

        </div>
      )
  }