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
          <div className="col-start-1 col-end-4 row-start-1 row-end-3 flex h-full rounded-md bg-oldSite bg-cover bg-center shadow-xl">
            <div className="grow-1 ml-auto h-full w-[30%] rounded-md bg-primaryText p-4 font-butler text-lg font-bold text-white shadow-md">
              <span className="text-pinkLight">My old site</span>
              <p className="mt-4 text-base font-light">
                This is my previous web site, that I worked for 2 years on. It
                doesn't seem so, cause it's very minimalistic but trust me, I
                spent a lot of time building it.
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-6 row-start-1 row-end-2 flex h-[300px] rounded-md bg-wallpaper bg-cover bg-center shadow-xl">
            <div className="grow-1 mt-auto mt-auto w-full rounded-md bg-primaryText p-4 font-butler text-lg font-bold text-white shadow-md">
              <span className="text-pinkLight">Wallpapers</span>
              <p className="mt-2 text-sm font-light">
                I love design and art, I don't have a lot of experience in it,
                but it's very fun so I play around with it in Affinity Designer
                and sometime it looks not bad...So here are some stuff you can
                use as a wallpapers.
              </p>
            </div>
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
