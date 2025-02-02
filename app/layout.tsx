
import Navbar from "@/components/Navbar/Navbar"
import Skill from "@/components/Skill/Skill";
import { Prompt } from 'next/font/google';


const promptFont = Prompt({
  subsets: ['latin'],
  weight: ['100', '200'], // You can customize the font weights as needed
});

import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={promptFont.className} >

      <head>
        <title>ME</title>
      </head>
      <body>
        <Navbar />
        {children}

      </body>

    </html >
  )
}
export default layout