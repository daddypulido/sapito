import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:'El Sapitos Taquizas ',
    template: '%s | El Sapitos Taquizas'
  },
  description: 'Catering tacos and aguachiles',
}


export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-main  h-full" lang="en">
      <body>

      <header className="grid grid-cols-3 items-center p-4 sm:grid-cols-3, md:grid-cols-3">

    {/* Left Element */}
    <div className="flex justify-start">
    <p><Link className="text-lg font-bold hover:opacity-45 transition-opacity duration-300" href="/contact">Información de contacto</Link></p>
    </div>


    {/* Center Element */}
    <div className="flex justify-center">
      
      <Link href="/" className=""><Image src="/sapitologo.svg" alt="logo"  height={200} width={200} /></Link>

    </div>

    {/* Right Element */}
    <div className="flex justify-end gap-4">
   <a href="https://www.instagram.com/tacoselsapito?igsh=MzRlODBiNWFlZA%3D%3D"> 
                <Image
                className="w-8 h-8 sm:w-6 sm:h-6 md:w-10 md:h-10 hover:opacity-45 transition-opacity duration-300"
                    src="/instagram.png"
                    alt="Opcion 1"
                    width={50}
                    height={10}
                />

    </a>

  <a href="https://www.facebook.com/people/Tacos-El-Sapito/pfbid02Us5RVG9UVUD7riZVDyu5SJQ37yNV3rBQZa5eXGUfQjcMQ9d17snpoANeu9MbDrnzl/?mibextid=ZbWKwL">
             <Image
                 className="w-8 h-8 sm:w-6 sm:h-6 md:w-10 md:h-10 hover:opacity-45 transition-opacity duration-300"
                    src="/facebook.png"
                    alt="Opcion 1"
                    width={50}
                    height={10}
                />
    </a>
    </div>
  
  
</header>
        <div  >
        {children}  
        </div>
        
        </body>
    </html>
  );
}
