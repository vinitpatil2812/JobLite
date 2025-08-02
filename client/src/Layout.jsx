import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen mx-auto">
            <Header />
            <Outlet />
            <footer className="mt-auto bg-gray-800 text-white py-6">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-xl font-bold mb-4 md:mb-0">JobLite</div>
                        <div className="flex space-x-6 text-sm">
                            <Link 
                                to="/terms" 
                                className="hover:text-[#1196c2] transition-colors duration-200"
                            >
                                Terms & Conditions
                            </Link>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-400">© 2025 JobLite. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
