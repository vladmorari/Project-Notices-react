# Project-Notices-react 
- In this project I created a web site that allows us to authenticate and create users 😊
- it also allows us to create, read, update and delete notes (each user having access only to his notes)😊

# This project contains the following elements
## - components

   ✅ Header - here we find the navigation list
   
   ✅ IsLoading - the component that displays the loading animation

   ✅ Login-the component that give us the login form

   ✅ Notes - the component that creates a list consisting of other components of 'NoticePreview' 
  
   ✅ NoticePreview - the component that allows us to preview the note and at the same time access it by clicking
   
   ✅ PrivateRoute - is the route through which all secured routes pass, and if we are not authenticated it returns us to the login page
   
   ✅ Registration - is the component that contains the form of creating a new user

   ✅ requests - is the component that allows us to use backend's API
   
   
   ## - Modals

   ✅ Contains the components that allow us to edit and delete the note

 ##  - Pages
  
  ✅ LogOut - the page through which we logged out

  ✅ MyNotices - the page that allows us to display all the notes

  ✅ NewNotice - the page that allows me to create a new note

  ✅ Notice - the page that allows me to access a single note by id and at the same time delete or edit it
 
  ✅ Profile - home page, where I am always redirected when I log in

  # Other details ❗
- In this project I used 'redux' only partially because ,from my point of view most of the functionality does not require it 
- Also as a backend I used another project that I deployed on Heroku. The access link to the repository is here > https://github.com/vladmorari/Node-Server-API-Notices

