# CI/CD Pipeline for Java and Node.js Applications 🚀

Welcome to the **CI/CD Pipeline Project**, a modern, automated solution for building, testing, and deploying **Java** and **Node.js** applications using **Jenkins**. This project demonstrates a seamless, fully integrated pipeline that ensures both applications are consistently deployed with top-notch code quality checks, automated testing, and efficient management.

---

## 🎯 **Project Overview**

This repository consists of **two Jenkins pipelines**, each handling different parts of the project:

### 1️⃣ **Pipeline 1 - Java Application** (Maven-based)
- **Automated Build & Test**: Compiles Java code and runs unit tests.
- **Code Quality Analysis**: Runs **SonarQube** to ensure high-quality code.
- **Artifact Deployment**: Deploys to **Nexus** for artifact storage.
- **Application Deployment**: Deploys the Java application to **Tomcat**.
- **Triggers Pipeline 2**: Parallerly, automatically triggers **Pipeline 2** (Node.js).

### 2️⃣ **Pipeline 2 - Node.js Application** (npm-based)
- **Automated Checkout**: Pulls the Node.js application from GitHub.
- **Dependency Management**: Installs all required dependencies using **npm**.
- **Unit & Jest Tests**: Runs tests to ensure application integrity.
- **Code Quality Analysis**: Performs **SonarQube** code analysis.
- **Deploy to Nexus**: Deploys the artifact to **Nexus** for versioning.
- **Application Deployment**: Deploys the Node.js application using **PM2**.
- **PM2 Status Check**: Verifies if the app is running successfully.

---

## 💡 **Project Goals**

This project strives to achieve:
- **Automated Deployments**: From build to deployment for **both Java and Node.js** applications.
- **Quality Assurance**: **SonarQube** integration for automatic code quality analysis.
- **Real-time Notifications**: Instant **Slack** notifications about the build status.
- **Efficient Management**: Deploy Java apps on **Tomcat** and manage Node.js apps with **PM2**.

---

## ⚙️ **How It Works**

This project leverages two pipelines to handle the automation of your applications:

### Pipeline 1 (Java Application)
1. **Checkout**: Clones the Java project from GitHub.
2. **Compile & Test**: Builds and tests the application using **Maven**.
3. **SonarQube Analysis**: Runs a code quality check using **SonarQube**.
4. **Deploy to Nexus**: Deploys the Java artifact to **Nexus** for versioning.
5. **Deploy to Tomcat**: Deploys the built application to the **Tomcat** server.
6. **Trigger Pipeline 2**: On success, triggers **Pipeline 2** to start the Node.js pipeline.

### Pipeline 2 (Node.js Application)
1. **Checkout**: Clones the Node.js project from GitHub.
2. **Install Dependencies**: Uses **npm** to install necessary packages.
3. **Unit & Jest Tests**: Executes both **unit** and **Jest** tests for the application.
4. **SonarQube Analysis**: Runs **SonarQube** analysis for Node.js code quality.
5. **Start Application with PM2**: Deploys the Node.js app using **PM2**.
6. **Verify Status**: Uses **PM2** to check the application’s running status.

---

## 🌟 **Why This Project?**

This project is designed to solve several challenges in modern development workflows:
- **Automate everything**: No more manual deployments. Everything, from builds to tests to deployment, is automated.
- **High-quality code**: Continuous **SonarQube analysis** ensures that your code maintains the highest standards.
- **Real-time updates**: Stay informed with **Slack notifications** every time a build succeeds or fails.
- **Seamless app management**: **Tomcat** for Java and **PM2** for Node.js makes managing your applications effortless.

---

## 🛠️ **Technologies Used**

- **Jenkins**: For automating the entire build, test, and deployment pipeline.
- **GitHub**: Hosts the source code for both Java and Node.js applications.
- **Maven**: Handles the build and deployment for the Java project.
- **SonarQube**: Analyzes the code quality to maintain high standards.
- **Nexus**: Stores Java artifacts for deployment and versioning.
- **Tomcat**: Hosts and runs the Java application.
- **PM2**: Manages and runs the Node.js application efficiently.
- **Slack**: Sends real-time notifications about build status.

---

## 🚀 **How to Set Up and Run**

### 1️⃣ **Install Jenkins and Required Plugins**
   - Install the following Jenkins plugins:
     - **NodeJS** plugin
     - **SonarQube** plugin
     - **Slack Notification** plugin
     - **JUnit** plugin

### 2️⃣ **Configure Jenkins Tools**
   - Go to **Jenkins Global Configuration** and add **Node.js** and **Maven**.

### 3️⃣ **Set Up GitHub Repositories**
   - Ensure your Java and Node.js projects are hosted on GitHub and have webhooks set up to trigger Jenkins jobs.

### 4️⃣ **Create the Pipelines in Jenkins**
   - **Pipeline 1** (Java): Create a Jenkins pipeline that handles the Java application’s build, test, SonarQube analysis, and deployment.
   - **Pipeline 2** (Node.js): Create a Jenkins pipeline for Node.js that manages checkout, testing, SonarQube analysis, and PM2 deployment.

### 5️⃣ **Integrate SonarQube**
   - Set up **SonarQube** analysis for both projects to maintain code quality.

### 6️⃣ **Add Slack Integration**
   - Set up Slack webhooks in Jenkins to get instant notifications of build results.

### 7️⃣ **Trigger Pipelines**
   - **Pipeline 1** triggers **Pipeline 2** automatically upon successful completion.

---

## 📝 **Challenges Faced**

- **Managing Two Different Tech Stacks**: Integrating both **Java (Maven)** and **Node.js (npm)** pipelines required handling separate build tools and environments.
- **SonarQube Integration**: Ensuring that SonarQube correctly analyzes both Java and Node.js code with the same configurations.
- **Deployment Management**: Deploying the Java app to **Tomcat** and the Node.js app using **PM2** required careful configuration of both servers.
- **Monitoring and Notifications**: Configuring **Slack** notifications and **PM2 status checks** for real-time feedback on app performance.

---

## 🎉 **Conclusion**

This **CI/CD pipeline** provides a comprehensive solution for automating the deployment and management of **Java** and **Node.js** applications. By integrating tools like **Jenkins**, **SonarQube**, **PM2**, and **Slack**, this project ensures that both your applications are constantly tested, deployed, and monitored, giving you peace of mind and improved productivity.

---

### 🔧 **Get Started**

Clone this repository and adapt it to your own needs. Customize the pipeline scripts for your specific Java and Node.js projects, and you'll have a robust CI/CD solution in no time! 🎉

---

