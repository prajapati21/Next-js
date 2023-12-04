"use client"
import Link from "next/link";
import { useEffect,useState } from "react";
const sample = {
      fixed : "fixed top-0 left-0 w-full animate__animated animate__slideInDown",
      fixedUp : "fixed top-0 left-0 w-full animate__animated animate__fadeOutUp",
      fixedWidth : "sm:w-4/5 mx-auto ",
      primary :{
            nav :  "bg-indigo-600 sm:px-4",
            link  :  "text-white py-4 sm:py-6 py-8 sm:px-10 hover:bg-indigo-500 px-4",
      },
      secondary :{
            nav :  "bg-blue-600 sm:px-4",
            link  :  "text-white py-4 sm:py-6 py-8 sm:px-10 hover:bg-blue-500 px-4",
      },
      info : {
            nav :  "bg-cyan-600 sm:px-4",
            link  :  "text-white py-4 sm:py-6 py-8 sm:px-10 hover:bg-cyan-500 px-4",
      },
      error :{
            nav :  "bg-red-600 sm:px-4",
            link  :  "text-white py-4 sm:py-6 py-8 sm:px-10 hover:bg-red-500 px-4",
      },
      warning : {
            nav :  "bg-orange-600 sm:px-4",
            link  :  "text-white py-4 sm:py-6 py-8 sm:px-10 hover:bg-orange-500 px-4",
      },
      success : {
            nav :  "bg-green-600 sm:px-4",
            link  :  "text-white py-4 sm:py-6 py-8 sm:px-10 hover:bg-green-500 px-4",
      },
      variant : {
            one  : "flex flex-col sm:flex-row sm:items-centre sm:justify-start gap-12",
            two  : "flex flex-col sm:flex-row items-centre sm:justify-end gap-12",
            three  : "flex flex-col sm:flex-row sm:items-centre sm:justify-between ",
            four  : "flex flex-col sm:flex-row sm:items-centre sm:justify-around ",
            five  : "flex flex-col sm:flex-row sm:items-centre sm:justify-evenly ",

      }
}
const Navbar = ({
      fullWidth=true,
      theme="primary",
      variant="one",
      fixed=false,
      sticky=null,
      menu
}) =>{
      const [stickyControl,setStickyControl] = useState(sticky);
      useEffect(() => {
            if (sticky !== null) 
            {
               window.onscroll = () =>{
                 if(window.scrollY > 300)
                 {
                     return setStickyControl(true);                  
                 }
                 if(window.scrollY === 0)
                 {
                     return setStickyControl(true);                  
                 }
                 else
                 {
                     return setStickyControl(false); 
                 }
               }
            }
          }, [stickyControl]);
          
      const Menus = ({item})=>{
            const m =(
                  <>
                     <Link 
                      className={sample[theme].link} 
                     href={item.href}>{item.label}</Link>
                  </>
            );
            return m;
      }
      const design = (
            <>
            <nav className={`
            ${sample[theme].nav}
            ${fixed ? sample.fixed : null}
            ${stickyControl ? sample.fixed : null}
            `}>
            <div className={`
            ${ sample.variant[variant]}
            ${fullWidth ? null : sample.fixedWidth}
            `}>
                  <Link 
                  className={sample[theme].link}
                  href="/">{menu.brand}</Link>
                  <div className="flex flex-col sm:flex-row ">
                        {
                              menu.link.map((item,index)=>{
                                    return <Menus key={index} item={item} />
                              })
                        }
                  </div>
                  
             </div>
            </nav>
             
            </>
      );
      return design
}
export default Navbar;