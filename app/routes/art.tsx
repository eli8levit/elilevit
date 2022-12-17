import OldSite from "~/sources/images/old-site.png";

export default function Art() {
  return (
    <div>
      <div className="mb-36 h-[450px] bg-art bg-cover p-8">
        <h1 className="flex h-[90px] w-max items-center rounded-sm bg-black py-0 px-2 font-butler text-9xl font-bold text-white shadow-xl">
          Art
        </h1>
      </div>
      <div className="content-container mb-48">
        <h2 className="mx-auto mb-36 max-w-[800px] text-center font-butler text-5xl text-primaryText">
          Here you can see my art like photos, illustrations along with my
          projects
        </h2>
        <div className="mx-auto grid grid-cols-5 items-center justify-center gap-8 p-12">
          <div className="col-span-3 row-span-2 flex flex-col bg-red-900">
            <img
              src={OldSite}
              width="100%"
              height="60%"
              className="h-[60%] w-full object-cover"
            />
            <span className="grow-1 block bg-primaryText p-3 font-butlerSt text-xl font-light text-white">
              My old site
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
          <div className="min-h-[200px] w-full bg-red-900"></div>
        </div>
        min-
      </div>
    </div>
  );
}
