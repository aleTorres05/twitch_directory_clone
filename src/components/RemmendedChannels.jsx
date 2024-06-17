export default function RemmendedChannels({
  avatar,
  username,
  title,
  status,
  subs,
}) {
  console.log(username);
  return (
    <aside className="grid grid-col-1 xl:grid-cols-[20%_1fr_1fr] bg-[#1F1F23] justify-center content-center">
      <div>
        {status && (
          <img
            className="h-[50px] w-[50px] xl:h-[80px]"
            src={`${avatar}${username}`}
            alt="avatar"
          />
        )}
        {!status && (
          <img
            className="h-[50px] w-[50px] grayscale"
            src={`${avatar}${username}`}
            alt="avatar"
          />
        )}
      </div>
      <div className="hidden xl:block">
        <p>{username}</p>
        <p className=" text-xs">{title}</p>
      </div>
      <div className="hidden xl:grid grid-cols-[20%_50%] justify-end items-center">
        {status && (
          <a className="bg-red-500 border h-[12px] w-[12px] rounded-full mr-1 border-neutral-900"></a>
        )}
        {!status && (
          <a className="bg-gray-600 border h-[12px] w-[12px] rounded-full mr-1 border-neutral-900"></a>
        )}
        <p className="text-xs">{subs}</p>
      </div>
    </aside>
  );
}
