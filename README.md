🌍 CarbonHub

CarbonHub is a full-stack web application built using the MERN stack that helps individuals and organizations calculate their carbon footprint and take action to offset it.
Users can connect with verified NGOs to plant trees on their behalf, promoting sustainability and environmental responsibility.

🚀 Features

🌱 Carbon Footprint Calculator: Estimate emissions from daily activities.

🌳 Offset Carbon Emissions: Plant trees or donate through partnered NGOs.

👤 User Authentication: Secure signup/login for both users and NGOs.

🧾 NGO Directory: Explore NGOs, their initiatives, and contact details.

📊 Personal Dashboard: Track carbon savings and tree planting contributions.

🔒 Admin Controls: Manage NGOs, verify data, and oversee user submissions.

🛠️ Tech Stack
Category	Technologies
Frontend	React.js, HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ORM)
Authentication	JWT (JSON Web Token), bcrypt
API Handling	Axios, RESTful APIs
Version Control	Git, GitHub
⚙️ Installation & Setup

Follow these steps to run CarbonHub locally:

1. Clone the repository
git clone https://github.com/your-username/CarbonHub.git
cd CarbonHub

2. Install dependencies

Install for both client and server:

# For backend
cd server
npm install

# For frontend
cd ../client
npm install

3. Setup environment variables

Create a .env file in the server directory and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

4. Run the app

In two separate terminals:

# Run backend
cd server
npm start

# Run frontend
cd client
npm start


Now open 👉 http://localhost:3000

📁 Project Structure
CarbonHub/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # UI pages (Home, Login, Calculator, NGO, etc.)
│   │   ├── context/        # State management
│   │   └── App.js
│   └── package.json
│
├── server/                 # Node.js + Express backend
│   ├── models/             # MongoDB models (User, NGO, Trees, etc.)
│   ├── routes/             # API routes
│   ├── controllers/        # Logic for handling requests
│   ├── middlewares/        # Auth & validation
│   └── server.js
│
├── README.md
└── package.json

🧩 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register	Register a new user/NGO
POST	/api/auth/login	Login existing user
GET	/api/ngo	Fetch all NGOs
POST	/api/calculate	Calculate carbon footprint
POST	/api/offset	Offset carbon via tree planting


🚧 Future Enhancements

🌍 Integration with real-time carbon APIs for precise calculation

📈 Data visualization with charts for better insights

💰 Payment gateway for donations

📱 Mobile-friendly responsive layout

🧠 AI suggestions to reduce emissions

👨‍💻 Developed By

Vishal Rauniyar
Full Stack Developer
📧 [vishuroniyr@gmail.com]


