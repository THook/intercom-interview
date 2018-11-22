const test = (title, cb) => {
  try {
    cb();
    console.log(`✅ ${title}`);
  } catch(e) {
    console.error(`🚩 ${title}`);
    console.error(e);
  }
}

module.exports = test;
