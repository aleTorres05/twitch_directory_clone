import Content from "./Content";

export default function ExploreContent() {
  const categories = [
    {
      coverImg: "https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg",
      title: "Apex Legends",
      viewers: "429.2 k espectadores",
      catalog: "IRL (vida real)",
    },
    {
      coverImg: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
      title: "Solo Chateando",
      viewers: "429.2 k espectadores",
      catalog: "IRL (vida real)",
    },
    {
      coverImg: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
      title: "Eventos especiales",
      viewers: "429.2 k espectadores",
      catalog: "IRL (vida real)",
    },
    {
      coverImg: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
      title: "League of Legends",
      viewers: "429.2 k espectadores",
      catalog: "IRL (vida real)",
    },
    {
      coverImg:
        "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
      title: "Kings League",
      viewers: "429.2 k espectadores",
      catalog: "IRL (vida real)",
    },
    {
      coverImg:
        "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
      title: "Kings League",
      viewers: "429.2 k espectadores",
      catalog: "IRL (vida real)",
    },
  ];

  return (
    <section className="grid grid-rows-[3%_10%_100%] md:grid-rows-[14%_20%_1fr] lg:grid-rows-[10%_20%_1fr] lg:grid-cols-4 xl:grid-rows-[14%_10%_1fr] xl:grid-cols-5">
      <div className="md:row-start-1">
        <h1 className=" font-bold text-6xl p-6">Explorar</h1>
      </div>
      <div className="col-start-1 col-end-5 row-start-2  pt-0 pl-6 grid md:grid-cols-3 gap-1 md:row-start-2 md:grid-rows-[1fr_1fr_1fr] md:h-[100%] lg:row-start-2 lg:row-end-2 lg:col-start-1 lg:col-end-5 xl:col-start-1 xl:col-end-6">
        <button className="flex col-start-1  md:row-span-1 md:gap-9 bg-[#5C17C5] md:col-start-1 h-[80%] md:h-[80%] w-[100%] md:w-[100%] rounded-lg text-lg lg:h-[50px] lg:col-start-1 xl:col-start-1">
          <p className="text-2xl ml-2 font-bold md:w-[50%]">Juegos</p>
          <img
            className="self-center md:h-[50%] md:w-[50%]  lg:h-[50px] lg:w-[50px]"
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
            alt=""
          />
        </button>
        <button className="flex bg-[#5C17C5] col-start-2 md:row-span-1 h-[80%] md:h-[80%] md:col-start-2 rounded-lg text-lg lg:h-[50px]  lg:col-start-2 md:gap-9 xl:col-start-2">
          <p className="text-2xl ml-2 font-bold md:w-[30%]">IRL</p>
          <img
            className="self-center md:h-[50%] md:w-[50%]  lg:h-[50px] lg:w-[50px]"
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg"
            alt=""
          />
        </button>
        <button className="flex bg-[#5C17C5] col-start-1 md:row-span-1  md:col-start-3 h-[80%] md:h-[80%] rounded-lg text-lg lg:h-[50px]  lg:col-start-3 md:gap-9 xl:col-start-3">
          <p className="text-2xl ml-2 font-bold md:w-[30%]">Música</p>
          <img
            className="self-center md:h-[50%] md:w-[50%] lg:h-[50px] lg:w-[50px]"
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg"
            alt=""
          />
        </button>
        <button className="flex bg-[#5C17C5] col-start-2 md:row-span-2  md:col-start-1 h-[80%] md:h-[80%] rounded-lg text-lg lg:h-[50px]  lg:col-start-4 md:gap-9 xl:col-start-4">
          <p className="text-2xl ml-2 font-bold md:w-[30%]">Creative</p>
          <img
            className="self-center md:h-[50%] md:w-[50%]  lg:h-[50px] lg:w-[50px]"
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg"
            alt=""
          />
        </button>
        <button className="flex bg-[#5C17C5] col-start-1 md:row-span-2  md:col-start-2 h-[80%] md:h-[80%] rounded-lg text-lg lg:h-[50px]  lg:col-start-1 md:gap-9 xl:col-start-6">
          <p className="text-2xl ml-2 font-bold md:w-[30%]">Esports</p>
          <img
            className="self-center md:h-[50%] md:w-[50%]  lg:h-[50px] lg:w-[50px]"
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg"
            alt=""
          />
        </button>
        {/* <div className="flex  col-start-1 col-end-3 ">
          <a href="">
            <p className=" text-[#BF94FF]">Categorías</p>
          </a>
          <a href="">
            <p>Canales en vivo</p>
          </a>
        </div> */}
      </div>
      <div className="grid grid-cols-1 pl-6  col-start-1 col-end-5 md:grid-cols-3 md:col-start-1 md:col-end-3 md:row-start-3 lg:col-start-1 lg:col-end-5 lg:grid-cols-4 xl:grid-cols-5 xl:row-start-3  xl:col-start-1 xl:col-end-6">
        {categories.map((category) => {
          return (
            <Content
              key={`content${category.catalog}`}
              coverImg={category.coverImg}
              title={category.title}
              viewers={category.viewers}
              catalog={category.catalog}
            />
          );
        })}
      </div>
    </section>
  );
}
