# Downloader

[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads)

This project downloads files in the browser. It works in IE. And supports promises.

The api is dead simple. You pass in a file url or a blob. And the function downloads a file to the users browser.

```js
import { downloadAUrl } from 'better-file-downloads';
const { downloadAUrl } = require('better-file-downloads');

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
import { downloadABlob } from 'better-file-downloads';
const { downloadABlob } = require('better-file-downloads');

await downlodownloadABlobadAUrl(yourBlob, {
  fileName: 'my-new-file',
  extension: '.pdf',
  contentType: 'application/pdf',
});
```
