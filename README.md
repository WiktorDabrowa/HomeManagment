# HomeManagment
React + Django App used for organizing home errands. The app uses:
- React for frontend
- Django REST for backend

## Functionality
Lets you perform basic CRUD operations on tasks organized into 5 different categories and display them accordingly. Additional toggleable sidemenu lets you know which tasks are due soon.

## How to run

Once you have downloaded the repo run:
```
pip install -r requirements.txt
```


## Issues 
The app is fully functional however it is not really optimized. Later into development I realized I could have had the frontend hit the backend fewer times with it`s requests. As of now the DB is hit on every tab change and also 6 seperate times on first load
