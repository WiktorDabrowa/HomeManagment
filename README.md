# HomeManagment
Simple React/Django App used for organizing home errands. The app uses:
- React for frontend
- Django REST for backend

## Functionality
This web app behaves like a To-do app. Lets you create, read, delete and update tasks organized into 5 different categories and displays them accordingly. Additional toggleable sidemenu lets you know which tasks are due soon.

## Issues 
The app is fully functional however it is not really optimized. Later into development I realized I could have had the frontend hit the backend fewer times with it`s requests. As of now the DB is hit on every tab change and also 6 seperate times on first load
