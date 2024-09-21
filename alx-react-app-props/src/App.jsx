import React from 'react';
import { UserProvider } from './context/UserContext'; // Import your UserContext provider
import UserProfile from './components/UserProfile'; // Import your UserProfile component
// Import other components or routes as needed

const App = () => {
    return (
        <UserProvider>
            <div className="app">
                <header>
                    <h1>Your Application Name</h1>
                    {/* Add navigation or other header elements here */}
                </header>
                <main>
                    <UserProfile /> {/* Render your UserProfile component */}
                    {/* Add other components or routes here */}
                </main>
                <footer>
                    <p>&copy; 2024 Your Name</p>
                </footer>
            </div>
        </UserProvider>
    );
};

export default App;
