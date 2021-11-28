# react-task-tracker
react task tracker 

**Key components:** 

1) Front-end: React

2) Back-end: NodeJS

**Highlights:** 

1) React Hook 

2) Google map api: auto-complete

**Getting started:**

Please note that we put the following in Package.json to be able to start our backend server when we did "npm start"

```jsx
json-server --watch db.json --port 5000
```

To see the backend-server, just go to [http://localhost:5000/tasks](http://localhost:5000/tasks)


Please also note that you have to insert your own map API key and Google calendar API key
1) Open public/index.html: insert your own map api key 
2) You would also need client ID and Google calendar API key

To run the project, please do: npm install and then npm start


**Some notes related to Google APIs:** 

1. To use a Google API, you have to first enable the API in Google Cloud Platform and get credential. 
2. For Google Calendar, you would need to obtain client ID. You can click on "credentials" in your dashboard and then click on the plus sign and "Create Credentials". Select OAuth client ID. Fill out the form to obtain a client ID. (Source of official documentation: [https://developers.google.com/workspace/guides/create-credentials](https://developers.google.com/workspace/guides/create-credentials)) If you have not yet configured OAuth consent screen, you have to do it first before creating a client ID. I think the goal of configuring OAuth consent screen is to let Google knows if your App is for external or internal users. I selected "external", and I have to add test users for my app. (More info related to creating an OAuth screen could be found. here: [https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)) 
3. To make sure that Google APIs can work on React native, you have to add the script tag to public/index.html. For my app, I added a script tag for Google calendar API and Google map API. 
4. More about Google calendar API: [https://developers.google.com/calendar/api/guides/auth](https://developers.google.com/calendar/api/guides/auth)
5. Nice example of using Google calendar API: https://github.com/grantsingleton/gapi-events-react and the Youtube Video: [https://www.youtube.com/watch?v=zaRUq1siZZo](https://www.youtube.com/watch?v=zaRUq1siZZo) (But please note that the author made the Youtube video in 2020, so some of the contents are outdated)

