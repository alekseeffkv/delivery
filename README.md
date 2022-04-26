# Delivery

Delivery - cайт компании, которая занимается доставкой готовых блюд. Сборка размещена на <https://delivery202204.web.app>.

Проект сделан с помощью JavaScript-библиотеки **React** и state менеджера **Redux**. Для создания мемоизированных функций в Redux применяется **Reselect**, для запросов на сервер - **Redux Thunk**. Для роутинга используется **React Router**. Для работы формы оформления заказа применяется **React Hook Form**. Стилизация компонентов сделана с помощью **SCSS** и **React Transition Group**.

Приложение имеет следующую функциональность:

## Меню

Пользователь может посмотреть блюда по категориям. На карточке продукта есть возможность добавить его в корзину и выбрать количество. Нажатие на карточку открывает более подробную информацию о блюде.

## Поиск

В приложении организован поиск по названию блюда. В результатах поиска отображаются ссылки на страницы соответствующих продуктов.

## Корзина

Пользователь может выбрать количество каждого блюда в корзине или убрать его. При клике по карточке происходит переход на страницу продукта.
При пустой корзине или недостаточной сумме заказа появляются соответствующие модальные окна с предупреждением.

## Оформление заказа

В форме оформления заказа есть обязательные поля, без заполнения которых заказ не отправится на сервер. После успешного или не успешного создания заказа появляются соответствующие модальные окна.
