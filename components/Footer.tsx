import Image from "next/image";

const Footer = () => {
  const socmed = [
    {
      id: 1,
      imgUrl: "/assets/icons/Socmed/Discord.svg",
      label: "Discord",
    },
    {
      id: 2,
      imgUrl: "/assets/icons/Socmed/Email.svg",
      label: "Email",
    },
    {
      id: 3,
      imgUrl: "/assets/icons/Socmed/Facebook.svg",
      label: "Facebook",
    },
    {
      id: 4,
      imgUrl: "/assets/icons/Socmed/Instragram.svg",
      label: "Instagram",
    },
    {
      id: 5,
      imgUrl: "/assets/icons/Socmed/LinkedIn.svg",
      label: "LinkedIn",
    },
    {
      id: 6,
      imgUrl: "/assets/icons/Socmed/Medium.svg",
      label: "Medium",
    },
    {
      id: 7,
      imgUrl: "/assets/icons/Socmed/Telegram.svg",
      label: "Telegram",
    },
    {
      id: 8,
      imgUrl: "/assets/icons/Socmed/Twitter.svg",
      label: "Twitter",
    },
    {
      id: 9,
      imgUrl: "/assets/icons/Socmed/Youtube.svg",
      label: "Youtube",
    },
  ];
  return (
    <div className="flex justify-center items-center text-white">
      <div className="max-w-6xl h-auto max-h-full w-full flex flex-col justify-center items-center gap-x-16 uppercase mb-[3rem] mx-5 ">
        <Image
          src="/assets/icons/LEARNAURORALOGO.svg"
          height={200}
          width={200}
          alt="Learn Aurora"
        />
        <div className="flex flex-wrap justify-center items-center">
          {socmed.map(({ imgUrl }) => {
            return (
              <Image src={imgUrl} height={40} width={40} alt="Learn Aurora" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
