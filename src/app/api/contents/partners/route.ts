import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const samplePartnersData = [
    { url: "/partners/laraveli.png", alt: "Laraveli" },
    { url: "/partners/alterra-academy.png", alt: "Alterra Academy" },
    { url: "/partners/codepolitan.png", alt: "Codepolitan" },
    { url: "/partners/yayasan-anak-bangsa-bisa.png", alt: "Yayasan anak bangsa bisa" },
    { url: "/partners/generasi-gigih.png", alt: "Generasi Gigih" },
    { url: "/partners/infoplk.png", alt: "infoplk" },
    { url: "/partners/founders-live.png", alt: "Founders Live" },
    {
      url: "/partners/gerakan-nasional-1000-startup-digital.png",
      alt: "Gerakan Nasional 1000 Startup Digital"
    },
    { url: "/partners/idstack.png", alt: "idstack" },
    { url: "/partners/dummy-logo.png", alt: "Dummy logo" },
    { url: "/partners/HMTI.png", alt: "Himpunan Mahasiswa Teknik Informatika" },
    { url: "/partners/PT-BORNEO-SECODE-DIGITAL.png", alt: "PT BORNEO SECODE DIGITAL" },
    { url: "/partners/IAII.png", alt: "IAII" },
    { url: "/partners/dummy-logo.png", alt: "Dummy logo" },
    { url: "/partners/technopreneur-plk.png", alt: "technopreneur Palangka Raya" },
    { url: "/partners/aidig.png", alt: "Akselerasi Indonesia Digital" },
    { url: "/partners/kominfo-plk.png", alt: "Kominfo Palangka Raya" },
    { url: "/partners/jitara.png", alt: "Jitara" },
    { url: "/partners/founders-live-plk.png", alt: "Founders Live Palangka Raya" },
    { url: "/partners/gradasi.png", alt: "Gradasi" }
  ];
  return NextResponse.json(samplePartnersData);
}
