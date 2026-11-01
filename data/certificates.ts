/**
 * Typed Certificates Data for Anass Chenguiti's Engineering Portfolio
 * Generated according to technical portfolio specification.
 */

export interface Certificate {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  filePath: string;
  previewImage?: string;
  fileType: 'pdf' | 'image';
  issuer?: string;
  date?: {
    fr: string;
    en: string;
  };
  link?: string;
  credentialId?: string;
  category?: 'ai' | 'dev' | 'data' | 'management';
}

export const certificates: Certificate[] = [
  {
    id: "cert-interactivity-js",
    previewImage: "images/certificates/cert-interactivity-js.png",
    title: {
      fr: "Interactivity with JavaScript",
      en: "Interactivity with JavaScript"
    },
    filePath: "certificats/Certificat Interactivity with JavaScript.pdf",
    fileType: "pdf",
    issuer: "University of Michigan (Coursera)",
    date: {
      fr: "21 Novembre 2024",
      en: "November 21, 2024"
    },
    link: "https://coursera.org/verify/RD0YNB5VXHPL",
    credentialId: "RD0YNB5VXHPL",
    category: "dev"
  },
  {
    id: "cert-intro-oop-cpp",
    previewImage: "images/certificates/cert-intro-oop-cpp.png",
    title: {
      fr: "Introduction à la programmation orientée objet en C++",
      en: "Introduction to Object-Oriented Programming in C++"
    },
    filePath: "certificats/Certificat Introduction à la programmation orientée objet.pdf",
    fileType: "pdf",
    issuer: "École Polytechnique Fédérale de Lausanne (Coursera)",
    date: {
      fr: "06 Janvier 2025",
      en: "January 6, 2025"
    },
    link: "https://coursera.org/verify/751B0A+DD9-9",
    credentialId: "751B0A+DD9-9",
    category: "dev"
  },
  {
    id: "cert-big-data",
    previewImage: "images/certificates/cert-big-data.png",
    title: {
      fr: "Introduction to Big Data",
      en: "Introduction to Big Data"
    },
    filePath: "certificats/Coursera RSFMYY110802.pdf",
    fileType: "pdf",
    issuer: "University of California San Diego (Coursera)",
    date: {
      fr: "08 Mai 2026",
      en: "May 8, 2026"
    },
    link: "https://coursera.org/verify/RSFMYY110802",
    credentialId: "RSFMYY110802",
    category: "data"
  },
  {
    id: "cert-agile-pm",
    previewImage: "images/certificates/cert-agile-pm.png",
    title: {
      fr: "Agile Project Management",
      en: "Agile Project Management"
    },
    filePath: "certificats/Coursera Z0BWNIGVHUT5.pdf",
    fileType: "pdf",
    issuer: "Google (Coursera)",
    date: {
      fr: "08 Mai 2026",
      en: "May 8, 2026"
    },
    link: "https://coursera.org/verify/Z0BWNIGVHUT5",
    credentialId: "Z0BWNIGVHUT5",
    category: "management"
  },
  {
    id: "cert-software-design",
    previewImage: "images/certificates/cert-software-design.png",
    title: {
      fr: "Software Design and Project Management",
      en: "Software Design and Project Management"
    },
    filePath: "certificats/Software Design and Project Management.pdf",
    fileType: "pdf",
    issuer: "The Hong Kong University of Science and Technology (Coursera)",
    date: {
      fr: "19 Avril 2025",
      en: "April 19, 2025"
    },
    link: "https://coursera.org/verify/QUW7LDUHFW0D",
    credentialId: "QUW7LDUHFW0D",
    category: "management"
  },
  {
    id: "cert-intro-ml",
    previewImage: "images/certificates/cert-intro-ml.png",
    title: {
      fr: "Introduction to Machine Learning",
      en: "Introduction to Machine Learning"
    },
    filePath: "certificats/certificat_Introduction to Machine Learning.pdf",
    fileType: "pdf",
    issuer: "Duke University (Coursera)",
    date: {
      fr: "15 Janvier 2026",
      en: "January 15, 2026"
    },
    link: "https://coursera.org/verify/46H91F2RSFLI",
    credentialId: "46H91F2RSFLI",
    category: "ai"
  },
  {
    id: "cert-ml-python",
    previewImage: "images/certificates/cert-ml-python.png",
    title: {
      fr: "Machine Learning with Python",
      en: "Machine Learning with Python"
    },
    filePath: "certificats/certificat_Machine Learning with Python.pdf",
    fileType: "pdf",
    issuer: "IBM (Coursera)",
    date: {
      fr: "15 Janvier 2026",
      en: "January 15, 2026"
    },
    link: "https://coursera.org/verify/TCH409YZ35MX",
    credentialId: "TCH409YZ35MX",
    category: "ai"
  },
  {
    id: "cert-nosql",
    previewImage: "images/certificates/cert-nosql.png",
    title: {
      fr: "Introduction to NoSQL Databases",
      en: "Introduction to NoSQL Databases"
    },
    filePath: "certificats/certificat_NoSql.pdf",
    fileType: "pdf",
    issuer: "IBM (Coursera)",
    date: {
      fr: "15 Janvier 2026",
      en: "January 15, 2026"
    },
    link: "https://coursera.org/verify/UM35AZ1JXW8F",
    credentialId: "UM35AZ1JXW8F",
    category: "data"
  },
  {
    id: "cert-python-web",
    previewImage: "images/certificates/cert-python-web.png",
    title: {
      fr: "Using Python to Access Web Data",
      en: "Using Python to Access Web Data"
    },
    filePath: "certificats/python certificate.pdf",
    fileType: "pdf",
    issuer: "University of Michigan (Coursera)",
    date: {
      fr: "29 Avril 2025",
      en: "April 29, 2025"
    },
    link: "https://coursera.org/verify/JX7UQBCTCO0X",
    credentialId: "JX7UQBCTCO0X",
    category: "dev"
  }
];
