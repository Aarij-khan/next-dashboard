"use client"
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <section className="flex min-h-screen w-full">
            {/* Sidebar */}
            <div className="w-1/4 bg-[#DADADA] flex items-center pt-10 flex-col gap-6 px-2 h-screen sticky top-0">
                <h1 className="text-2xl font-bold font-sans uppercase">admin dashboard</h1>
                <Link
                    className="text-xl font-semibold font-sans uppercase shadow-md rounded-lg shadow-gray-600 bg-gray-300 w-full text-center py-2 cursor-pointer hover:bg-purple-500 hover:text-white"
                    href={'/dashboard/products'}
                >
                    <h1>products</h1>
                </Link>
                <Link
                    className="text-xl font-semibold font-sans uppercase shadow-md rounded-lg shadow-gray-600 bg-gray-300 w-full text-center py-2 cursor-pointer hover:bg-purple-500 hover:text-white"
                    href={'/dashboard/users'}
                >
                    <h1>users</h1>
                </Link>
                <Link
                    className="text-xl font-semibold font-sans uppercase shadow-md rounded-lg shadow-gray-600 bg-gray-300 w-full text-center py-2 cursor-pointer hover:bg-purple-500 hover:text-white"
                    href={'/'}
                >
                    <h1>notification</h1>
                </Link>
                <Link
                    className="text-xl font-semibold font-sans uppercase shadow-md rounded-lg shadow-gray-600 bg-gray-300 w-full text-center py-2 cursor-pointer hover:bg-purple-500 hover:text-white"
                    href={'/'}
                >
                    <h1>user</h1>
                </Link>
            </div>

            {/* Content Area */}
            <div className="w-full overflow-auto">
                {children}
            </div>
        </section>
    );
}
