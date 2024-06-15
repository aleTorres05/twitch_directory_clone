import RemmendedChannels from "./components/RemmendedChannels";
import Navbar from "./components/Navbar";
import ExploreContent from "./components/ExploreContent";

export default function App() {
  const recommendedStreamers = [
    {
      avatar: `https://api.dicebear.com/8.x/adventurer/svg?seed=`,
      username: "Maxwill",
      title: "Rust",
      status: true,
      subs: "6.1k",
    },
    {
      avatar: `https://api.dicebear.com/8.x/adventurer/svg?seed=`,
      username: "CrystalMolly",
      title: "Rust",
      status: false,
      subs: "4.1k",
    },
    {
      avatar: `https://api.dicebear.com/8.x/adventurer/svg?seed=`,
      username: "rivers_gg",
      title: "Rust",
      status: true,
      subs: "26.1k",
    },
    {
      avatar: `https://api.dicebear.com/8.x/adventurer/svg?seed=`,
      username: "Datto",
      title: "Destint 2",
      status: false,
      subs: "6.1k",
    },
  ];
  return (
    <main className="w-full min-h-screen p-1 grid grid-cols-[10%_90%] md:grid-cols-[20%_1fr] grid-rows-[3.2rem_1fr]">
      <Navbar />
      <aside className="col-start-1 bg-[#1F1F23]">
        <p className="hidden md:block col-start-1 col-end-4 mt-2 ml-2 text-sm">
          CANALES RECOMENDADOS
        </p>
        {recommendedStreamers.map((streamer) => {
          return (
            <RemmendedChannels
              key={`recommendedStreamers${streamer.username}`}
              avatar={streamer.avatar}
              username={streamer.username}
              title={streamer.title}
              status={streamer.status}
              subs={streamer.subs}
            />
          );
        })}
      </aside>
      <ExploreContent />
    </main>
  );
}
