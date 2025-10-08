这是一个面向 Android、Web 和桌面 (JVM) 的 Kotlin 多平台项目。

* [/composeApp](./composeApp/src) 用于存放将在您的 Compose 多平台应用程序中共享的代码。
  它包含几个子文件夹：
- [commonMain](./composeApp/src/commonMain/kotlin) 用于存放所有目标平台通用的代码。
- 其他文件夹用于存放仅针对文件夹名称中指定的平台进行编译的 Kotlin 代码。
  例如，如果您想在 Kotlin 应用程序的 iOS 部分使用 Apple 的 CoreCrypto，
  那么 [iosMain](./composeApp/src/iosMain/kotlin) 文件夹就是进行此类调用的正确位置。
  同样，如果您想编辑桌面 (JVM) 特定的部分，那么 [jvmMain](./composeApp/src/jvmMain/kotlin)
  文件夹也是合适的位置。

### 构建并运行 Android 应用

要构建并运行 Android 应用的开发版本，请使用 IDE 工具栏中运行小部件中的运行配置
或直接从终端进行构建：
- 在 macOS/Linux 上
```shell
./gradlew :composeApp:assembleDebug
```
- 在 Windows 上
```shell
.\gradlew.bat :composeApp:assembleDebug
```

### 构建并运行桌面 (JVM) 应用

要构建并运行桌面应用的开发版本，请使用 IDE 工具栏中运行小部件中的运行配置
或直接从终端进行运行：
- 在 macOS/Linux 上
```shell
./gradlew :composeApp:run
```
- 在 Windows 上
```shell
.\gradlew.bat :composeApp:run
```

### 构建并运行 Web 应用

要构建并运行 Web 应用的开发版本，请使用 IDE 的运行小部件中的运行配置
工具栏或直接从终端运行：
- 对于 Wasm 目标（速度更快，支持现代浏览器）：
- 在 macOS/Linux 上
```shell
./gradlew :composeApp:wasmJsBrowserDevelopmentRun
```
- 在 Windows 上
```shell
.\gradlew.bat :composeApp:wasmJsBrowserDevelopmentRun
```
- 对于 JS 目标（速度较慢，支持旧版浏览器）：
- 在 macOS/Linux 上
```shell
./gradlew :composeApp:jsBrowserDevelopmentRun
```
- 在 Windows 上
```shell
.\gradlew.bat :composeApp:jsBrowserDevelopmentRun
```

---

了解更多关于 [Kotlin Multiplatform](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html) 的信息，
[Compose多平台](https://github.com/JetBrains/compose-multiplatform/#compose-multiplatform)、
[Kotlin/Wasm](https://kotl.in/wasm/)…

我们非常感谢您通过公共 Slack 频道 [#compose-web](https://slack-chats.kotlinlang.org/c/compose-web) 就 Compose/Web 和 Kotlin/Wasm 提供反馈。
如果您遇到任何问题，请在 [YouTrack](https://youtrack.jetbrains.com/newIssue?project=CMP) 上报告。


## 1. Android 应用

### 构建 Debug 版 APK
- **macOS/Linux:**
  ```sh
  ./gradlew :composeApp:assembleDebug
  ```
- **Windows:**
  ```bat
  .\gradlew.bat :composeApp:assembleDebug
  ```

### 构建 Release 版 APK
- **macOS/Linux:**
  ```sh
  ./gradlew :composeApp:assembleRelease
  ```
- **Windows:**
  ```bat
  .\gradlew.bat :composeApp:assembleRelease
  ```

### 安装到设备（仅 Android）
- **macOS/Linux:**
  ```sh
  ./gradlew :composeApp:installDebug
  ```
- **Windows:**
  ```bat
  .\gradlew.bat :composeApp:installDebug
  ```

---

## 2. 桌面 (JVM) 应用

### 运行开发版
- **macOS/Linux:**
  ```sh
  ./gradlew :composeApp:run
  ```
- **Windows:**
  ```bat
  .\gradlew.bat :composeApp:run
  ```

### 构建可分发包（release 可执行文件/安装包）
- **macOS/Linux:**
  ```sh
  ./gradlew :composeApp:createReleaseDistributable
  ```
- **Windows:**
  ```bat
  .\gradlew.bat :composeApp:createReleaseDistributable
  ```

#### 其他桌面平台打包命令（可选）：
- **macOS 打包 DMG:**
  ```sh
  ./gradlew :composeApp:packageReleaseDmg
  ```
- **Windows 打包 MSI:**
  ```bat
  .\gradlew.bat :composeApp:packageReleaseMsi
  ```
- **Linux 打包 DEB:**
  ```sh
  ./gradlew :composeApp:packageReleaseDeb
  ```

---

## 3. Web 应用

### 运行开发版 (Wasm，现代浏览器推荐)
- **macOS/Linux:**
  ```sh
  ./gradlew :composeApp:wasmJsBrowserDevelopmentRun
  ```
- **Windows:**
  ```bat
  .\gradlew.bat :composeApp:wasmJsBrowserDevelopmentRun
  ```

### 运行开发版 (JS，兼容老浏览器)
- **macOS/Linux:**
  ```sh
  ./gradlew :composeApp:jsBrowserDevelopmentRun
  ```
- **Windows:**
  ```bat
  .\gradlew.bat :composeApp:jsBrowserDevelopmentRun
  ```

### 构建生产版（产出可部署到服务器的包）
- **Wasm:**
  - macOS/Linux:
    ```sh
    ./gradlew :composeApp:wasmJsBrowserProductionWebpack
    ```
  - Windows:
    ```bat
    .\gradlew.bat :composeApp:wasmJsBrowserProductionWebpack
    ```
- **JS:**
  - macOS/Linux:
    ```sh
    ./gradlew :composeApp:jsBrowserProductionWebpack
    ```
  - Windows:
    ```bat
    .\gradlew.bat :composeApp:jsBrowserProductionWebpack
    ```

---

## 4. 运行/测试所有平台通用命令

### 构建全部
- **macOS/Linux:**
  ```sh
  ./gradlew build
  ```
- **Windows:**
  ```bat
  .\gradlew.bat build
  ```

### 运行所有测试
- **macOS/Linux:**
  ```sh
  ./gradlew allTests
  ```
- **Windows:**
  ```bat
  .\gradlew.bat allTests
  ```

### 清理项目
- **macOS/Linux:**
  ```sh
  ./gradlew clean
  ```
- **Windows:**
  ```bat
  .\gradlew.bat clean
  ```

---

## 5. 其他常用命令

- **查看全部任务：**
  ```sh
  ./gradlew tasks --all
  ```
  或
  ```bat
  .\gradlew.bat tasks --all
  ```
