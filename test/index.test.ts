import { downloadABlob } from '../src';
import { describe, afterAll, it, expect, vi } from 'vitest';

const createElement = vi.spyOn(document, 'createElement');
const createObjectURL = vi.fn().mockImplementation((o) => o);
window.URL.createObjectURL = createObjectURL;

describe('download', () => {
  afterAll(() => {
    createElement.mockClear();
    createObjectURL.mockClear();
  });

  it('downloadABlob', () => {
    const testBlob = new Blob(['test'], { type: 'image/png' });

    downloadABlob(testBlob, {
      fileName: '',
      extension: 'png',
      contentType: 'image/png',
    });
    expect(createObjectURL).toBeCalledWith(testBlob);
    expect(createElement).toBeCalledWith('a');
  });
});
