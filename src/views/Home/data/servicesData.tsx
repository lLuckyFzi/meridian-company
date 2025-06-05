import { BiRuler } from "react-icons/bi";
import ServicesMeasurement from "../../../../public/img/services-measurement.png";
import ServicesTopography from "../../../../public/img/services-topography.png";
import ServicesDrone from "../../../../public/img/services-drone.png";
import ServicesGeogprahy from "../../../../public/img/services-geography.png";
import { FaRulerCombined } from "react-icons/fa6";
import { MdMap } from "react-icons/md";
import { PiDroneFill } from "react-icons/pi";
import { HiCpuChip } from "react-icons/hi2";

export const ServicesData = [
    {
        id: 1,
        icon: <FaRulerCombined className="w-10 h-10 text-white" /> ,
        img: ServicesMeasurement,
        title: "Pengukuran Lahan",
        description: "Pengukuran yang dilakukan untuk penentuan batas lahan, perencanaan bangunan, dan pengembangan lahan."
    },
    {
        id: 2,
        icon: <MdMap className="w-10 h-10 text-white" /> ,
        img: ServicesTopography,
        title: "Pengukuran Topography",
        description: "Pemetaan permukaan tanah untuk pembangunan infrastruktur seperti jalan, jembatan, dan gedung."
    },
    {
        id: 3,
        icon: <PiDroneFill className="w-10 h-10 text-white" /> ,
        img: ServicesDrone,
        title: "Foto Udara dan Lidar",
        description: "Pemetaan dengan drone untuk mendapatkan gambar dari udara secara langsung dan area yang luas."
    },
    {
        id: 4,
        icon: <HiCpuChip className="w-10 h-10 text-white" /> ,
        img: ServicesGeogprahy,
        title: "Sistem Informasi Geografis",
        description: "Pengembangan SIG untuk pengambilan keputusan publik menggunakan analisa data spasial."
    },
]