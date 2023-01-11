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
import mainCssUrl from "./styles/main.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { Footer } from "~/components";
import config from "tailwind.config";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: mainCssUrl },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  "theme-color": `${config.theme.extend.colors.pinkLighter}`,
  viewport: "width=device-width,initial-scale=1",
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
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
