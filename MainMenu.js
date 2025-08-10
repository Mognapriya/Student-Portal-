import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
    const navigate = useNavigate();

    const menuItems = [
        { title: 'Profile', icon: '👤', description: 'View and edit your profile', route: '/profile' },
        { title: 'Courses', icon: '📚', description: 'Access your courses', route: '/courses' },
        { title: 'Grades', icon: '📊', description: 'Check your grades', route: '/grades' },
        { title: 'Schedule', icon: '📅', description: 'View your schedule', route: '/schedule' },
    ];

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 p-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold">Student Portal</h1>
                    <button
                        onClick={handleLogout}
                        className="text-white bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <div className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-6">Welcome, Student!</h2>
                <div className="grid grid-cols-2 gap-6">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(item.route)}
                            className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
