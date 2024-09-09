import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Package 1"
  }
  

export default function option1() {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-5" > 
         <Image
                    src="/selection1.jpeg"
                    alt="Opcion 1"
                  width={200} height={2000}
                />
        <div className="bg-clearImage p-2 rounded-2xl" >
            <h1 className="text-xl font-bold ">Incluye:</h1>
            <h1 >Taquiza para 50 personas <br />
            $800 (25% de deposito requerido) <br />
            Incluye- <br />
            3 tipos de carne de su prefedencia <br />
            Vasos para frijoles <br />
            Cilantro,cebolla,limones,cebolla asada ,chile toriados, <br />
            50 quesadillas <br />
            Frijoles charros <br />
            2 tipos agua fresca
            <br /></h1>
            </div>
        <div className="bg-clearImage p-2 rounded-2xl">
        <h1 className="text-2xl font-bold ">Carnes:</h1>
        <ul>
            <li>Pastor</li>
            <li>Fajita</li>
            <li>Fajita Marinada</li>
            <li>Bistec</li>
            <li>Bistec Marinado</li>
            <li>Pollo</li>
            <li>Cochina Pibil</li>
            <li>Carnitas</li>
        </ul>
        </div>
        </div>
    )
}