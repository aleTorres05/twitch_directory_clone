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
  ];

  return (
    <section className="grid  grid-rows-[4%_7%_100%] md:grid-rows-[10%_70px_34%]">
      <div className="md:row-start-1">
        <h1 className=" font-bold text-6xl p-6">Explorar</h1>
      </div>
      <div className="col-start-1 col-end-5 row-start-2 grid-rows-[30%_30%_30%] pt-0 pl-6 grid md:grid-cols-5 gap-1 md:row-start-2 md:grid-rows-1 md:h-[100%]">
        <button className="flex bg-[#5C17C5] col-start-1 md:row-span-2 h-[80%] md:h-[80%] rounded-lg text-lg md:gap-9 ">
          <p className="text-2xl ml-2 font-bold">Juegos</p>
          <img
            className="self-center "
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
            alt=""
          />
        </button>
        <button className="flex bg-[#5C17C5] col-start-2 md:row-span-2 h-[80%] md:h-[80%] rounded-lg text-lg md:gap-9">
          <p className="text-2xl ml-2 font-bold">IRL</p>
          <img
            className="self-center "
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg"
            alt=""
          />
        </button>
        <button className="flex bg-[#5C17C5] col-start-1 md:row-span-2  md:col-start-3 h-[80%] md:h-[80%] rounded-lg text-lg md:gap-9">
          <p className="text-2xl ml-2 font-bold">Música</p>
          <img
            className="self-center "
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg"
            alt=""
          />
        </button>
        <button className="flex bg-[#5C17C5] col-start-2 md:row-span-2  md:col-start-4 h-[80%] md:h-[80%] rounded-lg text-lg md:gap-9">
          <p className="text-2xl ml-2 font-bold">Creative</p>
          <img
            className="self-center "
            src="https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg"
            alt=""
          />
        </button>
        <button className="flex bg-[#5C17C5] col-start-1 md:row-span-2  md:col-start-5 h-[80%] md:h-[80%] rounded-lg text-lg md:gap-9">
          <p className="text-2xl ml-2 font-bold">Esports</p>
          <img
            className="self-center "
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
      <div className="grid grid-cols-1 pl-6  col-start-1 col-end-5 md:grid-cols-5 md:col-start-1 md:col-end-5">
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
