from django.urls import path
from . import views

urlpatterns = [
  path('', views.getRoutes, name='routes'),
  path('tasks/<str:type>', views.getTasks, name='all_tasks'),
  path('task/<int:id>', views.getTask, name='task'),
  path('task/delete/<int:id>', views.deleteTask, name='delete_task'),
  path('task/add', views.addTask, name='add_task')
  
]