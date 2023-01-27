const btnPdf = document.querySelector("#btnPdf");

btnPdf.addEventListener("click", () => {
  const myCv = document.querySelector("#myCv");
  var opt = {
    margin: 0,
    filename: "ÇağatayBozayCv.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(myCv).save();
});

const language = document.querySelector("#language");
language.addEventListener("change", (event) => {
  translate(event.target.value);
});

const dictionary = [
  {
    id: "title",
    tr: "KİŞİSEL",
    en: "PERSONAL",
  },
  {
    id: "introduction-1",
    tr: "Düzenli, programlı, disiplinli ve sorunlara çözüm odaklı bir bireyim. Yazılım teknolojileri alanında internet ve dergiler aracılığıyla güncellenmiş gelişmeleri takip etmekten hoşlanırım. Özellikle Javascript ve React'ta kodların nasıl daha verimli yazılabileceğine karşı ilgim vardır. ",
    en: " I'm an individual who is tidy, programmatic, disciplined and solution-focused on issue. In the field of software technologies, I like following updated developments through magazines and Internet. I'm interested in how to write codes more efficiently in Javascript and React particularly. ",
  },
  {
    id: "introduction-2",
    tr: "Anadilim Türkçe'ye ek olarak, herhangi bir uluslararası platformun çatısı altında hem İngilizce hem de Almanca olarak yazmada ve konuşmada iletişim kuracak yeterli yetkinliğe sahip olduğumu düşünüyorum. Bu nedenle, karşılıklı etkileşim gerektiren herhangi bir küresel ağ veya çevreye adapte olabileceğimi söylemek zor değildir.",
    en: " In addition to my native language Turkish, I consider to have enough proficiency to contact verbally and in writing both in English and German languages within the framework of any international platform. Therefore, it is not hard to say that I can adapt in any global network or environment which requires interactivity. ",
  },
  {
    id: "isim",
    tr: "İsim",
    en: "Name",
  },
  {
    id: "adres",
    tr: "Adres",
    en: "Adress",
  },
  {
    id: "telefon",
    tr: "Telefon Numarası",
    en: "Phone Number",
  },
  {
    id: "dogumTarihi",
    tr: "Doğum Tarihi",
    en: "Date of Birth",
  },
  {
    id: "dogumYeri",
    tr: "Doğum Yeri",
    en: "Place of Birth",
  },
  {
    id: "yetenekler",
    tr: "YETENEKLER",
    en: "SKILLS",
  },
  {
    id: "liderlik",
    tr: "Liderlik",
    en: "Leadership",
  },
  {
    id: "musteri",
    tr: "Müşteri İlişkileri",
    en: "Customer Relations",
  },
  {
    id: "envanter",
    tr: "Envanter",
    en: "Inventory",
  },
  {
    id: "finans",
    tr: "Finans",
    en: "Finance",
  },
  {
    id: "hobiler",
    tr: "HOBİLER",
    en: "INTERESTS",
  },
  {
    id: "extrem",
    tr: "Extreme Yaz Sporları",
    en: "Extreme Summer Sports",
  },
  {
    id: "kamp",
    tr: "Kamp Yapmak",
    en: "Camping",
  },
  {
    id: "diller",
    tr: "DİLLER",
    en: "LANGUAGES",
  },
  {
    id: "turkce",
    tr: "Türkçe",
    en: "Turkish",
  },
  {
    id: "ingilizce",
    tr: "İngilizce",
    en: "English",
  },
  {
    id: "almanca",
    tr: "Almanca",
    en: "German",
  },
  {
    id: "isTecrubesi",
    tr: "İş Tecrübesi",
    en: "Work Experience",
  },
  {
    id: "React",
    tr: "Frontend-React Geliştirici",
    en: "Frontend-React Developer",
  },
  {
    id: "Ankara",
    tr: "Udemig Şirketi, Ankara, TÜRKİYE",
    en: "Udemig Company, Ankara, TURKEY",
  },
  {
    id: "experience-1",
    tr: "Git versiyonlama ile bireysel ve takım çalışmaları yapılarak projeler oluşturuldu.",
    en: "It has been created projects with Git version control system by being made individual and team work.",
  },

  {
    id: "experience-2",
    tr: "Real Dom daki veriler, Virtual Dom da javascript ES6 standartları kullanılarak manipüle edildi ve dinamik yapılar elde edildi.",
    en: "The datas in Real Dom have been manipulated by beeing used javascript ES6 standarts in Virtual Dom and so dynamic structures have been acquired.",
  },
  {
    id: "experience-3",
    tr: "Local Storage ye kalıcı veri aktarma ve oradaki verileri okuma.",
    en: "Transfering permanent data to Local Storage and reading datas there.",
  },
  {
    id: "experience-4",
    tr: "HTTP protokolünü kullanan Rest API ye, Axios kütüphanesi kullanılarak server taraflı GET, POST, PUT, DELETE gibi request ler atılıp, veri alışverişi sağlandı.",
    en: "It has been made serverside request such as GET, POST, PUT, DELETE to Rest Api using HTTP protocol by using Axios Library and data flow has been provided.",
  },
  {
    id: "experience-5",
    tr: "Json Fake API ile Full stack projeler oluşturuldu.",
    en: "It has been created full stack projects with JSON Fake API.",
  },
  {
    id: "experience-6",
    tr: "Asenkron fonksiyon yapıları kurularak promise result lar elde edildi.",
    en: "It has been acquired promise results by being set up asynchronous functional structures.",
  },
  {
    id: "experience-7",
    tr: "Redux ile State yönetimi entegre edilerek verilere bütün componentlerde erişim sağlandı.",
    en: "In all components have been reached datas by being entegrated State Management with Redux.",
  },
  {
    id: "experience-8",
    tr: "Props Drilling yapmaksızın Context API ile componentler arası veri akışı sağlandı.",
    en: "Without Props Drilling has been provided data flow between components with Context API.",
  },
  {
    id: "experience-9",
    tr: "Kullanıcı deneyimini performe eden React Hook's lar kullanıldı.",
    en: "It has been used React Hooks performing user experience.",
  },
  {
    id: "experience-10",
    tr: "Veri ve tarayıcı davranışı manüpülasyonunu sağlayan Life Cycle metotlar kullanıldı.",
    en: "It has been used Life Cycle Methods helping data and browser manipulation.",
  },
  {
    id: "experience-11",
    tr: "Form validasyonu işlemleri yapıldı.",
    en: "Form validation process has been made.",
  },
  {
    id: "experience-12",
    tr: "Pagination ve Search işlemleri yapıldı.",
    en: "Pagination and search process has been made.",
  },
  {
    id: "experience-13",
    tr: "Local Storage kullanarak Authentication yapıldı.",
    en: "Authentication has been made using Local Storage.",
  },
  {
    id: "experience-14",
    tr: "Kütüphane kullanılan veya kullanılmayan responsive web tasarımlar yapıldı.",
    en: "Reasponsive web designs have been made with or without library.",
  },
  {
    id: "experience-15",
    tr: "Bootstrap ve Material UI gibi modern kütüphaneler kulanılarak hızlı ve güzel arayüzler elde edildi.",
    en: "By using modern libraries such as Bootstrap ve Material UI, it has been acquired quick and fantastic interfaces.",
  },

  {
    id: "egitim",
    tr: "Eğitim & Nitelikler",
    en: "Education & Qualifications",
  },
  {
    id: "otomotiv",
    tr: "Otomotiv Mühendisliği",
    en: "Automotive Engineering",
  },
  {
    id: "lisans1",
    tr: "Lisans Derecesi : 2,71/4",
    en: "Bachelor Degree : 2,71/4",
  },
  {
    id: "cukurova",
    tr: "Çukurova Üniversitesi, Adana",
    en: "Cukurova University, Adana",
  },
  {
    id: "uluslararasi",
    tr: "Uluslararası İlişkiler",
    en: "International Relations",
  },
  {
    id: "lisans2",
    tr: "Lisans Derecesi : 2,42/4",
    en: "Bacahelor Degree : 2,42/4",
  },
  {
    id: "anadolu",
    tr: "Anadolu Üniversitesi, Eskişehir",
    en: "Anadolu University, Eskişehir",
  },
  {
    id: "One-year",
    tr: "Bir Yıllık Tecrübe (Uzaktan)",
    en: "One-Year Experience (Remote)",
  },
  {
    id: "eylul2009",
    tr: "Eylül 2009-Haziran 2014",
    en: "September 2009-June-2014",
  },
  {
    id: "eylul2018",
    tr: "Eylül 2018-Haziran 2021",
    en: "September 2018-June 2021",
  },
  {
    id: "yetenek",
    tr: "Yetenekler",
    en: "Skils",
  },

  {
    id: "referanslar",
    tr: "Referanslar",
    en: "References",
  },
  {
    id: "Arabuleu",
    tr: "Udemig'in Kurucusu",
    en: "Founder of Udemig",
  },
];

function translate(selectedLanguage) {
  dictionary.map((item) => {
    const element = document.getElementById(item.id);
    switch (selectedLanguage) {
      case "tr":
        element.innerText = item.tr;
        break;
      case "en":
        element.innerText = item.en;
        break;
      default:
        console.log("default");
        break;
    }
  });
}
