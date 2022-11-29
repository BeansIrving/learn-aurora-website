import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socmed = [
    {
      id: 1,
      imgUrl: "/assets/icons/Socmed/Discord.svg",
      label: "Discord",
      link: "https://discord.gg/HVhQf4xW5Y",
    },
    {
      id: 2,
      imgUrl: "/assets/icons/Socmed/Email.svg",
      label: "Email",
      link: "learnaurora@gmail.com",
    },
    {
      id: 3,
      imgUrl: "/assets/icons/Socmed/Facebook.svg",
      label: "Facebook",
      link: "https://facebook.com/learnaurora",
    },
    {
      id: 4,
      imgUrl: "/assets/icons/Socmed/Instragram.svg",
      label: "Instagram",
      link: "https://instagram.com/learn_aurora",
    },
    {
      id: 5,
      imgUrl: "/assets/icons/Socmed/LinkedIn.svg",
      label: "LinkedIn",
      link: "https://www.linkedin.com/company/learn-aurora-club",
    },
    {
      id: 6,
      imgUrl: "/assets/icons/Socmed/Medium.svg",
      label: "Medium",
      link: "https://medium.com/@learnaurora",
    },
    {
      id: 7,
      imgUrl: "/assets/icons/Socmed/Telegram.svg",
      label: "Telegram",
      link: "https://t.me/+SlnSP7Qpe7YxYmFl",
    },
    {
      id: 8,
      imgUrl: "/assets/icons/Socmed/Twitter.svg",
      label: "Twitter",
      link: "https://twitter.com/LearnAurora",
    },
    {
      id: 9,
      imgUrl: "/assets/icons/Socmed/Youtube.svg",
      label: "Youtube",
      link: "https://youtube.com/@learnauroraofficial",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl h-[auto] lg:h-screen max-h-full gap-x-16 text-white my-[3rem]">
      <div>
        <div className="flex flex-col justify-center items-center uppercase mx-5 my-[3rem]">
          <Image
            src="/assets/icons/LEARNAURORALOGO.svg"
            height={200}
            width={200}
            alt="Learn Aurora"
          />
          <div className="flex flex-wrap justify-center items-center">
            {socmed.map(({ imgUrl, link }) => {
              return (
                <Link href={link}>
                  <Image
                    src={imgUrl}
                    height={40}
                    width={40}
                    alt="Learn Aurora"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-[30rem]">
        <h1 className="uppercase font-[montserrat] font-semibold text-5xl pb-5">
          Contact US
        </h1>
        <p className="pb-5">
          You can get in touch with us quickly by filling in your details below
          and we will respond to you.
        </p>
        <div className="flex w-[30rem] flex-row justify-between">
          <div className="flex-col">asdasd</div>
          <div>asd</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
