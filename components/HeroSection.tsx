import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center text-white ">
      <div className="max-w-6xl h-screen max-h-full w-full  flex  flex-col lg:flex-row justify-center items-center gap-x-16 uppercase my-5 sm:my-0 mx-5">
        <div>
          <h1 className="text-2xl md:text-6xl font-[montserrat] font-extrabold">
            LEARN HOW TO USE AND BUILD ON <span id="textgradient">AURORA</span>
          </h1>
          <Image
            src="/assets/images/linedesign.png"
            alt=""
            height={200}
            width={200}
            className="py-5 pointer-events-none"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam,
            sit similique, quod voluptatum explicabo voluptates quia blanditiis
            perferendis minus impedit nesciunt a hic qui. Culpa harum inventore
            nisi porro!
          </p>
        </div>

        <Image
          src="/assets/icons/codeicon.svg"
          alt=""
          height={500}
          width={500}
          className="pointer-events-none"
        />
      </div>
    </div>
  );
};

export default HeroSection;
