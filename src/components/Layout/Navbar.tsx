import React from 'react';
import { Search, Menu, Code } from 'lucide-react';

interface NavbarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const courses: string[] = [];
    const [searchOpen, setSearchOpen] = React.useState(false);

    return (
        <div className="flex flex-col w-full z-50 sticky top-0">
            {/* Top Bar - Global Navigation */}
            <div className="flex items-center justify-between bg-[#282A35] h-[60px] px-4 text-white relative">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden p-2 hover:bg-white/10 rounded"
                    >
                        <Menu size={24} />
                    </button>
                    <div className="flex items-center gap-2 cursor-pointer">
                        {/* Logo Placeholder */}
                        <div className="bg-[#04AA6D] p-1.5 rounded-sm">
                            <Code size={24} className="text-white" />
                        </div>
                        <span className="font-bold text-lg tracking-wide hidden sm:block">StudyTheSkill</span>
                        <span className="font-bold text-lg tracking-wide sm:hidden">STS</span>
                    </div>

                    <nav className="hidden md:flex gap-1 ml-4 h-full items-center">

                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Mobile Search Toggle */}
                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="sm:hidden p-2 hover:bg-white/10 rounded"
                    >
                        <Search size={20} />
                    </button>

                    <div className={`
                        absolute sm:relative top-full left-0 w-full sm:w-auto bg-[#282A35] sm:bg-transparent p-4 sm:p-0
                        ${searchOpen ? 'block' : 'hidden'} sm:block z-50 shadow-lg sm:shadow-none
                    `}>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-white/90 text-black px-4 py-1.5 rounded-full w-full sm:w-40 focus:w-60 transition-all outline-none"
                            />
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Bar - Horizontal Scrollable Courses */}
            <div className="bg-[#1D2A35] text-white overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex px-2">
                    {courses.map((course) => (
                        <a
                            href={`#${course.toLowerCase()}`}
                            key={course}
                            className={`
                                px-4 py-3 text-sm hover:bg-black/30 transition-colors block !text-white
                                ${course === 'SQL' ? 'bg-[#04AA6D] hover:bg-[#04AA6D]' : ''} 
                            `}
                        >
                            {course}
                        </a>
                    ))}
                    <a
                        href="/dbms"
                        className="px-4 py-3 text-sm bg-[#04AA6D] hover:bg-[#059862] transition-colors font-bold block !text-white"
                    >
                        DBMS
                    </a>
                    <a
                        href="/dsa"
                        className="px-4 py-3 text-sm bg-[#FF5722] hover:bg-[#E64A19] transition-colors font-bold block !text-white"
                    >
                        DSA
                    </a>
                </div>
            </div>
        </div>
    );
};
