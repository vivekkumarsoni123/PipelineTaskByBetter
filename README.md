# 🚀 PipelineTaskByBetter

This project demonstrates a **CI/CD pipeline** for a Node.js application using **Docker** and **GitHub Actions**.  
It also includes a **Kubernetes deployment manifest** for running the app in a container orchestration environment.

---

## 📂 Project Structure
```

.
├── .github/workflows/main.yml   # GitHub Actions workflow for CI/CD
├── Dockerfile                   # Docker image definition for the app
├── k8s-deployment.yaml          # Kubernetes Deployment + Service
├── package.json                 # Node.js dependencies and scripts
├── server.js / app.js           # Main application entry point
└── README.md                    # Project documentation

```

---

## ⚙️ Tech Stack
- **Node.js (v18)** – Backend application
- **Docker** – Containerization
- **GitHub Actions** – CI/CD pipeline automation
- **Kubernetes (K8s)** – Deployment and service orchestration (optional)
- **Docker Hub** – Container image registry

---

## 🚀 Workflow Overview (CI/CD)
The pipeline is configured in **`.github/workflows/main.yml`** and works as follows:

1. **Trigger**  
   - Runs automatically on every push to the `main` branch.

2. **Steps**
   - Checkout repository code.
   - Set up Node.js environment.
   - Install dependencies (`npm install`).
   - (Optional) Run tests (`npm test`).
   - Log in to Docker Hub using **GitHub Secrets**.
   - Build and push a Docker image to Docker Hub.

3. **Docker Image**  
   The image will be pushed to Docker Hub with the tag:
```

\<DOCKER\_USERNAME>/my-node-devops-app\:latest

````

---

## 🐳 Docker Setup

### Build Image Locally
```bash
docker build -t my-node-app .
````

### Run Container

```bash
docker run -p 3000:3000 my-node-app
```

Your app will be available at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔑 GitHub Secrets Required

To enable pushing to Docker Hub, set the following repository secrets:

* `DOCKER_USERNAME` → your Docker Hub username
* `DOCKER_PASSWORD` → your Docker Hub access token

👉 You can create a token in Docker Hub under: **Account Settings → Security → Access Tokens**.

---

## ☸️ Kubernetes Deployment (Optional)

A manifest is provided in `k8s-deployment.yaml`:

```yaml
kubectl apply -f k8s-deployment.yaml
```

This will:

* Deploy the Node.js app as a pod (via Deployment).
* Expose it via a Service (port 80 → container port 3000).
* If using Minikube:

  ```bash
  minikube service my-node-app-service
  ```

---

## 📌 Future Improvements

* Add automated test step before Docker build.
* Push multiple image tags (`latest` and commit SHA).
* Deploy automatically to a Kubernetes cluster (GitOps/ArgoCD/Helm).

---

## 👨‍💻 Author

**Vivek Kumar Soni**

* [GitHub](https://github.com/vivekkumarsoni123)
* [LinkedIn](https://linkedin.com/in/vivek-kumar-soni-9b2591258)
  
