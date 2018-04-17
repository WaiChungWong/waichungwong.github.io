var path = require("path");
var cpdir = require("ncp").ncp;
var rmdir = require("rimraf");

var oldStaticPath = path.join(__dirname, "../static");
var buildPath = path.join(__dirname, "build/");
var parentPath = path.join(__dirname, "../");

removeDirectory(oldStaticPath)
.then(() => copyDirectory(buildPath, parentPath))
.then(() => removeDirectory(buildPath))
.catch(error => {
  console.error(error);
});

function copyDirectory (src, dest) {
  return new Promise(function (resolve, reject) {
    cpdir(src, dest, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

function removeDirectory (src) {
  return new Promise(function (resolve, reject) {
    rmdir(src, function (error, dirs, files) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
