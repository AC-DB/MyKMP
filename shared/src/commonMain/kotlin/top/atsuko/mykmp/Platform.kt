package top.atsuko.mykmp

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform