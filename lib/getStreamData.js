const getStreamData = (stream, callback) => {
  const chunks = [];
  stream.on('data', (chunk) => chunks.push(chunk));
  stream.on('end', () => {
    const data = Buffer.concat(chunks).toString();
    callback(null, data);
  });
  stream.on('error', callback);
};

module.exports = getStreamData;
