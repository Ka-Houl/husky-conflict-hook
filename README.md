English | [简体中文](./README.zh-CN.md)

# husky-conflict-hook used to check for git conflict by the keyword <<<<<<< HEAD

---

Using npm:

````bash
# Install dependency
$ npm i husky-conflict-hook -D

# It is based on husky and lint-staged. Usually, we have already install husky and lint-staged, so I didn't put them in the dependencies. So you can also install them individually. Due to different versions of husky, the configuration of husky may be slightly different. For details, it depends on the documents of different versions of husky

$ npm i husky lint-staged -D

# its option in package.json is
```json
{
    "lint-staged": {
        "*": "husky-conflict-hook"
    },
}
#  "*" means that every file in the git staged will be checked
````

```

## Links

-   [Show the case](https://github.com/Ka-Houl/husky-conflict-hook-case)
-   [Newest Feature Requests](https://github.com/Ka-Houl/husky-conflict-hook)
-   [Top Bugs 😱](https://github.com/Ka-Houl/husky-conflict-hook/issues)
-   [Benchmarks](https://github.com/Ka-Houl/husky-conflict-hook#readme)
-   [husky Url](https://www.npmjs.com/package/husky)
-   [lint-staged Url](https://www.npmjs.com/package/lint-staged)
```
