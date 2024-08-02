document.addEventListener("DOMContentLoaded", () => {
  let burgerButton = document.getElementById('burger-button')
  let sideNavigation = document.getElementById('side-navigation')

  burgerButton.addEventListener('click', function() {
    let burgerLines = document.querySelector('.burger-1')
    burgerButton.classList.toggle('burger-active')
    burgerLines.classList.toggle('is-closed')
    sideNavigation.classList.toggle('side-is-visible')
  })


  $(document).ready(function() {
    var my_calendar = $("#dncalendar-container").dnCalendar({
      minDate: "2022-01-01",
      maxDate: "2030-12-02",
      defaultDate: "2017-01-01",
      monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ], 
      monthNamesShort: [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
      // !!! Начинать с воскресенья
      dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'], 
              // !!! Начинать с воскресенья
              dayNamesShort: [ 'Вс', 'Пон', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
              dataTitles: { defaultDate: 'default', today : 'Сегодня' },
              notes: [
                  // решить проблему, если событие НЕ в ытом месяце
                  { "date": "2024-07-31", "note": ["Лекция Семёна Егорова в Арт пространстве &laquo;Лекторий-Конструктория&raquo;","https://asus.com"] },
                  { "date": "2024-08-01", "note": ["Конструктория в Тюмени","https://vk.com"] },
                  { "date": "2024-08-07", "note": ["Конструктория в Иркутске","https://apple.com"] },
                  { "date": "2024-08-10", "note": ["Конструктория в Москве","https://samsung.com"] },
                  { "date": "2024-08-30", "note": ["Лекция Семёна Егорова в Арт пространстве &laquo;Лекторий-Конструктория&raquo;","https://asus.com"] },
                  { "date": "2024-09-10", "note": ["Лекция Семёна Егорова в Арт пространстве &laquo;Лекторий-Конструктория&raquo;","https://asus.com"] },
                  
                  ],
              showNotes: true,
              // !!! здесь ПН, так надо !
              startWeek: 'Monday',
              dayClick: function(date, view) {
                // за это отвечает библиотека tippy
                // активируется на 697 строке dncalendar.js
              }
    });

    // init calendar
    my_calendar.build();

    // update calendar
    my_calendar.update({
    	minDate: "2016-01-05",
    	defaultDate: new Date().toJSON().slice(0, 10),
    });
  });

  // tippy('[data-tippy-content]', {
  //   content: 'Global content',
  //   trigger: 'click',
  //   interactive: true,
  //   appendTo: () => document.body,
  //   allowHTML: true,
  // });
});

