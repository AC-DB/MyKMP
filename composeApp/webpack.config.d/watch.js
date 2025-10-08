/*
* [KT-80582](https://youtrack.jetbrains.com/issue/KT-80582) 的临时解决方法
*
* 一旦工单关闭，并且项目已更新到可解决该问题的 Kotlin 版本，此文件应该可以安全删除。
*/
config.watchOptions = config.watchOptions || {
    ignored: ["**/*.kt", "**/node_modules"]
}

if (config.devServer) {
    config.devServer.static = config.devServer.static.map(file => {
        if (typeof file === "string") {
            return {
                directory: file,
                watch: false,
            }
        } else {
            return file
        }
    })
}