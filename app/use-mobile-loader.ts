import type { LoaderFunction } from "@remix-run/node";
import { getMobileDetect } from "~/utilities";

export const loader: LoaderFunction = (params: any): { isMobile: boolean } => {
  const userAgent = params.request.headers.get("user-agent");
  const detect = getMobileDetect(userAgent);
  return { isMobile: detect.isMobile() };
};
