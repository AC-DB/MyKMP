这是一个面向 Android、Web、桌面 (JVM) 和服务器的 Kotlin 多平台项目。

* [/composeApp](./composeApp/src) 用于存放将在您的 Compose 多平台应用程序中共享的代码。
  它包含几个子文件夹：
- [commonMain](./composeApp/src/commonMain/kotlin) 用于存放所有目标平台通用的代码。
- 其他文件夹用于存放仅针对文件夹名称中指定的平台进行编译的 Kotlin 代码。
  例如，如果您想在 Kotlin 应用程序的 iOS 部分使用 Apple 的 CoreCrypto，
  那么 [iosMain](./composeApp/src/iosMain/kotlin) 文件夹就是进行此类调用的正确位置。
  同样，如果您想编辑桌面 (JVM) 特定的部分，那么 [jvmMain](./composeApp/src/jvmMain/kotlin)
  文件夹也是合适的位置。

* [/server](./server/src/main/kotlin) 用于 Ktor 服务器应用程序。

* [/shared](./shared/src) 用于存放项目中所有目标之间共享的代码。
  最重要的子文件夹是 [commonMain](./shared/src/commonMain/kotlin)。如果您愿意，
  也可以在此处将代码添加到平台特定的文件夹中。

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

### 构建并运行服务器

要构建并运行服务器的开发版本，请使用 IDE 工具栏中运行小部件中的运行配置
或直接从终端运行：
- 在 macOS/Linux 上
```shell
./gradlew :server:run
```
- 在 Windows 上
```shell
.\gradlew.bat :server:run
```

### 构建并运行 Web 应用

要构建并运行 Web 应用的开发版本，请使用 IDE 工具栏中运行小部件中的运行配置
或直接从终端运行：
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

了解更多关于 [Kotlin Multiplatform](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html)、
[Compose Multiplatform](https://github.com/JetBrains/compose-multiplatform/#compose-multiplatform)、
[Kotlin/Wasm](https://kotl.in/wasm/)…

我们期待您在公共 Slack 频道 [#compose-web](https://slack-chats.kotlinlang.org/c/compose-web) 中就 Compose/Web 和 Kotlin/Wasm 提供反馈。
如果您遇到任何问题，请在 [YouTrack](https://youtrack.jetbrains.com/newIssue?project=CMP) 上报告。

常用配置
基于您的Kotlin Multiplatform项目的Gradle tasks输出，我来为您生成各个平台的开发、调试和打包命令。这个项目支持Android、Web(JS/WASM)、桌面(JVM)和Ktor服务器。

## 🚀 开发和运行命令

### **桌面平台 (JVM)**
```bash
# 开发运行 (支持热重载)
./gradlew hotDevJvm

# 普通运行
./gradlew run
./gradlew jvmRun

# 运行Fat JAR
./gradlew runFatJar

# 运行Shadow JAR
./gradlew runShadow
```

### **Android平台**
```bash
# 安装Debug版本到设备
./gradlew installDebug

# 运行Android测试
./gradlew connectedDebugAndroidTest

# 卸载应用
./gradlew uninstallDebug
```

### **Web平台 (JavaScript)**
```bash
# 开发模式运行 (带热重载)
./gradlew jsBrowserDevelopmentRun

# 生产模式运行
./gradlew jsBrowserProductionRun

# 构建开发版Web包
./gradlew jsBrowserDevelopmentWebpack

# 构建生产版Web包
./gradlew jsBrowserProductionWebpack
```

### **Web平台 (WebAssembly)**
```bash
# 开发模式运行
./gradlew wasmJsBrowserDevelopmentRun

# 生产模式运行
./gradlew wasmJsBrowserProductionRun

# 构建开发版WASM包
./gradlew wasmJsBrowserDevelopmentWebpack

# 构建生产版WASM包
./gradlew wasmJsBrowserProductionWebpack
```

### **Ktor服务器**
```bash
# 运行Ktor服务器
./gradlew runFatJar

# 使用Docker运行
./gradlew runDocker

# 构建Fat JAR
./gradlew buildFatJar
```

## 🔧 构建和打包命令

### **通用构建**
```bash
# 清理项目
./gradlew clean

# 构建所有平台
./gradlew build

# 仅编译不测试
./gradlew assemble
```

### **Android打包**
```bash
# 构建Debug APK
./gradlew assembleDebug

# 构建Release APK
./gradlew assembleRelease

# 生成签名报告
./gradlew signingReport

# 构建Bundle (AAB)
./gradlew bundle
```

### **桌面打包**

#### **Windows (当前系统)**
```bash
# 打包当前操作系统的分发包
./gradlew packageDistributionForCurrentOS

# 创建MSI安装包
./gradlew packageMsi

# 创建可分发应用
./gradlew createDistributable

# 创建Uber JAR
./gradlew packageUberJarForCurrentOS
```

#### **跨平台打包**
```bash
# 创建通用分发包
./gradlew createDistributable

# 打包DEB (Linux)
./gradlew packageDeb

# 打包DMG (macOS)
./gradlew packageDmg

# 创建Release版本
./gradlew createReleaseDistributable
./gradlew packageReleaseDistributionForCurrentOS
```

### **Web打包**
```bash
# JS分发包
./gradlew jsBrowserDistribution

# WASM分发包
./gradlew wasmJsBrowserDistribution

# 兼容性分发包 (JS + WASM)
./gradlew composeCompatibilityBrowserDistribution
```

### **Docker容器**
```bash
# 构建Docker镜像到tar
./gradlew buildImage

# 构建并发布到本地Docker
./gradlew jibDockerBuild

# 发布到远程仓库
./gradlew publishImage

# 发布到本地仓库
./gradlew publishImageToLocalRegistry
```

## 🧪 测试命令

### **运行所有测试**
```bash
# 运行所有平台测试
./gradlew allTests

# 运行检查
./gradlew check
```

### **平台特定测试**
```bash
# JVM测试
./gradlew jvmTest

# Android单元测试
./gradlew testDebugUnitTest
./gradlew testReleaseUnitTest

# Android设备测试
./gradlew connectedAndroidTest

# JavaScript测试
./gradlew jsTest
./gradlew jsBrowserTest

# WebAssembly测试
./gradlew wasmJsTest
./gradlew wasmJsBrowserTest
```

## 📦 分发命令

```bash
# 创建Tar包
./gradlew distTar

# 创建Zip包
./gradlew distZip

# 安装到本地
./gradlew installDist

# Shadow分发
./gradlew shadowDistZip
./gradlew shadowDistTar
```

## 🔥 热重载开发

```bash
# JVM热重载开发
./gradlew hotDevJvm

# 异步热重载
./gradlew hotDevJvmAsync

# 重新加载所有应用
./gradlew reload
```

## 🛠️ 实用工具命令

```bash
# 查看依赖
./gradlew dependencies

# 查看项目属性
./gradlew properties

# 生成Wrapper
./gradlew wrapper

# 查看Java工具链
./gradlew javaToolchains

# 检查Kotlin配置
./gradlew checkKotlinGradlePluginConfigurationErrors
```
