import Image from "next/image"
import Link from "next/link"
export default function HomePage() {
    return (
 
       
            <div>
            <h1 className="w-full pt-10 text-2xl font-bold text-center ">Paquetes</h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 p-10 justify-center">

                {/*Option 1  */}
            <div className="flex flex-col items-center bg-clearImage p-10 rounded-2xl sm:w-[350px] sm:h-[500px] gap-5">
            <h2 className="text-lg font-bold ">Opcion 1</h2>
            <div className="relative w-full sm:w-[250px] sm:h-[200px] h-[200px]">
                <Image
                className="p-5"
                    src="/selection1.jpeg"
                    alt="Opcion 1"
                   fill
                    style={{ objectFit: "cover" }}
                />
                </div>
                <h3>Taquiza para 50 personas</h3>
                <Link href="/products/option1" className="inline-block bg-orange-300 text-black py-2 px-4 rounded hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-200">Mas Informacion</Link>

            </div>

            {/* Option 2 */}
            
            <div className="flex flex-col items-center bg-clearImage  p-10 rounded-2xl sm:w-[350px] sm:h-[500px] gap-5">
            <h2 className="text-lg font-bold" >Opcion 2</h2>
            <div className="relative w-full sm:w-[250px] sm:h-[200px] h-[200px]">
            <Image 
                className="p-5"
                src="/selection2.jpeg"
                alt="Opcion 2"
                fill
                style={{ objectFit: "cover" }}/>
            </div>
            <h3>Taquiza para 100 personas</h3>
            <Link href="/products/option2" className="inline-block bg-orange-300 text-black py-2 px-4 rounded hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-200">Mas Informacion</Link>

            </div>
            {/* Option 3 */}

            <div className="flex flex-col items-center bg-clearImage p-10 rounded-2xl sm:w-[350px] sm:h-[500px] gap-3">
            <h2 className="text-lg font-bold">Opcion 3</h2>
            <div className="relative w-full sm:w-[250px] sm:h-[200px] h-[200px]">
            <Image 
            className="p-5"
            src="/selection3.jpeg"
            alt="Opcion 2" 
            fill
            style={{ objectFit: "cover" }}
            />
            </div>
            <h3>Taquiza para 50 personas con toro mecanico </h3>
            <Link href="/products/option3" className="inline-block bg-orange-300 text-black py-2 px-4 rounded hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-200">Mas Informacion</Link>
            </div>
            {/* Option 4 */}
            <div className="flex flex-col items-center bg-clearImage p-10 rounded-2xl sm:w-[350px] sm:h-[500px] gap-3">
            <h2 className="text-lg font-bold">Opcion 4</h2>
            <div className="relative w-full sm:w-[250px] sm:h-[200px] h-[200px]">
            <Image 
            className="p-5"
            src="/selection3.jpeg"
            alt="Opcion 2" 
            fill
            style={{ objectFit: "cover" }}
            />
            </div>
            <h3>Taquiza para 100 personas con toro mecanico </h3>
            <Link href="/products/option1" className="inline-block bg-orange-300 text-black py-2 px-4 rounded hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-200">Mas Informacion</Link>

            </div>
            
            </div>
        </div>
        
    )
    
}