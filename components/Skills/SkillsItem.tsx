type MyProps = {
  skillLink: string;
  skillTarget: string;
  skillRel: string;
  skillSrc: string;
  skillAlt: string;
  skillH: string;
  skillW: string;
};

const SkillsItem = (props: MyProps) => {
  return (
    <div className="m-1">
      <a
        href={props.skillLink}
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="bg-stone-400 dark:bg-stone-400 rounded p-1.5 hover:blur-[0.8px] w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
          src={props.skillSrc}
          alt={props.skillAlt}
        />
      </a>
    </div>
  );
};

export default SkillsItem;
