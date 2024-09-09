import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About"
  }
  


export default function About() {
    return (
     <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center p-10" >
        <h1>Correo Electronico:</h1>
        <h2>elsapitotaquizasyaguachiles.com</h2>
        </div>
        <div className="flex flex-col items-center">
            <h1>Numero telefonico:</h1>
            <a href="tel:+6822277374">682-227-7374</a>
        </div>
     </div>
    )
}