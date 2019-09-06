import axios from 'axios'

type FileData = {
  fileName: string,
  extension: string,
  contentType: string
}


const download = (blob: Blob, fileInfo: FileData): void => {
  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveBlob(blob, `${fileInfo.fileName}${fileInfo.extension}`);
  else {
    const a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = `${fileInfo.fileName}${fileInfo.extension}`;
    window.document.body.appendChild(a);
    a.click();
    window.document.body.removeChild(a);
  }
}

export const downloadAUrl = async (fileUrl: string, fileInfo: FileData) => {
  const response = await axios({
    url: fileUrl,
    method: 'GET',
    responseType: 'blob',
  });

  download(response.data, fileInfo)
}

export const downloadABlob = (fileContent: Blob, fileInfo: FileData): void => {
  const blob = new Blob([fileContent], { type: fileInfo.contentType });
  download(blob, fileInfo)
};



