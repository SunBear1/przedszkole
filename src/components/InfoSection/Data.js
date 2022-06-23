import svg1 from "../../images/logo.svg";
import svg2 from "../../images/galeria.svg";
import svg3 from "../../images/cennik.svg";
import svg4 from "../../images/contact.svg";
import svg5 from "../../images/monte.svg";

export const listStyle = {
  marginLeft: 60,
};

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "O nas",
  headline: "Wolność i samodzielność",
  description:
  <ul style={listStyle}>
  <li>Przedszkole, które uczy samodzielności, daje wolność i zachęca do działania!</li>
  <li>Wartości edukacyjne: Duży nacisk kładzie się na szacunek do dziecka, jego indywidualność, wolność. Wspieranie dziecka w jego rozwoju, a nie wychowywanie. Stawia się na indywidulany rozwój w zgodzie z naturą, zakłada całościowe postrzeganie dziecka. Podstawą pracy wychowawczo-pedagogicznej są przykład i naśladowanie oraz rytm i powtarzanie.</li>
  <li>Nasze przedszkole stwarza dzieciom warunki i możliwości do indywidualnej aktywności. Uczymy się tu poprzez swobodną zabawę, warsztaty, wykonujemy przedstawienia. Bardzo duże znaczenie ma również współpraca z rodzicami.</li>
</ul>,
  buttonLabel: "O Montessori",
  imgStart: false,
  img: svg1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  direction: "monte",
  big_picture: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Galeria",
  headline: "Tu powstanie galeria zdjęć",
  description: "Pojawią się tu fotografie nie tylko okazjonalnych wydarzeń z życia placówki, ale również naszych codziennych aktywności i prac.",
  buttonLabel: "Nasz cennik",
  imgStart: true,
  img: svg2,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
  direction: "signup",
  big_picture: false,
};
export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Cennik",
  headline: " ",
  description:
      <ul style={listStyle}>
        <li>Wpisowe: 250 zł jednorazowo (gwarancja miejsca; obejmuje przygotowanie stanowiska dla dziecka, materiały higieniczne, materiały plastyczne)</li>
        <li>Czesne (opłata bezzwrotna): 950 zł za każdy miesiąc (na 2022 r.).</li>
        <li>Zniżki: 8% na drugie dziecko w placówce, 15% na trzecie i kolejne dziecko w placówce</li>
        <li>Wyżywienie: 16 zł - dzienna stawka żywieniowa za 4 posiłki: śniadanie, II śniadanie, dwudaniowy obiad, podwieczorek (możliwość ustalenia diety) </li>
        <li> Opłaty dodatkowe: ubezpieczenie NNW 36 zł na rok</li>
        <li> Zajęcia dodatkowe: j. angielski - 115 zł/msc.; j. niemiecki - 130 zł/msc./ j. hiszpański - 150zł/msc.</li>
      </ul>,
  buttonLabel: "Skontaktuj się z nami",
  imgStart: false,
  img: svg3,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
  direction: "contact",
  big_picture: false,
};
export const homeObjFour = {
  id: "contact",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Kontakt",
  headline: "Skontaktuj się z nami!",
  description:
      " Znajdziesz nas pod adresem: ul. Księdza Henryka Szumana 9. Numer kontaktowy: 530 373 377.",
  buttonLabel: "Wróć do początku",
  imgStart: false,
  img: svg4,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  direction: "home",
  big_picture: false,
};
export const homeObjFive = {
  id: "monte",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Pedagogika Montessori",
  headline: "Dowiedz się więcej:",
  description:
      "Pedagogikę Montessori łączymy z elementami przedszkola leśnego, którego podstawą jest ideologia pedagogiki waldorfskiej autorstwa Steinera. Jej celem jest wspieranie wszechstronnego, holistycznego rozwoju dziecka w zakresie 3 stref: myślenia, uczuć i woli.",
  buttonLabel: "Zobacz nasze zdjęcia",
  imgStart: false,
  img: svg5,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  direction: "discover",
  big_picture: true,
};