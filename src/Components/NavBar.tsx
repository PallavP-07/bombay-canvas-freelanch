
import { useEffect, useState } from "react"
import { ChevronDown, Grid3X3, Menu, Search, X } from "lucide-react"
import LOGO from "../assets/bombay_canvas.svg"
const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const clearSearch = () => {
        setSearchValue("")
    }

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const links = [
        { href: "/", label: "Home" },
        { href: "/movies", label: "Movies" },
        { href: "/series", label: "Series" },
    ]

    return (
        <header
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-black/50 to-transparent"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Top section with logo and navigation */}
                <div className="flex items-center justify-between py-4 text-white">
                    {/* Logo and Navigation */}
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center flex-shrink-0">
                            <img
                                src={LOGO}
                                alt="CineSnap Logo"
                                className="w-24 h-16 object-contain"
                                onError={(e) => {
                                    // Fallback to placeholder if logo doesn't exist
                                    e.currentTarget.src = "/placeholder.svg?height=64&width=96&text=CineSnap"
                                }}
                            />
                        </a>

                        <nav className="hidden lg:flex gap-6">
                            {links.map(({ href, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="relative text-white/90 hover:text-white transition-colors duration-200 font-medium
             after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
             after:bottom-0 after:h-[3px] after:rounded-full  after:w-0 after:bg-white
             after:transition-all after:duration-300
             hover:after:w-3"
                                >
                                    {label}
                                </a>

                            ))}
                        </nav>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-6 pb-4">
                        {/* Search Bar */}
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search movies, series..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 focus:outline-none transition-all duration-200"
                            />
                            {searchValue && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        {/* Categories Button */}
                        <button className="flex items-center gap-2 px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 whitespace-nowrap">
                            <Grid3X3 className="h-4 w-4" />
                            Categories
                            <ChevronDown className="h-4 w-4" />
                        </button>

                        {/* Sign Up Button */}
                        <button className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap">
                            Sign up
                        </button>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Search and action bar */}

            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
                    <div className="container mx-auto px-4 py-6 space-y-4">
                        {/* Mobile Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 focus:outline-none"
                            />
                            {searchValue && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="space-y-2">
                            {links.map(({ href, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="block py-3 px-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Action Buttons */}
                        <div className="space-y-3 pt-4 border-t border-white/10">
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                                <Grid3X3 className="h-4 w-4" />
                                Categories
                                <ChevronDown className="h-4 w-4" />
                            </button>
                            <button className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default NavBar
