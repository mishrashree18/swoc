import Devfolio from "./Images/Devfolio_Logo.svg";
import Polygon from "./Images/Polygon_Logo.svg";
import Tezos from "./Images/Tezos_Logo.svg";
import Filecoin from "./Images/Filecoin_Logo.svg";
import Celo from "./Images/Celo_Logo.svg";
import Karo from "./Images/KaroVerify_Logo.svg";
import IandT from "./Images/I&T_Logo.jpeg";
import DO from "./Images/DO_Logo.svg";
import Taskade from "./Images/Taskade_Logo.svg";
import XYZ from "./Images/xyz.png";
import Streamyard from "./Images/Streamyard_Logo.svg";
import Replit from "./Images/replit.png"

function Container() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl mt-24 text-primary">Powered By</h1>
        <a href="https://devfolio.co/"><img src={Devfolio} className="h-24 mt-6 md:h-36 p-6 rounded-lg cursor-pointer" alt="Devfolio"></img></a>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl mt-10 font-semibold underline text-primary">Gold Sponsors</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 space-x-9 justify-center items-center mt-8">
            <a href="https://polygon.technology/"><img src={Polygon} className="h-24 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
            <a href="https://tezos.com/"><img src={Tezos} className="h-24 md:h-36 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
            <a href="https://filecoin.io/"><img src={Filecoin} className="h-24 md:h-36 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
            <a href="https://celo.org/"><img src={Celo} className="h-24 md:h-36 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
            <a href="https://karoverify.xyz/"><img src={Karo} className="h-36 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
          </div>
        </div>
        <div className="justify-center items-center">
          <h1 className="text-center text-3xl md:text-4xl mt-10 font-semibold underline text-primary">Silver Sponsors</h1>
          <a href="https://www.linkedin.com/company/internship-training/"><img src={IandT} className="h-64 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
        </div>
        <div className="justify-center items-center">
        <h1 className="text-center text-3xl md:text-4xl mt-10 font-semibold underline text-primary">Sponsors</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 space-x-9 justify-center items-center mt-8">
          
          <a href="https://www.digitalocean.com/"><img src={DO} className="h-24 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
          <a href="https://www.taskade.com/"><img src={Taskade} className="h-24 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
          <a href="https://gen.xyz/"><img src={XYZ} className="h-24 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
          <a href="https://streamyard.com/"><img src={Streamyard} className="h-24 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
          <a href="https://replit.com/"><img src={Replit} className="h-24 p-6 rounded-lg cursor-pointer" alt="Polygon"></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
