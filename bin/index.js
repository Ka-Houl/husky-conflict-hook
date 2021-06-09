#!/usr/bin/env node

const fs = require("fs");

/** 错误常量表 */
const ERR_CONSTANT = {
  /** 读取文件出错 */
  readError: "读取文件出错",
  /** 检查文件出错，存在冲突 */
  checkError:
    "发现代码冲突关键字<<<<<<< HEAD，请检查暂存区中的代码是否存在冲突未解决"
};

// 冲突字段关键字
const conflictReg = /<<<<<<<\sHEAD/;
// 读取文件封装
const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        console.log(path, "路径文件读取失败");
        reject(ERR_CONSTANT.readError);
      } else {
        resolve({ path, data });
      }
    });
  });
};
// function readFile(path) {
//   return fs.readFileSync(path, "utf8");
// }
const checkFile = ({ path, data }) => {
  if (conflictReg.test(data)) {
    console.log(path);
    return Promise.reject(ERR_CONSTANT.checkError);
  } else {
    return Promise.resolve(true);
  }
};

(async () => {
  /** 自定义变量, 暂存区文件路径集合 */
  const targetPathArgs = process.argv.slice(2);

  try {
    const readFileList = targetPathArgs.map(
      async filePath => await readFile(filePath)
    );
    /** 异步读取文件的结果集合 */
    const readFileListResult = await Promise.all(readFileList);
    // console.log("readFileListResult", readFileListResult);

    // 异步校验文件冲突
    // const checkFileListResult =
    await Promise.all(
      readFileListResult.map(async (...arg) => await checkFile(...arg))
    );
    // console.log("checkFileListResult", checkFileListResult);
    // 继续
    process.exit(0);
  } catch (err) {
    console.log(err);
    // 中断
    process.exit(1);
  }
})();

process.on("exit", code => {
  console.log(`文件冲突校验完成，即将退出，退出码: ${code}`);
});
