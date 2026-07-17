# LESSON-3 — Advanced Redux и асинхронность. Загрузка и комментарии
Ветка: lesson-3

## Запуск
npm ci && npm run dev
npm run build
## Чек-лист
- [x] API корректно описан и экспортирует хук useGetTasksQuery — 1 балл.
- [x] Загрузка задач происходит без ошибок — 1 балл.
- [x] Используется transformResponse для получения массива — 1 балл.
- [x] Реализован хук useTasks, в котором данные загружаются через useGetTasksQuery — 1 балл.
- [x] Задачи отображаются в интерфейсе — 1 балл.
- [x] Код структурирован и соответствует FSD — 1 балл.
- [x] Использован useEffect для загрузки данных в useState — 1 балл.
- [x] Реализована функция removeTask — 1 балл.
- [x] После удаления задача исчезает из UI — 1 балл.
- [ ] baseApi создан и экспортирован из shared/api/baseApi.ts (или shares/...), tagTypes включает Tasks — 1 балл.
- [ ] tasksApi использует injectEndpoints от baseApi; getTasks корректно возвращает Task[] — 1 балл.
- [ ] в store подключены baseApi.reducer и baseApi.middleware один раз — 1 балл.

## Не сделано / вопросы
- 