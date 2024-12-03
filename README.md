# E-Learning System 📚

Welcome to the **E-Learning System** project! This platform allows users to register, explore courses, and enhance their learning experience with interactive features. With roles for **Admin**, **Professor**, and **User**, this system supports course enrollment, feedback, quizzes, and more.

## 🚀 Features

### 1. **User Mode** 👨‍🎓
- **Registration & OTP Verification**: Users can register with basic details. OTP is sent to their email for verification, and after verification, users can proceed to the course page.
- **Forgot Password**: If users forget their password, they can reset it by receiving a reset link via email.
- **Course Enrollment**: Users can explore a variety of courses, search specific courses, and enroll easily. They will receive course details and updates via email upon enrollment.
- **Course Progress**: After enrollment, users can view course modules, take quizzes, and download resources.
- **Certificate Generation**: Upon successful completion, a sample certificate is generated for each course.

### 2. **Admin Mode** 👨‍💻
- **User Management**: Admin can manage both Professors and Users, including adding or removing them as necessary.
- **Course Management**: Admin can add, update, and delete courses.
- **Dashboard Analytics**: Admin has access to analytics, including total courses, users, feedback, and course enrollments.

## 🛠 Tech Stack

### Frontend 💻
- **Angular**: A modern web framework used for building the user interface of the application.
- **HTML5**: Used for the structure of the web pages.
- **CSS3**: For styling the web pages and ensuring responsive design.
- **TypeScript**: Angular uses TypeScript, a typed superset of JavaScript.
  
### Backend ⚙️
- **Java Spring Boot**: A powerful framework for building robust and scalable backend services.
- **Spring Security**: Used for authentication and security management.
- **Spring Data JPA**: To interact with the MySQL database.

### Database 💾
- **MySQL**: A relational database used to store user data, course details, and other essential records.

### Tools & Platforms 🔧
- **VS Code**: For frontend development.
- **Eclipse/IntelliJ**: For backend development.
- **Postman**: To test REST APIs.
- **GitHub**: For version control and collaboration.
- **MySQL Workbench**: For managing the MySQL database.

## 📖 Key Pages & Functionalities

### 1. **Home Page**
- The landing page presents a welcoming UI with a brief introduction to the system and options to navigate to various pages.

### 2. **Registration & OTP Verification**
- Users can sign up by entering their details. An OTP is sent to the user's email for verification. After successful verification, they are redirected to the course page.

### 3. **Course Page**
- **Searchable Course List**: Users can browse and search for courses.
- **Course Details**: Each course has detailed information, including the course description, modules, and duration.
- **Enroll Now**: Users can click on "Enroll" to join a course, and they will receive an email confirmation with the course details.

### 4. **Course Modules & Progress**
- **Module View**: Once enrolled, users can access course materials, videos, and resources.
- **Take Quiz**: A quiz is available for each course. Users must pass the quiz to complete the course.
- **Download Resources**: Users can download PDFs or other resources related to the course.

### 5. **Feedback**
- Users can submit feedback for each course, which is then reviewed by professors and administrators.

### 6. **About Page**
- The about page provides information about the team, the courses offered, and location details (such as the institution's address).

### 7. **Admin Dashboard**
- Admin can manage users, courses, and professors. Admins have the ability to add or update courses and manage feedback.

## ⚙️ Running the Project

### 1. **Frontend Development Server**
To start the frontend server, run the following command in the Angular project directory:
```bash
ng serve


# ELearn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
"# E-Learning" 
