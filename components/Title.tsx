type MyProps = {
  children: any;
  id?: any;
};

// componente title utilizzato per le varie sezioni
const Title = (props: MyProps) => {
  return (
    <h1
      id={props.id && props.id}
      className="text-xl md:text-2xl tracking-[5px] underline underline-offset-8 decoration-4 decoration-orange-400/40 mb-5 text-stone-900 dark:text-stone-100 uppercase">
      {props.children}
    </h1>
  );
};

export default Title;
