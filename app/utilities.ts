export const genUploadCareUrl = (url: string, size?: string): string => {
  return `${url}preview/${size && size}-/quality/smart_retina/-/format/auto/`;
};
