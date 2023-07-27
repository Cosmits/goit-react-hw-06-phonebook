# goit-react-hw-06-phonebook

Використовуй цей
[шаблон React-проекту](https://github.com/goitacademy/react-homework-template#readme)
як стартову точку своєї програми.

# Критерії приймання

- Створений репозиторій `goit-react-hw-06-phonebook`
- При здачі домашньої роботи є посилання: на вихідні файли та робочу сторінку
  проекту на `GitHub Pages` або `Netlify`
- В Redux-стані зберігається мінімально необхідний набір даних
- Під час запуску коду завдання в консолі відсутні помилки та попередження.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом
  стилів
- Для компонентів описані `propTypes`
- Використана бібліотека `Redux Toolkit`

## Телефонна книга

Виконай рефакторинг коду застосунку «Телефонна книга», додавши управління станом
за допомогою бібліотеки [Redux Toolkit](https://redux-toolkit.js.org/).

Нехай Redux-стан виглядає наступним чином.

```bash
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

- Створи сховище з `configureStore()`
- Створи дії збереження та видалення контакту, а також оновлення фільтра.
  Використовуй функцію `createAction()`.
- Створи редюсери контактів та фільтра. Використовуй функцію `createReducer()`
  або `createSlice()`.
- Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки
  [react-redux](https://react-redux.js.org/).
