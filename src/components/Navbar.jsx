import TwitchLogo from "./TwitchLogo";

export default function Navbar() {
  return (
    <nav className="col-start-1 col-end-3 w-[100%] grid md:grid-cols-3  bg-[#18181B]  p-0 m-0">
      <div className="flex flex-row ">
        <TwitchLogo />
        <button className="border border-[#BF94FF] border-t-0 border-r-0 border-l-0 border-b-2 text-xs h-5 w-[50px] text-[#BF94FF] text-center md:text-sm md:h-10 md:w-[50px]">
          <p>Explorar</p>
        </button>
        <button className="h-[20px] w-[20px] ml-6 md:h-[40px] md:w-[40px] md:ml-4">
          <img
            className="h-[25px]  grow"
            src="https://img.icons8.com/?size=100&id=98963&format=png&color=FFFFFF"
            alt=""
          />
        </button>
      </div>
      <div className="hidden md:flex">
        <input
          className=" md:flex-1 h-[35px] p-[0.5rem_1rem] border border-white rounded-md bg-transparent"
          type="text"
          placeholder="Buscar"
        />
      </div>
      <div
        className="flex col-start-3 justify-end gap-1 md:gap-4 text-white "
        a
      >
        <a className=" align-middle md:content-center md:h-[38px]">
          <img
            className="h-[25px] w-[30px] md:h-[20px] md:w-[20px] "
            src="https://img.icons8.com/?size=100&id=stn4wvRvzzZs&format=png&color=FFFFFF"
            alt=""
          />
        </a>
        <button className="h-[30px] w-[90%] md:h-[35px] md:w-[110px] gap-3 bg-[#2F2F36] rounded">
          <p className="text-[10px] md:text-sm p-1">Iniciar sessión</p>
        </button>
        <button className="h-[30px] w-[90%]  md:h-[35px] md:w-[110px]  gap-3 bg-[#9148FF] rounded">
          <p className="text-[10px] md:text-sm p-1">Registrarse</p>
        </button>
        <a className=" align-middle md:content-center h-[38px]">
          <img
            className=" h-[30px] w-[30px] md:h-[30px] md:w-[30px]"
            src="https://img.icons8.com/?size=100&id=Cssf43cjx2fu&format=png&color=FFFFFF"
            alt=""
          />
        </a>
      </div>
    </nav>
  );
}
