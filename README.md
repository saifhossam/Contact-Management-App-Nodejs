# 📇 Contact Management App - Node.js  
A simple RESTful API built with **Node.js**, **Express.js**, and **MongoDB** to manage contacts. This project is part of my learning journey in backend development.  

## 🚀 Features  
- Create, read, update, and delete (CRUD) contact information.  
- User registration and login with JWT authentication.  
- Password hashing using bcrypt.  
- Organized file structure with MVC pattern.  
- Environment-based configuration support.  

## 🧰 Tech Stack  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- bcrypt  
- JWT (JSON Web Token)  
- express-async-handler  
- dotenv  

## 📁 Project Structure  
```
📦Contact-Management-App-Nodejs  
 ┣ 📂Controllers  
 ┃ ┣ 📜contactControllers.js  
 ┃ ┗ 📜userControllers.js  
 ┣ 📂Models  
 ┃ ┣ 📜contactModel.js  
 ┃ ┗ 📜userModel.js  
 ┣ 📂Routes  
 ┃ ┣ 📜contactRoutes.js  
 ┃ ┗ 📜userRoutes.js  
 ┣ 📂Middleware  
 ┃ ┣ 📜errorHandler.js  
 ┃ ┗ 📜validateTokenHandler.js  
 ┣ 📜.env  
 ┣ 📜server.js  
 ┗ 📜package.json  
```  

## 📦 Installation  
1. **Clone the repository:**  
```bash  
git clone https://github.com/saifhossam/Contact-Management-App-Nodejs.git  
cd Contact-Management-App-Nodejs  
```  

2. **Install dependencies:**  
```bash  
npm install  
```  

3. **Set up environment:**  
Create a `.env` file in the root directory and add the following:  
```
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
```  

4. **Start the server:**  
```bash  
# For development (auto-restart using nodemon)  
npm run dev  

# Or for production  
node server.js  
```  

## 🧪 API Endpoints  

### 🔐 Authentication  
| Method | Endpoint            | Description         |  
|--------|---------------------|---------------------|  
| POST   | /api/users/register | Register new user   |  
| POST   | /api/users/login    | Login and get token |  

### 📇 Contacts (require JWT token)  
| Method | Endpoint           | Description          |  
|--------|--------------------|----------------------|  
| GET    | /api/contacts      | Get all contacts     |  
| POST   | /api/contacts      | Create a new contact |  
| GET    | /api/contacts/:id  | Get contact by ID    |  
| PUT    | /api/contacts/:id  | Update contact       |  
| DELETE | /api/contacts/:id  | Delete contact       |  

## ✅ Example .env file  
```
PORT=5000  
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/contactsDB  
JWT_SECRET=my_super_secret_key  
```  

## 📌 To-Do  
- [ ] Add unit tests  
- [ ] Improve error messages  
- [ ] Add frontend integration  

## 📄 License  
This project is open-source and available under the [MIT License](LICENSE).  

---  

💡 Built with passion by [Saif Hossam](https://github.com/saifhossam)
