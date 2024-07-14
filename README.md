# Project-for-Techfest-24
Submission of Web Development Project as CA for Techfest'24 IIT Bombay
To develop a web application that digitalizes the hospitality process for group accommodation, we'll follow a structured approach:

Technical Breakdown
#Data Structure & Parsing:

*CSV File 1 (Group Information):
    --Contains group ID, number of members, and gender.
*CSV File 2 (Hostel Information):
    --Contains hostel name, room number, room capacity, and gender accommodation.

#Frontend:

*Upload interface for two CSV files.
1.User-friendly interface to display room allocation results.
2.Button to download the allocation results as a CSV file.

#Backend Logic:

*Parse CSV files and store data in suitable data structures.
1.Implement an algorithm to allocate rooms based on the criteria.
2.Generate allocation results.

Steps to Implement the Application
Step 1: Set Up the Project
Initialize Project:

Use a web framework such as Flask or Django for the backend.
Use a frontend framework like React or Vue.js for a responsive interface.
Install Necessary Libraries:

For Python: pandas for CSV parsing, Flask/Django for the backend.
For JavaScript: axios for API calls, and any CSV parsing library like PapaParse.
Step 2: Build the Frontend
Create Upload Interface:

Two file input fields for the CSV files.
A submit button to send the files to the backend.
Display Results:

A table to display room allocation results.
A download button for the CSV file of results.
Step 3: Backend Logic
CSV Parsing:

Use pandas to read and process CSV files.
Store group and hostel information in appropriate data structures.
Room Allocation Algorithm:

Ensure groups with the same ID stay together.
Respect room capacities and gender-specific accommodations.
Generate Output:

Create a data structure to store allocation results.
Convert this data structure to a CSV file format.
Step 4: Integration
API Endpoints:

Endpoint to handle file uploads and initiate room allocation.
Endpoint to download the resulting allocation CSV.
Connect Frontend and Backend:

Use axios to send files to the backend and fetch the results.
Display results on the frontend and provide a download option.

