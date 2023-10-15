const fs = require("fs");
const path = require("path");

const fcPromises = fs.promises;

const fileOps = async () => {
  try {
    const data = await fcPromises.readFile(
      path.join(__dirname, "files", "read.txt"),
      "utf8"
    );

    console.log("data", data);
  } catch (err) {
    throw err;
  }
};
fileOps();

//simple way, without promoses
// fs.readFile(path.join(__dirname, "files", "read.txt"), "utf8", (err, data) => {
//   console.log("__dirname", __dirname);
//   if (err) {
//     console.log("err", err);
//   }
//   console.log("data", data);
// });

// fs.writeFile(
//   path.join(__dirname, "files", "write.txt"),
//   "Write file in",
//   (err) => {
//     if (err) {
//       console.log("err", err);
//     }
//   }
// );
