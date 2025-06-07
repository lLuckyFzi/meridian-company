"use client";

import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import AccordionItem from "@meridian/components/Accordion";

import HeaderSlash from "@meridian/components/Headers/header";
import HeroImage from "../../../public/img/background-hero.png";
import AboutImage from "../../../public/img/background-about.png";
import ContactImage from "../../../public/img/contact-us.png";
import MeridianDetailLogoWhite from "../../../public/logo/meredian-logo-detail-white.png";
import { LogoCollaborations } from "./data/logos";
import ServicesSection from "./partials/ServicesSection";
import SkillCard from "./partials/SkillCard";
import { skillsData } from "./data/skillsData";
import { SecondaryButton } from "@meridian/components/Buttons";

function Home() {
  const accordionData = [
    {
      question:
        "Layanan apa saja yang disediakan oleh PT Meridian Global Utama?",
      answer:
        "Kami menyediakan berbagai layanan survei dan pemetaan, baik darat (terestris) maupun udara, termasuk menggunakan teknologi RTK (Real-Time Kinematic), ETS (Electronic Total Station), dan drone mapping. Kami juga melayani pemetaan topografi, tata ruang, hingga pemodelan 3D.",
    },
    {
      question: "Apakah perusahaan Anda melayani proyek di seluruh Indonesia?",
      answer:
        "Ya, kami melayani proyek di seluruh wilayah Indonesia tanpa terkecuali.",
    },
    {
      question: "Apa keunggulan menggunakan drone untuk pemetaan?",
      answer:
        "Drone dapat menjangkau area sulit, mempercepat proses pemetaan, serta memberikan hasil yang lebih detail dan akurat dengan biaya lebih efisien.",
    },
    {
      question:
        "Bagaimana prosedur awal jika saya ingin menggunakan layanan Anda?",
      answer:
        "Anda bisa menghubungi kami melalui kontak yang tersedia, kemudian kami akan menjadwalkan konsultasi awal untuk memahami kebutuhan proyek Anda.",
    },
  ];
  return (
    <section className="overflow-hidden">
      <section
        id="home"
        className="relative px-32 h-screen text-white overflow-hidden max-lg:px-14 max-[1240px]:px-16 max-sm:px-4"
      >
        <Image
          alt="hero"
          priority
          src={HeroImage}
          fill
          className="absolute right-0 top-0 left-0 w-full object-cover -z-1"
        />
        <div className="h-full flex justify-center flex-col">
          <HeaderSlash
            className="justify-center max-lg:items-center max-lg:text-center"
            headerLine={"SURVEI DAN PEMETAAN"}
            subHeader={
              <p className="max-lg:text-4xl">
                Pemetaan Presisi dengan Pengalaman dalam Membangun{" "}
                <span className="text-teal-accent">Nusantara</span>
              </p>
            }
            headerLineStyle={{
              fontSize: "14px",
            }}
            subHeaderStyle={{ fontSize: "60px" }}
          />
          <div className="translate-y-44 max-lg:translate-y-32 max-sm:translate-y-14">
            <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-y-9">
              <div className="flex gap-x-20 items-center max-lg:gap-x-10 max-lg:text-center">
                <div className="flex flex-col">
                  <p className="font-bold text-5xl max-lg:text-4xl">9+</p>
                  <p className="max-lg:text-[12px]">Kolaborasi</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-5xl max-lg:text-4xl">5+</p>
                  <p className="max-lg:text-[12px]">Tahun Pengalaman</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 items-end max-lg:items-center">
                <p className="text-end max-lg:text-center">
                  Kami menyediakan layanan survei dan pemetaan berbasis
                  teknologi tinggi <br /> untuk mendukung keberhasilan proyek
                  Anda.
                </p>
                <div>
                  <a href={"#about"}>
                    <SecondaryButton
                      className="!border !border-white !rounded-full !text-white !px-8 hover:bg-white hover:!text-teal-primary group"
                      icon={<HiArrowLongRight className="w-6 h-6 text-white group-hover:text-teal-primary" />}
                    >
                      Detail Kita
                    </SecondaryButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white w-full overflow-hidden">
        <div className="marquee flex gap-x-12 py-10 max-md:py-8 animate-marquee">
          {[...LogoCollaborations, ...LogoCollaborations].map((d, index) => (
            <Image
              key={index}
              src={d.url}
              alt={d.alt}
              width={999}
              height={999}
              className="w-36 object-contain max-md:w-24"
            />
          ))}
        </div>
      </div>
      <section id="about" className="scroll-mt-24 flex flex-col-reverse relative my-24 max-[1300px]:my-0">
        <div className="w-[40%] h-[430px] flex flex-col gap-y-8 pl-32 max-[1300px]:px-16 max-[1300px]:w-full max-[1300px]:my-10 max-md:px-7 max-md:h-auto">
          <HeaderSlash
            light={false}
            headerLine={"TENTANG KITA"}
            subHeader={
              <p className="max-lg:text-center max-md:text-4xl">
                JASA <span className="text-teal-accent">SURVEI</span> DAN{" "}
                <span className="text-teal-accent">PEMETAAN</span> TERDEPAN DI
                INDONESIA
              </p>
            }
            subHeaderStyle={{ fontWeight: 800, fontSize: "36px" }}
            headerLineStyle={{ fontSize: "14px", fontWeight: 700 }}
          />
          <p className="text-sm text-gray-400 max-lg:text-center">
            Kami telah sukses menyelesaikan puluhan proyek di berbagai sektor,
            dan berhasil meraih kepercayaan serta kepuasan dari para klien kami.
            Partner proyek kami berasal dari pemerintahan maupun swasta. Baik
            melalui metode terestris seperti RTK, ETS, maupun pemetaan udara
            menggunakan drone. Kami berkomitmen untuk memberikan layanan
            berkualitas tinggi yang memenuhi dan melampaui standar industri.
          </p>
          <div className="max-lg:justify-center max-lg:flex">
            <SecondaryButton className="border !px-10 border-teal-primary text-teal-primary !rounded-none hover:!bg-teal-primary hover:!text-white">
              Mulai Sekarang
            </SecondaryButton>
          </div>
        </div>
        <div className="w-[750px] absolute right-0 top-0 h-[655px] max-[1300px]:relative max-[1300px]:w-full">
          <div className="flex flex-col justify-between h-full p-9 z-1 absolute max-[1300px]:px-32 max-[1300px]:text-center max-[1300px]:right-0 max-[1300px]:left-0 max-[1300px]:items-center max-md:px-16">
            <Image
              src={MeridianDetailLogoWhite}
              alt="logo-detail-white"
              className="w-[320px]"
            />
            <div className="flex gap-x-20 items-center text-white">
              <div className="flex flex-col">
                <p className="font-bold text-5xl">9+</p>
                <p>Kolaborasi</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-5xl">5+</p>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
          <Image
            src={AboutImage}
            width={9999}
            height={9999}
            className="w-full max-[1300px]:h-full object-cover absolute"
            alt="about"
          />
        </div>
      </section>
      <ServicesSection />
      <section id="skills" className="h-screen my-28 px-32 flex gap-x-14 max-lg:px-16 max-[1300px]:flex-col max-[1300px]:gap-10 max-md:px-8 max-lg:h-auto">
        <HeaderSlash
          headerLine={"KEMAMPUAN"}
          subHeader={<p className="w-80 max-lg:text-center max-lg:w-auto max-[1300px]:w-full text-5xl max-md:text-4xl">KEAHLIAN & TEKNOLOGI UTAMA</p>}
          subHeaderStyle={{ fontWeight: 700, fontSize: "48px" }}
          headerLineStyle={{ fontSize: "14px", fontWeight: 700 }}
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-7 h-[80%] max-lg:flex max-lg:flex-col max-lg:h-auto">
          {skillsData.map((d) => {
            return (
              <SkillCard
                idx={d.id}
                icon={d.icon}
                title={d.title}
                description={d.description}
              />
            );
          })}
        </div>
      </section>
      <div className="flex items-center bg-teal-primary">
        <div>
          <Image
            src={ContactImage}
            alt="contact"
            width={9999}
            height={9999}
            className="w-full max-lg:hidden"
          />
        </div>
        <div className="text-white h-full pr-32 pl-12 max-lg:text-center max-[1080px]:p-12 max-md:p-7">
          <HeaderSlash
            light
            headerLine={"HUBUNGI KAMI"}
            subHeader={<p className="w-[487px] max-lg:w-auto max-lg:text-center text-5xl max-md:text-4xl">Tertarik Bekerja Sama?</p>}
            subHeaderStyle={{ fontWeight: 700 }}
            headerLineStyle={{ fontSize: "14px", fontWeight: 700 }}
          />
          <p className="mt-5 text-sm">
            Jangan ragu untuk menghubungi kami dan jelaskan kebutuhan survei
            atau pemetaan Anda. Tim kami akan segera merespons dengan solusi
            terbaik.
          </p>
          <div className="mt-10 max-lg:flex max-lg:justify-center">
            <SecondaryButton
              className="!rounded-none border !border-white !text-white !text-sm hover:!bg-white hover:!text-teal-primary duration-300 !gap-x-4 group"
              icon={<FaPhoneAlt className="w-4 h-4 text-white group-hover:text-teal-primary" />}
            >
              Mulai Sekarang
            </SecondaryButton>
          </div>
        </div>
      </div>
      <section id="faq" className="h-auto flex items-start py-36 px-32 max-lg:px-16 max-lg:flex-col max-md:px-7 max-lg:py-12">
        <div className="flex justify-between w-full max-[1280px]:flex-col max-[1280px]:gap-y-9">
          <HeaderSlash
            slash={false}
            headerLine="FAQ's"
            subHeader={<p className="w-[487px] max-[1280px]:text-center text-5xl max-[1280px]:w-auto max-md:text-3xl">Kami Di Sini untuk Membantu</p>}
            subHeaderStyle={{ fontWeight: 700 }}
            headerLineStyle={{ fontSize: "14px", fontWeight: 700 }}
          />
          <div className="max-w-2xl mx-auto">
            {accordionData.map((item, idx) => (
              <AccordionItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
