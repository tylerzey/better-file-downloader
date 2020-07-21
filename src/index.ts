type FileData = {
  fileName: string;
  extension: string;
  contentType: string;
};

const download = (blob: Blob | Uint8Array, fileInfo: FileData): void => {
  if (typeof window.navigator.msSaveOrOpenBlob === 'function') {
    window.navigator.msSaveBlob(
      blob,
      `${fileInfo.fileName}${fileInfo.extension}`
    );
  } else {
    const a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = `${fileInfo.fileName}${fileInfo.extension}`;
    window.document.body.appendChild(a);
    a.click();
    window.document.body.removeChild(a);
  }
};

export const downloadAUrl = async (fileUrl: string, fileInfo: FileData) => {
  const response = await fetch(fileUrl, { method: 'GET' });
  const data = await response.blob();

  download(data, fileInfo);
};

export const downloadABlob = (
  fileContent: Blob | Uint8Array,
  fileInfo: FileData
): void => {
  const blob = new Blob([fileContent], { type: fileInfo.contentType });
  download(blob, fileInfo);
};
