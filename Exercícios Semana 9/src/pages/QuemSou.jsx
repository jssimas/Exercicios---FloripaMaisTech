import  Avatar from "../components/Avatar";
import  Bio  from "../components/Bio";
import { Usuario } from "../components/Usuario";
import React from "react";

const redes = [
  {
    icone: "bi-linkedin",
    link: "https://uy.linkedin.com/in/federico-vilar-59b22b8b",
  },
  {
    icone: "bi-instagram text-danger",
    link: "https://www.instagram.com/chavetasoft/",
  },
  {
    icone: "bi-github text-light-emphasis",
    link: "https://github.com/Luis-Vilar",
  },
];

export const QuemSou = () => {
  return (
    <div className="">
      <div className="row border-bottom py-2">
        <div className="col-2">
          <Avatar
            src="https://avatars.githubusercontent.com/u/124309725?v=4"
            alt="Luis Vilar : {Aluno} -> Full Stack <-{Itaguaçu} "
          />
        </div>
        <div className="col ">
          <Usuario nome="Luis Vilar" cargo="Aluno de Full Stack " redes={redes} />
        </div>
      </div>
      <div className="row mt-4">
        <Bio>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            aperiam quidem dolore officiis? Neque, ullam, eius quisquam cum
            magnam est aperiam perferendis obcaecati suscipit dolor laborum? Eos
            provident hic velit?
          </p>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos adipisci tenetur consequuntur vitae iure dolorum
            provident, aliquid maxime nostrum! Ducimus nihil quisquam in modi,
            dolore vel mollitia tempora repellendus temporibus beatae
            perferendis obcaecati.
          </p>
        </Bio>
      </div>
    </div>
  );
};