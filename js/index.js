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
      dayNames: [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
              dayNamesShort: [ 'Пон', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
              dataTitles: { defaultDate: 'default', today : 'Сегодня' },
              notes: [
                  { "date": "2024-08-02", "note": ["Natal"] },
                  { "date": "2024-08-01", "note": ["Tahun Baru"] }
                  ],
              showNotes: true,
              startWeek: 'Воскресенье',
              dayClick: function(date, view) {
                console.log('viev =>',view);
              }
    });

    // init calendar
    my_calendar.build();

    // update calendar
    my_calendar.update({
    	minDate: "2016-01-05",
    	defaultDate: new Date().toJSON().slice(0, 10)
    });
  });

  // let now = new Date().toJSON().slice(0, 10)
  // console.log(typeof now)
});

