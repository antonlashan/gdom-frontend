import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export function AuthenticatedLayout() {
    return (
        <div className="antialiased bg-gray-50 h-screen">
            <Navbar />

            <Sidebar />

            <main className="p-4 md:ml-64 h-auto pt-20">
                <Outlet />
            </main>
        </div>
    );
}
