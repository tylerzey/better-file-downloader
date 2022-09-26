# Downloader

This project downloads files in the browser. It works in IE. And supports promises.

[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloader) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloader) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloader)

The api is dead simple. You pass in a file url or a blob. And the function downloads a file to the users browser.

The library works with react and is fairly lightweight in size.

### Install

```bash
  npm install better-file-downloader
```

### Examples

```js
import { downloadAUrl } from 'better-file-downloader';
const { downloadAUrl } = require('better-file-downloader');

await downloadAUrl(
  'https://s3.amazonaws.com/my-uploaded-files/images/cat.jpg',
  {
    fileName: 'my-new-file',
    extension: '.pdf',
    contentType: 'application/pdf',
  }
);
```

Or if you prefer to pass in a blob.

```js
import { downloadABlob } from 'better-file-downloader';
const { downloadABlob } = require('better-file-downloader');

await downloadABlob(yourBlob, {
  fileName: 'my-new-file',
  extension: '.pdf',
  contentType: 'application/pdf',
});
```

```js
import React from 'react';
import { downloadAUrl } from 'better-file-downloader';

export default function example() {
  const download = async (url) => {
    await downloadAUrl(url, {
      fileName: 'example-file',
      extension: '.pdf',
      contentType: 'application/pdf',
    });
  };

  return (
    <button
      type="button"
      onClick={() =>
        download('https://s3.amazonaws.com/my-uploaded-files/images/cat.jpg')
      }
    >
      Download an image!
    </button>
  );
}
```
