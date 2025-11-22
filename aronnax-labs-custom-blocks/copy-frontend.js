const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src/navbar/frontend.js');
const dest = path.join(__dirname, 'build/navbar/frontend.js');

fs.copyFile(src, dest, (err) => {
  if (err) console.error('Copy failed:', err);
});
