import Link from "next/link";
const sample = {
      fixedWidth : "sm:w-4/5 mx-auto ",
      primary :{
            nav :  "bg-indigo-600 px-4",
            link  :  "text-white py-6 px-10 hover:bg-indigo-500 px-4",
      },
      secondary :{
            nav :  "bg-blue-600 px-4",
            link  :  "text-white py-6 px-10 hover:bg-blue-500 px-4",
      },
      info : {
            nav :  "bg-cyan-600 px-4",
            link  :  "text-white py-6 px-10 hover:bg-cyan-500 px-4",
      },
      error :{
            nav :  "bg-red-600 px-4",
            link  :  "text-white py-6 px-10 hover:bg-red-500 px-4",
      },
      warning : {
            nav :  "bg-orange-600 px-4",
            link  :  "text-white py-6 px-10 hover:bg-orange-500 px-4",
      },
      success : {
            nav :  "bg-green-600 px-4",
            link  :  "text-white py-6 px-10 hover:bg-green-500 px-4",
      },
      variant : {
            one  : "flex items-centre justify-start gap-12",
            two  : "flex items-centre justify-end gap-12",
            three  : "flex items-centre justify-between ",
            four  : "flex items-centre justify-around ",
            five  : "flex items-centre justify-evenly ",

      }
}
const Navbar = ({
      fullWidth=true,
      theme="primary",
      variant="one",
      menu
}) =>{
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
            <nav className={sample[theme].nav}>
            <div className={`
            ${ sample.variant[variant]}
            ${fullWidth ? null : sample.fixedWidth}
            `}>
                  <Link 
                  className={sample[theme].link}
                  href="/">{menu.brand}</Link>
                  <div className="flex ">
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