
# Automated Email Scheduling API

## Base URL

`https://automated-email-api-1.onrender.com`

## Endpoints

### 1. Schedule an Email

- **Method:** `POST`
- **Endpoint:** `/schedule-email`
- **Request URL:** `https://automated-email-api-1.onrender.com/schedule-email`
- **Request Body:**
  ```json
  {
    "recipient": "prakhar6601@gmail.com",
    "subject": "Test Email2",
    "body": "This is a test email2.",
    "scheduleTime": "2024-07-30T06:19:41.058Z"
  }
  
### 2. Get All Scheduled Emails

- **Method: GET**
- **Endpoint: /scheduled-emails**
- **Request URL: https://automated-email-api-1.onrender.com/scheduled-emails**
- ![image](https://github.com/user-attachments/assets/6d646b11-20e2-4f7d-ab91-c2b697ef3c2f)



### 3. Delete a Scheduled Email
- **Method: DELETE**
- **Endpoint: /scheduled-emails/{id}**
- **Request URL: https://automated-email-api-1.onrender.com/scheduled-emails/{id}**
- **URL Parameters:id (string): Email ID to delete.**
- ![Screenshot 2024-07-30 121001](https://github.com/user-attachments/assets/7352de3d-87f2-450c-bbcf-f20a7a283c96)


### 4. Get a Specific Scheduled Email
- **Method: GET**
- **Endpoint: /scheduled-emails/{id}**
- **Request URL: https://automated-email-api-1.onrender.com/scheduled-emails/{id}**
- ![Screenshot 2024-07-30 121016](https://github.com/user-attachments/assets/f241b00d-e2a7-4d50-af5d-f699363b82f1)


## Demo
![Screenshot (119)](https://github.com/user-attachments/assets/5e87d011-684c-42a2-9afc-af3dcbf2b1b7)
![Screenshot (120)](https://github.com/user-attachments/assets/3ca922e2-5ea7-4890-93ab-ff2d92641884)



