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
    tr: "Uzman yazılım mühendisleri ve deneyimli geliştiriciler eşliğinde Frontend-React uygulamalarına ilişkin birçok projede yer aldım.",
    en: "I have been involved in a lot of projects related to Frontend-React applications practically accompanied by a team of expert Software Engineers and experienced Developers.",
  },
  {
    id: "experience-2",
    tr: "Küçük-orta ölçekte olan bu projelerle, bir Frontend-React Geliştirici olarak gerekli teknolojileri öğrenme ve çeşitli tecrübeler edinmeyle birlikte, Junior-Middle ölçekte beklenilen şeyi yerine getirmek için yeterli yetkinliğe sahip olduğumu düşünüyorum.",
    en: "Along with learning required technologies and acquiring various experiences as a React Developer through these projects which are on small-middle scale, I consider to have enough proficiency to carry out what expected in the Junior-Middle scale.",
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

  {
    id: "hospital",
    tr: "Hastane Otomasyonu",
    en: "Hospital Automation",
  },

  {
    id: "hospital-1",
    tr: "Giriş yapılan ve tedavi edilen hasta verilerini veri tabanına kaydetmeye ve bu veriler üzerinde değişiklikler yapmaya izin veren tamamen dinamik bir web uygulamasıdır.",
    en: "It is a full-dynamic web application allowing to save patient datas admissed and examined on database and to make changes over these datas.",
  },
  {
    id: "hospital-2",
    tr: "Sistemde veri girdilerinin doğrulamasını kontrol eden bütün uyarılar mevcuttur. Örn; randevu zamanının ve hasta telefon numaralarının çakışması durumunda randevu girişi yapamama gibi.",
    en: "All warnings checking validations of data entrances in system are available. For instance; in case of intersection of appointment time and patients' phone numbers, not to be able to appointment admission and so on.",
  },
  {
    id: "hospital-3",
    tr: "Hasta takibinin hızlı ve etkili yapabilmek adına, hasta ismi araması ve sayfalama mevcuttur.",
    en: "In order to be able to be made patient follow-up rapidly and effectively, patient name searching and pagination are available.",
  },
  {
    id: "hospital-4",
    tr: "Sistemin en çarpıcı tarafı, randevusu gelen herhangi bir hasta için randevu zamanının geldiğini bildiren otomatik bir kontrol mekanizmasının bulunmasıdır. Randevu zamanına 5 dakika kalınca, hastaya ait randevu verisi sarı renge dönüşür. Şayet randevusu geçmişse, otomatik kontrol mekanizması, hastanın randevu verisini `Geçmiş Randevular` için ayrılan bölgeye taşır.",
    en: "The most striking aspect of system is existance of an automatic control mecanism notifying that the appointment time has come for any patient whose appointment has come. When it is five minutes left for apppointment time, appointment data belonging to the patient turn into yellow color. If appointment time has passed, automatic control mecanism carry appointment data of the patient to allocated field for `Passed Appointments`.",
  },
  {
    id: "hospital-5",
    tr: "Uygulama kullanıma hazır son versiyonudur. Bütün bu özellikler sayesinde binlerce hastanın takibi kolayca yapılabilir.",
    en: "The application has the last version being ready for use. Thanks to all these features, folow-up of thousands of patients easily.",
  },
  {
    id: "hospital-6",
    tr: "Yapım aşamasının Frontend kısmında React, Redux, Material UI ve Boostrap kütüphaneleri kullanılırken, Backend kısmında JSON Rest Api kullanılmıştır. Bütün aşamalarda Javascript ES6 standartları kullanılmıştır.",
    en: "While React, Redux, Material UI ve Boostrap libraries have been used in Frontend section of construction stage, JSON Rest Api has been used in Backend section. In all stages, Javascript ES6 standarts have been used.",
  },
  {
    id: "hospital-7",
    tr: "Uygulamanın detaylarını ve çalışır halini görmek ve için buraya tıklayınız...",
    en: "In order to see details of application and the functioning of system, click here...",
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
