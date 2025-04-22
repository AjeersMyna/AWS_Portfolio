# 🚀 HTML Portfolio Deployment + AWS Lambda with S3 Trigger

This project showcases how to:

✅ Build and Dockerize a simple HTML Portfolio  
✅ Deploy it on an AWS EC2 instance  
✅ Push the Docker image to Docker Hub  
✅ Create an AWS Lambda function triggered by an S3 bucket upload

---

## 📁 Project Structure

```
/CC
├── index.html        # Portfolio HTML file
├── style.css         # CSS styling for portfolio
├── script.js         # JavaScript for interactivity
├── Dockerfile        # Dockerfile for building the image
├── README.md         # This documentation file
```

---

## 🐳 Docker Setup

### 1. Build Docker Image
```bash
sudo docker build -t sree2030/htmlpage .
```

### 2. Run Docker Container
```bash
sudo docker run -d -p 80:80 sree2030/htmlpage
```

Access your app at:  
http://<your-ec2-public-ip>

---

### 3. Push Image to Docker Hub

Tag and push your image:
```bash
sudo docker login
sudo docker tag htmlpage sree2030/htmlpage
sudo docker push sree2030/htmlpage
```

Now others can pull and run it:
```bash
docker pull sree2030/htmlpage
docker run -d -p 80:80 sree2030/htmlpage
```

---

## 💡 EC2 Setup Notes

- OS: Ubuntu 20.04
- Security Group:
  - Inbound rule: HTTP (port 80) from 0.0.0.0/0
- Docker installed with:  
```bash
sudo apt update && sudo apt install docker.io -y
```

---

## ☁️ AWS Lambda + S3 Trigger

This Lambda function is triggered when a file is uploaded to an S3 bucket.

### 1. Create S3 Bucket
- Example: my-trigger-bucket

### 2. Create Lambda Function
- Name: s3-trigger-demo
- Runtime: Python 3.9
- Permissions: Add S3 execution role (AmazonS3ReadOnlyAccess)

### 3. Add Trigger
- Trigger type: S3
- Event: PUT (upload)
- Bucket: my-trigger-bucket

### 4. Lambda Code (Python)
```python
import json

def lambda_handler(event, context):
    file = event['Records'][0]['s3']['object']['key']
    bucket = event['Records'][0]['s3']['bucket']['name']
    print(f"Received file: {file} from bucket: {bucket}")
    
    return {
        'statusCode': 200,
        'body': json.dumps(f'File {file} processed successfully!')
    }
```

### 5. Test
- Upload a file to your S3 bucket
- Check Lambda → Monitor → CloudWatch Logs

---

## 🧠 Future Improvements

- Add CI/CD with GitHub Actions
- Set up HTTPS using Nginx + Certbot
- Connect to custom domain
- Build multi-page static portfolio
- Send S3 uploads to SNS or SQS for async workflows

---

## ✨ Author

👩‍💻 sree2030  
🔗 Docker Hub: https://hub.docker.com/u/sree2030  
