export default function Content({ coverImg, title, viewers, catalog }) {
  return (
    <section className="p-2 w-[100%] md:mb-[130px] md:mr-[25px] md:h-[200px] md:w-[200px] lg:mr-[1rem] xl:mr-[1rem] xl:w-[100%]">
      <div>
        <img className="w-[100%]" src={`${coverImg}`} alt="" />
      </div>
      <div>
        <h4 className=" font-bold">{title}</h4>
        <p className="opacity-30">{viewers}</p>
        <p className=" rounded-lg bg-[#29292E] text-[#ADADB8] w-[30%] text-xs text-center md:w-[50%]">
          {catalog}
        </p>
      </div>
    </section>
  );
}
