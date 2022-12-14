from django.urls import path
from . import views

urlpatterns = [
  path('', views.getRoutes, name='routes'),
  path('tasks/<str:type>', views.getTasks, name='tasks'),
  path('closest_tasks', views.getClosestTasks, name='closest'),
  path('task/<int:id>', views.getTask, name='task'),
  path('task/delete/<int:id>', views.deleteTask, name='delete_task'),
  path('task/add', views.addTask, name='add_task'),
  path('task/<int:id>/edit', views.getTask, name='edit_task'),
  path('tasks', views.getAllTasks, name='all_tasks')
  
]