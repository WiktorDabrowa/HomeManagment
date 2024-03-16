from django.urls import path
from . import views

urlpatterns = [
  path('', views.get_routes, name='routes'),
  path('tasks/<str:type>', views.get_tasks, name='tasks'),
  path('tasks', views.get_all_tasks, name='all_tasks'),
  path('closest_tasks', views.get_closest_tasks, name='closest'),
  path('task/<int:id>/edit', views.edit_task, name='edit_task'),
  path('task/<int:id>', views.get_task, name='task'),
  path('task/delete/<int:id>', views.delete_task, name='delete_task'),
  path('task/add', views.add_task, name='add_task'),
  
]