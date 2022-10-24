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
    id: "introduction",
    tr: "Düzenli, programlı, disiplinli ve sorunlara çözüm odaklı bir bireyim. Yazılım teknolojileri alanında internet ve dergiler aracılığıyla güncellenmiş gelişmeleri takip etmekten hoşlanırım. Özellikle Javascript ve React'ta kodların nasıl daha verimli yazılabileceğine karşı ilgim vardır. Yazılıma ek olarak, İngilizce ve Almanca dilllerinde iletişim kurabilirim ve elimden gelenin en iyisini yapmaya hazırım.",
    en: " I'm an individual who is ordered, programmed, disciplined and solution-focused on issue. In the field of software technologies, I like following updated developments through magazines and Internet. I'm interested in how to write codes more efficiently in Javascript and React particularly. In addition to software, I can set up contact in English and German language and I am ready to do my best.",
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
    id: "stajyer",
    tr: "Stajyer Mühendis",
    en: "Intern Engineer",
  },
  {
    id: "adanaTurkiye",
    tr: "Temsa Global, Adana, Türkiye",
    en: "Temsa Global, Adana, Turkey",
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
    id: "subat2014",
    tr: "Şubat 2014-Haziran 2014",
    en: "February 2014-June 2014",
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
    id: "basarılar",
    tr: "Başarılar",
    en: "Achivements",
  },
  {
    id: "ydsGe",
    tr: "Yabancı Dil Sınavı(Almanca)",
    en: "Foreign Language Exam (German)",
  },
  {
    id: "ydsEn",
    tr: "Yabancı Dil Sınavı(İngilizce)",
    en: "Foreign Language Exam (English)",
  },
  {
    id: "kpss",
    tr: "Kamu Personel Seçme Sınavı",
    en: "Public Personnel Selection Examination",
  },
  {
    id: "ales",
    tr: "Akademik Personel ve Lisansüstü Eğitimi Giriş Sınavı",
    en: "Academic Personnel and Postgraduate Education Entrance Examination",
  },
  {
    id: "nisan2022",
    tr: "Nisan 2022",
    en: "April 2022",
  },
  {
    id: "eylul2019",
    tr: "Eylül 2019",
    en: "Sept 2019",
  },
  {
    id: "mayis2016",
    tr: "Mayıs 2016",
    en: "May 2016",
  },
  {
    id: "Eylul2019",
    tr: "Eylül 2019",
    en: "Sept 2019",
  },
  {
    id: "derece1",
    tr: "Derece:47,5/100",
    en: "Degree:47,5/100",
  },
  {
    id: "derece2",
    tr: "Derece:77,5/100",
    en: "Degree:77,5/100",
  },
  {
    id: "derece3",
    tr: "Derece:82,0/100",
    en: "Degree:82,0/100",
  },
  {
    id: "derece4",
    tr: "Derece:72,5/100",
    en: "Degree:72,5/100",
  },
  {
    id: "referanslar",
    tr: "Referanslar",
    en: "References",
  },
  {
    id: "udemig",
    tr: "Udemig'in Kurucusu",
    en: "Founder of Udemig",
  },
  {
    id: "tel",
    tr: "Telefon",
    en: "Phone",
  },
  {
    id: "responsive",
    tr: "1-Kütüphane",
    en: "1-Library",
  },
  {
    id: "todo",
    tr: "2-to-do Listeleme Projesi",
    en: "2-to do List Project",
  },
  {
    id: "resim",
    tr: "3-Hesap Makinesi",
    en: "3-Calculator",
  },
  {
    id: "responsiveAcıklama",
    tr: "Data eklemeye ek olarak, eklenen datanın silme ve düzenleme işlevleri Redux entegre ederek ele alındı. Gerekli link yönlendirmeleri Routes-Dom aracılığıyla sağlandı.",
    en: "In addition to adding data, it has been handled deleting and editing functions of added data by integrating Redux. Required link navigations have been provided by means of Routes-Dom.",
  },
  {
    id: "todoAcıklama",
    tr: "Benim için son derece öğretici olan ve temel Javascript bilgisini öğrendiğim bir deneyimdi.",
    en: "It was an experience which is exteremely teaching for me and by which I have learned the basic Javascript knowledge.",
  },
  {
    id: "resimAcıklama",
    tr: "Yapısı birçok state içeren bu projede, çoklu state yönetiminin gerçekleştirilebilmesi için useReducer kullanıldı.",
    en: "In this project whose structure includes a lot of states, in order that multiply state management could have been realized, useReducer has been used.",
  },
  {
    id: "projeler",
    tr: "Projeler",
    en: "Projects",
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
