import presentationImg from "./assets/images/perfil.png"
import aboutmeImg from "./assets/images/2.jpg"
import cv from "./assets/curriculum.pdf"

// Projects

import MeliClonImg from "./assets/images/meli-clon.png"

export const templateConfig = {
  socialMedia: [
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/pablo-pe%C3%B1a-15619420a/",
    },
    {
      icon: "GitHub",
      url: "https://github.com/sebas-pena",
    },
    {
      icon: "ïnstagram",
      url: "https://www.instagram.com/sebastian_.pena/",
    },
    {
      icon: "Gmail",
      url: "mailto://sebapena2002@gmail.com",
    },
  ],
  folders: [
    {
      name: "Sobre Mi",
      files: [
        {
          icon: "PersonalCard",
          fileName: "Presentacion",
          screen: "Presentation",
          screenConfig: {
            firstLine: "Hola, soy Pablo Peña",
            secondLine: "Desarrollador Front-End",
            imageSrc: presentationImg,
            cvSrc: cv,
            mail: "sebapena2002@gmail.com",
          },
        },
        {
          icon: "PersonalCard",
          fileName: "Sobre mi",
          screen: "Aboutme",
          screenConfig: {
            descriptionBlocks: [
              "Mi nombre es Pablo, tengo 19 años y me apasiona el mundo de la tecnología, sobre todo el aspecto visual y el lado del cliente, por eso me enfoqué en el desarrollo front-end.",
              "Mi interés por la programación empezó desde chico, pero no fue sino hasta los 16 años que decidí comenzar a aprender Python con un libro ( Python for kids 📙 ), posteriormente he utilizado Java y a partir de los 18 conocí en el mundo de JavaScript y el desarrollo web.",
              "Actualmente, estoy estudiando Ingeniería en Computación (UDELAR), y aprendiendo de forma autodidacta.",
            ],
            skills: ["Sass", "React", "JavaScript", "NodeJs", "Redux"],
            imageSrc: aboutmeImg,
          },
        },
      ],
    },
    {
      name: "Proyectos",
      files: [
        {
          icon: "GitHub",
          fileName: "Clon Mercado Libre",
          screen: "Project",
          screenConfig: {
            title: "Clon de Mercado Libre",
            image: MeliClonImg,
            techIcons: ["React", "Sass"],
            repoLink: "https://github.com/sebas-pena/meli-clone",
            deployLink: "https://meli-clon-pp.herokuapp.com/",
          },
        },
      ],
    },
  ],
}
