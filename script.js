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
    tr: "Düzenli, programlı, disiplinli ve sorunlara çözüm odaklı bir bireyim. Yazılım teknolojileri alanında internet ve dergiler aracılığıyla güncellenmiş gelişmeleri takip etmekten hoşlanırım. Kodların nasıl daha verimli yazılabileceğine karşı ilgim vardır. ",
    en: " I'm an individual who is tidy, programmatic, disciplined and solution-focused on issue. In the field of software technologies, I like following updated developments through magazines and Internet. I'm interested in how to write codes more efficiently. ",
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
    tr: "Full Stack Geliştirici ( Asp.Net Core | Angular | React )",
    en: "Full Stack Developer ( Asp.Net Core | Angular | React )",
  },
  {
    id: "Ankara",
    tr: "Freelancer, Ankara, TÜRKİYE",
    en: "Freelancer, Ankara, TURKEY",
  },
  {
    id: "One-year",
    tr: "Bir Buçuk Yıllık Tecrübe (Uzaktan)",
    en: "One and A Half Years of Experience (Remote)",
  },

  {
    id: "experience-1",
    tr: "ASP.NET Core Rest-web API ile uygulama geliştirme.",
    en: "Developing applications with ASP.NET Core Rest-Web API.",
  },

  {
    id: "experience-2",
    tr: "Generic Repository ve CQRS tasarım kalıplarıyla çalışmalar yapma.",
    en: "Working on Generic Repository ve CQRS Design Patterns.",
  },
  {
    id: "experience-3",
    tr: "Dependency Injection uygulayarak web servisler oluşturma ve bu servisleri Onion Architecture gibi çok katmanlı yazılım mimarilerine dahil etme.",
    en: "Generating web services by implementing Dependency Injection and including the services in multi-layered software architecture like Onion Architecture.",
  },
  {
    id: "experience-4",
    tr: "Logging mekanizmasını projeye dahil etme (Serilog ve Seq).",
    en: "Including logging mechanism in project (Serilog and Seq).",
  },
  {
    id: "experience-5",
    tr: "Anlık mesajlaşma altyapıları ve araçlarıyla (WebSocket- SignalR, QRCode) çalışmalar.",
    en: "Working on instant message tools and infrastructures (WebSocket- SignalR, QRCode).",
  },
  {
    id: "experience-6",
    tr: "SOLID Prensipleri, SRP ve OOP benimsenmiş Clean Code yazma.",
    en: "Clean Coding adopting SOLID Principles, SRP and OOP.",
  },
  {
    id: "experience-7",
    tr: "Refactoring kültürü ile performans odaklı çalışma.",
    en: "Preformance-focused work by embracing refactoring culture.",
  },
  {
    id: "experience-8",
    tr: "Asenkron programlama mantığıyla veri akışlarını sağlama.",
    en: "Providing data flows with asynchronous programming logic.",
  },
  {
    id: "experience-9",
    tr: "Kimlik doğrulama (Oauth2,JWT token) ve rol tabanlı yetkilendirme mekanizmalarını projeye dahil etme.",
    en: "Including mechanism of authentication (Oauth2,JWT token) and role-based authorization in project.",
  },
  {
    id: "experience-10",
    tr: "JWT Expiration Ayarlama | Refresh Token Konfigürasyonu yapma.",
    en: "Configuring JWT Expiration and Refresh Token.",
  },
  {
    id: "experience-11",
    tr: "Reset Password İle Kullanıcı Şifresini Güncelleme.",
    en: "Updating user password with Reset Password.",
  },
  {
    id: "experience-12",
    tr: "Önyüzde Http Interceptor ile Global Http Error Handling | Arkayüzde Global Exception Handling ile hata kontrollemesi.",
    en: "Cotrolling Error with Http Interceptor ile Global Http Error Handling on Frontend | Global Exception Handling on Backend.",
  },
  {
    id: "experience-13",
    tr: "Mobil uyumlu Responsive tasarımlar hazırlama.",
    en: "Preparing mobile-friendly Responsive designs.",
  },
  {
    id: "experience-14",
    tr: "Seo uyumlu E-Ticaret, Otomasyon ve Yönetim Panellerini uçtan uca Full Stack geliştirmesini yapma ve Multiple Layout'larını tasarlama.",
    en: "Developing end-to-end Full Stack Seo-friendly E-Commerce, Automation and Admin Panels and designing Multiple Layouts of them.",
  },
  {
    id: "experience-15",
    tr: "Debug ve performans optimizasyonu için tarayıcı araçlarını kullanma.",
    en: "Using browser developer tools for debugging and performance optimization.",
  },
  {
    id: "experience-16",
    tr: "Form validasyonlarını Önyüz (Reactive Form) ve Arkayüzde (FluentValidation) sağlama.",
    en: "Providing Form Validations (Reactive Form on Frontend) and (FluentValidation on Backend).",
  },
  {
    id: "experience-17",
    tr: "Angular ve Angular komponent yaşam döngüleri ile efektif tasarımlar yapma.",
    en: "Preparing effective designs by using Angular and Angular Component Lifecycles.",
  },
  {
    id: "experience-18",
    tr: "React ve React komponent yaşam döngüleri ile efektif tasarımlar yapma.",
    en: "Preparing effective designs by using React and React Component Lifecycles.",
  },
  {
    id: "experience-19",
    tr: "Arayüz tasarımlarında yenilikçi ve modern çizgiler kullanma.",
    en: "Using innovative and modern lines on designs of User Interface.",
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
    tr: "Projeler :",
    en: "Projects :",
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
