import { PostPage } from "~/components/post-page";
import IamBamba from "~/sources/images/bamba-site.jpg";
import BambaDev from "~/sources/images/bamba-dev.png";
import { Link } from "~/components";

export default function Bamba() {
  return (
    <PostPage title="Hi I'am Bamba">
      <div className="post-page flex max-w-[800px] flex-col">
        <p className="font-mona text-lg xl:text-xl 2xl:text-2xl">
          New website that I made for my new little friend - Bamba.
        </p>
        <img
          className="h-[500px] w-full rounded-xl object-cover object-center shadow-lg "
          src={IamBamba}
        />
        <p className="text-lg xl:text-xl 2xl:text-2xl">
          You can find it here:{" "}
          <Link
            className="font-shantell text-primary hover:text-secondary"
            href="https://iambamba.co"
          >
            iambamba.co{" "}
          </Link>
        </p>
        <p className="text-lg xl:text-xl 2xl:text-2xl">
          In addition, I'm working on to print 3d badge for her that I made in
          Spline. It's in form of bamba - Israeli snack.
        </p>
        <img
          className="h-[500px] w-full rounded-xl object-cover object-center shadow-lg "
          src={BambaDev}
        />
      </div>
    </PostPage>
  );
}
