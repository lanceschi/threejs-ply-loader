/**
 * Convert passed node Buffer to ArrayBuffer
 * @param  {Buffer} buf
 * @returns {ArrayBuffer}
 */
const bufferToArrayBuffer = buf => {
  if (Buffer.isBuffer(buf) === false) {
    throw new Error(`Passed argument is not of type Buffer. Can't proceed`);
  }

  const ab = new ArrayBuffer(buf.length);
  let view = new Uint8Array(ab);

  for (let i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }

  return ab;
};

module.exports = {
  bufferToArrayBuffer,
};
