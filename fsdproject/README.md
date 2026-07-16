# Filtering
before
![alt text](image.png)
![alt text](image-1.png)

after
![alt text](image-4.png)
![alt text](image-3.png)
До оптимизации иконка удаления рендерилась многократно, после мемоизации карточки - карточка не перерендеривается при фильтрации.
![alt text](image-5.png)
Так как карточки не менялись, то и не ререндерились.

# Deleting
before
![alt text](image-2.png)

after
![alt text](image-7.png)
Удалила 3 карточки - остальные карточки не ререндерились.
