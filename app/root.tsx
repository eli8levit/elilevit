import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  PrefetchPageLinks,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { Footer, Nav } from "~/components";
import config from "tailwind.config";
import MetaCard from "../public/meta.jpg";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Eli Levit",
  "theme-color": `${config.theme.extend.colors.pinkLighter}`,
  viewport: "width=device-width,initial-scale=1",
  description:
    "FullStack Developer & Creator. Take a look of my brand new website, will be glad to meet you :)",
  "og:image": MetaCard,
});

export default function App() {
  return (
    <html lang="en" className="h-full bg-pinkLighter">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-full flex-col">
        <PrefetchPageLinks page="/bike" />
        <PrefetchPageLinks page="/art" />
        <PrefetchPageLinks page="/about" />
        <Nav />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
