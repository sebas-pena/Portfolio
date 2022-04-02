import presentationImg from "./assets/images/perfil.png"
import cv from "./assets/curriculum.pdf"

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
          },
        },
      ],
    },
    {
      name: "Proyectos",
      files: [
        { icon: "GitHub", fileName: "Portafolio" },
        { icon: "GitHub", fileName: "Meli Clon" },
      ],
    },
    {
      name: "Aportes",
      files: [
        { icon: "GitFork", fileName: "Meli Clon" },
        { icon: "GitFork", fileName: "Meli Clon2" },
        { icon: "GitFork", fileName: "Meli Clon3" },
      ],
    },
  ],
}
