function addTimestamp(text) {
  const time = Date.now();
  return text + '_' + time;
}

module.exports = { addTimestamp };
