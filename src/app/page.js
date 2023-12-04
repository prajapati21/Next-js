import { 
  Card,
  Button,
  Navbar,
 
} from "../../Tailwind";
const Page = () =>{
  const menus ={ 
    brand : "Code with Me",
    link : [
      {
        label : "Home",
        href  :"/"
      },
      {
        label : "Home",
        href  :"/"
      },
      {
        label : "Home",
        href  :"/"
      },
      {
        label : "Home",
        href  :"/"
      },
      {
        label : "Home",
        href  :"/"
      },
    ]
  }
  const design = (
    <>
      <Navbar
      theme="primary"
      variant="three"
      menu={menus}
      sticky={true}
      />
      <div style={{width:"100%",height:"5000px"}}></div>
    </>
  );
  return design;
}

export default Page;