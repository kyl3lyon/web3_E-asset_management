## Web3 E-Asset Management Portal

Secure, manage, and control your digital assets in a decentralized storage system using this portal. Built with React for the frontend, Flask for the backend API, and a Node.js server for direct interaction with nft.storage, this platform offers a modern interface, fast performance, and security features to ensure your digital assets are safe and accessible.

### Features

- **Decentralized Storage**: Keep your digital assets in a decentralized storage system, preventing any single point of failure.
  
- **End-to-End Encryption**: We prioritize the safety of your content with encryption and decryption capabilities. Your digital assets remain under your control at all times.
  
- **Access Control**: Define precise policies for who can access your assets, how long they can access them, and whether they can add other users.

### Getting Started

1. Clone the repository to your local machine.
2. Navigate to the frontend directory and install the necessary dependencies using `npm install`.
3. Start the frontend development server using `npm run dev`.
4. Navigate to the backend directory, set up a virtual environment, and install the necessary dependencies (e.g., Flask).
5. Start the Flask backend server.
6. Navigate to the `nft_storage_server` directory and install the required dependencies using `npm install`.
7. Start the Node.js server for `nft.storage` interactions.
8. Navigate to the provided local URL, and you should see the portal live.

### System Architecture

This platform uses a three-tier architecture:
- **Frontend**: Built with React, it serves as the user interface where users can upload and manage their digital assets.
- **Backend API**: Built with Flask, it acts as an intermediary between the frontend and the Node.js server.
- **Node.js Server**: Responsible for interacting with the `nft.storage` API to store files on IPFS.

### Development

The frontend utilizes React, ensuring a component-based and efficient approach to building user interfaces. The backend API logic is powered by Flask, offering a lightweight and flexible framework for web development. The Node.js server interacts with the `nft.storage` API to handle decentralized storage.

### Contributing

This project is open source for viewing and understanding purposes. We use the Creative Commons Attribution-NonCommercial-NoDerivatives license. You can view the code, but sharing and commercial use are restricted. Please refer to our [LICENSE](./LICENSE) for more details.

### Links

- [Distinct IP](https://www.distinctip.com)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Flask](https://flask.palletsprojects.com/)
- [nft.storage](https://nft.storage/)
