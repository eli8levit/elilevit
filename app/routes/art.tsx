import { Nav } from "~/components";

export default function Art() {
  return (
    <>
      <Nav />
      <div className="content-container">
        <h1 className="mb-6 font-satisfy text-8xl text-indigo-800">Art</h1>
        <div className="mb-8 h-[500px] rounded-lg bg-art bg-cover p-8 shadow-2xl shadow-indigo-400"></div>
        <div className="content-container mb-48">
          <h2 className="mx-auto mb-24 max-w-[800px] text-center font-apfel text-5xl text-indigo-800 2xl:text-6xl">
            Here you can see my art like photos, illustrations along with my
            projects
          </h2>
          <div className="mx-auto grid grid-cols-5 items-center justify-center gap-8 p-12">
            <div className="col-start-1 col-end-4 row-start-1 row-end-3 flex h-full rounded-md bg-oldSite bg-cover bg-center shadow-xl shadow-indigo-200">
              <div className="grow-1 ml-auto mt-auto h-full w-[50%] p-4 font-ignazio text-lg">
                <span>My old site</span>
                <p className="mt-4 text-sm 2xl:text-lg">
                  This is my previous web site, that I worked for 2 years on. It
                  doesn't seem so, cause it's very minimalistic but trust me, I
                  spent a lot of time building it.
                </p>
              </div>
            </div>
            <div className="col-start-4 col-end-6 row-start-1 row-end-2 flex h-[300px] rounded-md bg-wallpaper bg-cover bg-center shadow-xl">
              <div className="grow-1 font-butler mt-auto mt-auto w-full rounded-md bg-primaryText p-4 text-lg font-bold text-white shadow-md 2xl:text-xl">
                <span className="text-pinkLight">Wallpapers</span>
                <p className="mt-2 text-sm font-light 2xl:text-lg">
                  I love design and art, I don't have a lot of experience in it,
                  but it's very fun so I play around with it in Affinity
                  Designer and sometime it looks not bad...So here are some
                  stuff you can use as a wallpapers.
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
    </>
  );
}
