import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import mainCssUrl from "./styles/main.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { Footer, Nav } from "~/components";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: mainCssUrl },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
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
