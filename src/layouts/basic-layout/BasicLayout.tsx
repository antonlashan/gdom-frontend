import { Outlet } from 'react-router-dom';

export function BasicLayout() {
    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900">Gamdom</span>

                <Outlet />
            </div>
        </section>
    );
}
