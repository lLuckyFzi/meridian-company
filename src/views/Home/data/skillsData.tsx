import { GiProcessor } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiChartLineBold } from "react-icons/pi";
import { RiSpeakAiFill } from "react-icons/ri";

export const skillsData = [
  {
    id: 1,
    icon: (
      <RiSpeakAiFill className="w-12 h-12 text-teal-primary group-hover:text-white" />
    ),
    title: "PENGETAHUAN TEKNIS",
    description:
      "Memiliki pemahaman mendalam tentang prinsip-prinsip geodesi, pemetaan, dan survei tanah. Ini termasuk pengetahuan tentang teknik-teknik pengukuran, alat-alat survei, dan perangkat lunak pemetaan.",
  },
  {
    id: 2,
    icon: (
      <HiMiniUserGroup className="w-12 h-12 text-teal-primary group-hover:text-white" />
    ),
    title: "GREAT TEAM WORK",
    description:
      "Kami memiliki tim dengan kemampuan menguasai perangkat lunak pemetaan dan analisis GIS, serta kemampuan untuk mengintegrasikan data survei ke dalam sistem informasi geospasial. ",
  },
  {
    id: 3,
    icon: (
      <PiChartLineBold className="w-12 h-12 text-teal-primary group-hover:text-white" />
    ),
    title: "KEMAMPUAN ANALISIS DAN INTERPRETASI DATA",
    description:
      "Mampu menganalisis data survei dan menghasilkan informasi yang akurat dan dapat diandalkan. Kemampuan untuk menginterpretasikan data dari berbagai sumber dan menghasilkan peta yang jelas.",
  },
  {
    id: 4,
    icon: (
      <GiProcessor className="w-12 h-12 text-teal-primary group-hover:text-white" />
    ),
    title: "TEKNOLOGI TERKINI",
    description:
      "Menggunakan teknologi terkini dan up to date, guna untuk mendapatkan hasil yang maksimal. Karena hasil pekerjaan kami akan membuat klien kami puas dan tidak mengecewakan.",
  },
];
