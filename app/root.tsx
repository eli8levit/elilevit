import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { Footer, Nav } from "~/components";
import config from "tailwind.config";
import Icon32 from "../public/favicon-32x32.png";
import Icon16 from "../public/favicon-16x16.png";
import Manifest from "../public/site.webmanifest";
import AppleIcon from "../public/apple-touch-icon.png";
import { motion } from "framer-motion";

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
  "twitter:card": "summary_large_image",
  "twitter:title": "Eli Levit",
  "twitter:description":
    "FullStack Developer & Creator. Take a look of my brand new website, will be glad to meet you :)",
  "twitter:image": "https://elilevit.co/meta.jpg",
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
        <motion.div
          initial={{ translateY: "-50%", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Nav />
        </motion.div>
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
