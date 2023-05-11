import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { Footer, Nav } from "~/components";
import config from "tailwind.config";
import Icon32 from "../public/favicon-32x32.png";
import Icon16 from "../public/favicon-16x16.png";
import CursorPointer from "../public/cursor-pointer.svg";
import CursorPressed from "../public/cursor-pressed.svg";
import Manifest from "../public/site.webmanifest";
import AppleIcon from "../public/apple-touch-icon.png";
import { getRandomMemojiId } from "~/components/utils";
import { getMobileDetect } from "~/utilities";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "icon",
      sizes: "180x180",
      href: AppleIcon,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: Icon32,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: Icon16,
    },
    { rel: "manifest", href: Manifest },
    { rel: "preload", href: CursorPointer },
    { rel: "preload", href: CursorPressed },
  ];
};

export const meta: MetaFunction = () => ({
  "theme-color": `${config.theme.extend.colors.pinkLighter}`,
  title: "Eli Levit",
  description:
    "FullStack Developer & Creator. Take a look of my brand new website, will be glad to meet you :)",
  "og:title": "Eli Levit",
  "og:description":
    "FullStack Developer & Creator. Take a look of my brand new website, will be glad to meet you :)",
  "og:image": "https://elilevit.co/meta.jpg",
  "og:url": "https://elilevit.co/",
  "twitter:url": "https://elilevit.co/",
  "twitter:title": "Eli Levit",
  "twitter:description":
    "FullStack Developer & Creator. Take a look of my brand new website, will be glad to meet you :)",
  "twitter:image": "https://elilevit.co/meta.jpg",
  "twitter:card": "summary_large_image",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = (params: any) => {
  const userAgent = params.request.headers.get("user-agent");
  const detect = getMobileDetect(userAgent);
  return { memojiId: getRandomMemojiId(), isMobile: detect.isMobile() };
};

export default function App() {
  const { memojiId, isMobile } = useLoaderData();

  return (
    <html lang="en" className="h-full bg-pinkLighter">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-full grow flex-col">
        <div className="relative flex grow flex-col overflow-x-hidden">
          <Nav memojiId={memojiId} isMobile={isMobile} />
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
