
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


### 3. Delete a Scheduled Email
- **Method: DELETE**
- **Endpoint: /scheduled-emails/{id}**
- **Request URL: https://automated-email-api-1.onrender.com/scheduled-emails/{id}**
- **URL Parameters:id (string): Email ID to delete.**


### 4. Get a Specific Scheduled Email
- **Method: GET**
- **Endpoint: /scheduled-emails/{id}**
- **Request URL: https://automated-email-api-1.onrender.com/scheduled-emails/{id}**


## Demo
![Screenshot (119)](https://github.com/user-attachments/assets/5e87d011-684c-42a2-9afc-af3dcbf2b1b7)
![Screenshot (120)](https://github.com/user-attachments/assets/3ca922e2-5ea7-4890-93ab-ff2d92641884)
