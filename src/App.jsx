import './App.css';

export default function App() {
    return (
        <div className="flex h-screen bg-gray-100 font-poppins">
            {/* Side Panel */}
            <div className="bg-gray-900 w-1/4 max-w-xs p-4 text-gray-200">
                <div className="flex flex-col items-center space-y-4 w-full pt-8">
                    <div className="mb-4">
                        <img src="/favicon.svg" alt="Logo" className="h-16" />
                    </div>
                    <nav className="text-lg">
                        <a href="#" className="block mb-4 hover:text-white text-center">Home</a>
                        {/* Add more navigation items here */}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-8">

                {/* File Upload Section */}
                <div className="border p-4 mb-6 bg-white rounded shadow-md">
                    <div className="bg-gray-200 p-4 text-center mb-2 rounded cursor-pointer hover:bg-gray-300">
                        Drag and drop or 
                        <button className="text-gray-800 ml-2 p-2 border rounded hover:bg-gray-300">Upload</button>
                    </div>
                </div>

                {/* Access Controls */}
                <div className="border p-4 mb-6 bg-white rounded shadow-md">
                    <label className="block mb-2 text-lg font-medium">Expiration Date:</label>
                    <input type="date" className="border p-2 mb-4 w-full rounded shadow-sm"/>

                    <div className="flex mb-4 items-center">
                        <input type="checkbox" id="watermarking" className="mr-2"/>
                        <label htmlFor="watermarking" className="text-lg">Watermarking</label>
                    </div>

                    <div className="flex mb-4 items-center">
                        <input type="checkbox" id="protection" className="mr-2"/>
                        <label htmlFor="protection" className="text-lg">Persistent File Protection</label>
                    </div>
                </div>

                {/* Access Permissions */}
                <div className="border p-4 bg-white rounded shadow-md">
                    <div className="flex mb-4 items-center">
                        <label className="mr-2 text-lg font-medium">Access:</label>
                        <select className="border p-2 rounded shadow-sm">
                            <option>Public</option>
                            <option>Private</option>
                        </select>
                    </div>
                    
                    <label className="block mb-2 text-lg font-medium">Add Emails for Access:</label>
                    <input type="email" placeholder="Enter email" className="border p-2 mb-4 w-full rounded shadow-sm"/>

                    {/* List of emails (You can map through state to display them) */}
                    <ul>
                        {/* Example email list item */}
                        <li className="border mb-2 p-2 rounded shadow-sm">email@example.com 
                            <button className="text-red-500 ml-2 hover:underline">Remove</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

