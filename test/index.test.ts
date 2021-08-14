import { downloadABlob } from '../src';

const createElement = jest.spyOn(document, 'createElement');
const createObjectURL = jest.fn().mockImplementation(o => o);
window.URL.createObjectURL = createObjectURL;

describe('download', () => {
  afterAll(() => {
    createElement.mockClear();
    createObjectURL.mockClear();
  });

  it('downloadABlob', () => {
    const testBlob = new Blob(['test']);

    downloadABlob(testBlob, {
      fileName: '',
      extension: 'png',
      contentType: 'image/png',
    });
    expect(createObjectURL).toBeCalledWith(testBlob);
    expect(createElement).toBeCalledWith('a');
  });
});
