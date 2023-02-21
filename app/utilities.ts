export const genUploadCareUrl = (url: string | null, size?: string): string => {
  if (!url) return "";
  return `${url}preview/${
    size ? size + "/" : ""
  }-/quality/smart_retina/-/format/auto/`;
};
