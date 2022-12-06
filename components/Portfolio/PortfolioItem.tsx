import Image from "next/image";

type MyProps = {
  title: string;
  imgUrl: string;
  stack: Array<string>;
  link: string;
};

const PortfolioItem = (props: MyProps) => {
  return (
    <a
      className="border-2 border-stone-900 dark:border-white rounded overflow-hidden hover:blur-[0.8px] max-w-[400px]"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer">
      <Image
        src={props.imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
        width={1920}
        height={1080}
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-lg dark:text-white mb-2 md:mb-3 font-semibold">
          {props.title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {props.stack.map((item: string, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;
