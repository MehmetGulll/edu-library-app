import React from "react";

interface FooterItemProps {
  title: string;
  content: string;
  link?: "tel" | "mailto" | "map";
}

const FooterItem = ({ title, content, link }: FooterItemProps) => {
  return (
    <div>
      <div className='font-bold text-gray-800'>{title}</div>
      <div className='text-sm text-gray-500'>
        {link ? <a href={link + ":" + content}>{content}</a> : content}
      </div>
    </div>
  );
};

const Footer = () => {
  const footerItems: FooterItemProps[] = [
    {
      title: "Kütüphane Dokümantasyon Daire Başkanlığı",
      content:
        "Prof.Dr. Fuat Sezgin Merkez Kütüphanesi No:207/R D.E.Ü. Tınaztepe Kampüsü 35390 Doğuş Caddesi Buca – İzmir",
    },
    {
      title: "Telefon",
      content: "+90 232 301 80 17",

      link: "tel",
    },
    {
      title: "Mail Adres",
      content: "kutuphane@deu.edu.tr",
      link: "mailto",
    },
  ];

  const footerElements = footerItems.map((item, index) => (
    <FooterItem key={index} {...item} />
  ));

  return (
    <div className='from-light_blue-900 to-light_blue-700 border-t-light_blue-600 flex w-full flex-col gap-8 border-t bg-gradient-to-r p-4 sm:flex-row sm:p-6'>
      <div className=' flex w-full flex-col gap-4 '>{footerElements}</div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12512.321180630806!2d27.2025508!3d38.3702639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9618bf9f8473f%3A0x12299c8ca3ab3507!2sDokuz%20Eyl%C3%BCl%20%C3%9Cniversitesi%20Prof.%20Dr.%20Fuat%20Sezgin%20Merkez%20K%C3%BCt%C3%BCphanesi!5e0!3m2!1str!2str!4v1710524654495!5m2!1str!2str'
        width='350px'
        height='350px'
        className='w-full rounded-lg shadow-lg sm:h-[350px] sm:min-h-[350px] sm:w-[350px] sm:min-w-[350px]'
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Footer;
