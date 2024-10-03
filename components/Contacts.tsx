import React from "react";
import ContactBadge from "./ContactBadge";

export interface Contact {
  icon: string;
  value: string;
  link?: string;
}

const contactsItems: Contact[] = [
  { icon: "mail", value: "Mail", link: "mailto:salvo.visk@gmail.com" },
  { icon: "telegram", value: "Telegram", link: "https://t.me/salvovisk" },
  {
    icon: "linkedin",
    value: "Linkedin",
    link: "https://www.linkedin.com/in/salvatore-viscuso-developer/",
  },
];

const Contacts = () => {
  return (
    <div className='shadow-inner w-full bg-backgroundVariant h-full justify-center items-center md:justify-start pt-32 px-20 sm:pb-40 pb-20 flex flex-col'>
      <div className='w-screen md:w-full max-w-[1200px] flex flex-col gap-6 lg:px-36 px-10 justify-center items-center'>
        <p className='text-center text-4xl text-white font-extralight'>
          Contact me
        </p>
        <div className='flex-row flex flex-wrap justify-center gap-6'>
          {contactsItems.map((c, idx) => (
            <ContactBadge
              key={idx}
              link={c.link}
              icon={c.icon}
              value={c.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
