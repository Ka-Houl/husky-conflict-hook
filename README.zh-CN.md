[English](./README.md) | 简体中文

# husky-conflict-hook used to check for git conflict by the keyword <<<<<<< HEAD

---

使用 npm:

````bash
# Install dependency
$ npm i husky-conflict-hook -D

# 它基于husky和lint-staged。我们通常已经在项目里使用了husky和lint-staged了，所以我没有把它们放进去dependencies中。你也可以单独安装它们，因为husky版本不同，可能会在配置husky的配置有些许不一样，具体要看husky各版本的文档
$ npm i husky lint-staged -D

# its option in package.json is
```json
{
    "lint-staged": {
        "*": "husky-conflict-hook"
    },
}
#  "*" 代表在暂存区里的每一种格式文件都会被检查
````

## Links

-   [Show the case](https://github.com/Ka-Houl/husky-conflict-hook-case)
-   [Newest Feature Requests](https://github.com/Ka-Houl/husky-conflict-hook)
-   [Top Bugs 😱](https://github.com/Ka-Houl/husky-conflict-hook/issues)
-   [Benchmarks](https://github.com/Ka-Houl/husky-conflict-hook#readme)
-   [husky Url](https://www.npmjs.com/package/husky)
-   [lint-staged Url](https://www.npmjs.com/package/lint-staged)
