import { Logout } from './Logout';
import { ToggleButton } from './ToggleButton';

export const Navbar = () => (
    <nav className="bg-primary border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
                <ToggleButton />
                <a href="/" className="flex items-center justify-between mr-4">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Gamdom</span>
                </a>
            </div>

            <div>
                <Logout />
            </div>
        </div>
    </nav>
);
