Разработка приложения каталога фильмов

Ваша задача разработать следующий UI используя Vuejs || Reactjs, JavaScript, HTML, CSS/SCSS

Макет
https://drive.google.com/file/d/10V0n8aU9D_JvVBM65DNx6-9CjKkij9FO/view?usp=drivesdk

UI

Шапка: название сайта, поиск, юзер
Поиск: поисковая фраза, число найденных результатов
Контент: изображение, имя, год, айди, тип
Пагинация

API

URL: https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8
Method: GET

Parameter	Required	Type	Default value	Description
s	yes	string		Title to search
page	no	number	1	Page number

Пример поиска “Batman” 2 страница
https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman&page=2


Требования

Каждый значимый элемент должен быть отдельным компонентом
Не использовать фреймворки для UI, верстаем руками
Необходимо зафиксировать время затраченное на разработку
Результат необходимо выгрузить в репозиторий (github, bitbucket, etc.)


Бонусные пункты

Адаптивность
Сообщение если нет результатов
Индикатор загрузки
Плейсхолдер если нет картинки