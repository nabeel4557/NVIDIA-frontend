import Image from "next/image";
import HomePage from "./components/homepage/page";
import Industries from "./industries/page";
import Solutions from "./solution/page";


export default function Home() {
  return (
    <>
      <HomePage />
      <Industries />
      <Solutions/>
      
    </>
    
    
  );
}
