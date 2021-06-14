#!/usr/bin/env node

const fs = require('fs');

/** 错误常量表 */
const ERR_CONSTANT = {
    /** 读取文件出错 */
    readError: 'read file error',
    /** 检查文件出错，存在冲突 */
    checkError:
        'Code conflict keywords found <<<<<<< HEAD, please check the code in the staging area for unresolved conflicts',
};

// 冲突字段关键字
const conflictReg = /<<<<<<<\sHEAD/;
// 读取文件封装
const readFile = path => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log(path, 'read file error');
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
        const readFileList = targetPathArgs.map(async filePath => await readFile(filePath));
        /** 异步读取文件的结果集合 */
        const readFileListResult = await Promise.all(readFileList);
        // console.log("readFileListResult", readFileListResult);

        // 异步校验文件冲突
        // const checkFileListResult =
        await Promise.all(readFileListResult.map(async (...arg) => await checkFile(...arg)));
        // console.log("checkFileListResult", checkFileListResult);
        // continue
        process.exit(0);
    } catch (err) {
        console.log(err);
        // exit
        process.exit(1);
    }
})();

process.on('exit', code => {
    console.log(`File conflict check completed, it is going to exit, exit code: ${code}`);
});
