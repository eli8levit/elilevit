export default function Art() {
  return (
    <div>
      <div className="mb-36 h-[450px] bg-art bg-cover p-8">
        <h1 className="flex h-[90px] w-max items-center rounded-sm bg-black py-0 px-2 font-butler text-8xl font-bold text-white shadow-xl">
          Art
        </h1>
      </div>
      <div className="content-container mb-48">
        <h2 className="mx-auto mb-36 max-w-[800px] text-center font-butler text-5xl text-primaryText">
          Here you can see my art like photos, illustrations along with my
          projects
        </h2>
        <div className="mx-auto grid grid-cols-5 items-center justify-center gap-8 p-12">
          <div className="col-start-1 col-end-4 row-start-1 row-end-3 flex h-full rounded-sm bg-oldSite bg-cover shadow-xl">
            <span className="grow-1 mt-auto ml-auto block h-full w-[30%] bg-primaryText p-4 font-butler text-xl font-light text-white shadow-md">
              My old site
            </span>
          </div>
          <div className="col-start-4 col-end-6 row-start-1 row-end-2 flex h-[200px] rounded-sm bg-wallpaper bg-cover shadow-xl">
            <span className="grow-1 rounded-sm bg-black p-4 text-center font-butler text-xl font-light text-white shadow-md">
              Wallpapers
            </span>
          </div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
          <div className="min-h-[200px] w-full bg-red-900"></div>
        </div>
      </div>
    </div>
  );
}
