export const CareChangerContent = `
# CareChanger
## Problem
- Void events in incontinent patients can cause mental and physical issues if not being attended in time such as itching, burning, and infection.
- Attending the void events daily requires the nurses or care givers to constantly check the patient or based on a fixed schedule.
- By 2026, there will be **1,126,000** seniors suffering from urine incontinence.

## Actions
- Created a device embedded into patient’s seat cushion to detect urinary incontinence.
- Built a web application, server, and mobile applications to alarm the caregivers in time.

## My Tasks
- Designed and developed the front-end of the web application.
    - Contained **user authentication, permission levels, invitation handling, responsive design**, etc.
    - Optimized the performance of the frontend by image compression, removing unused JavaScript, and deferring offscreen images, resulting in the top **10%** of global website ranking.
    - Refactored the frontend codebase leveraging **React components** and by separating logic, UI, and network calls, which produced 15 components used across the code, enhancing the scalability and testability.
    - Consumed **31** REST APIs using **Axios React** library, fetching and gathering data from .NET server, which enabled the users to access different resources according to their permissions, streamlining the user experience.
- Collaborated with backend engineer to implement backend architecture.
    - Collaborated in the Design of a **SQS service** to receive the request from hardware devices.
    - Contributed to the implementation of **SNS service** to trigger push notification in mobile and web apps.
    - Stored **14,400** daily data coming from hardware devices in **S3 Bucket**.
    - Developed **API gateway, Lambda function** and **Dynamo DB** to expose backend to the web and mobile apps, process the request , and store users information in relational database respectively,
- Automated the release process to build, package, and deploy the frontend and the backend from GitHub to AWS using **GitHub Actions**.
- Contributed to the development of Android and iOS application.
    - Provided **user authentication, hardware device adding using Bluetooth, receiving real-time notifications, daily graph**, etc.
    - Released Android and iOS apps into **Google Play** and **TestFlight** respectively.
- Provided **15** frontend, mobile, and system documents in PDF using **Notion** for the teams to seamlessly learn the basics of the platform.
- Communicated with Stakeholder to gather requirements.

## Result
- 60% improvement in care quality : Increasing successful detection in toilet needs from 2 times a day to 6 times a day.

## Tech Stack
Front-end:
- React.js
- JavaScript
- Ant design
- HTML, CSS
- NPM
- Create react app

Back-end:
- .NET
- C#
- AWS
  - Lambda functions
  - S3 buckets
  - Dynamo DB
  - API-gateway
  - SQS
  - SNS
  - GitHub-actions

iOS:
- Swift
- TestFlight

Android:
- Java

Other tools:
- Postman
- Firebase
- Auth0

Version control:
- Git
- GitHub
## Links
- [Linkedin](https://www.linkedin.com/posts/ehsanghasaei_victoria-fathers-device-for-wheelchair-users-activity-6988913854978150401-_2mo/?utm_source=share&utm_medium=member_desktop)
- [YouTube](https://youtu.be/28WE59gSHUg)
- [Local-news](https://www.cheknews.ca/victoria-fathers-device-for-wheelchair-users-gets-closer-to-hitting-the-market-1051086/)
- [YouTube](https://youtu.be/4I1U5JE1PKo)
`;