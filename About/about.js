var displayDate;
// var date;

displayDate: function(){
      let curYear, today, month, dayDate;

      today = new Date();
      month = today.getMonth();
      dayDate = today.getDate();
      curYear = today.getFullYear();
      // console.log(`Today ${dayDate}/${month}/${curYear}`);
      document.querySelector(DOMStrings.date).textContent = `${dayDate}/${month + 1}/${curYear}`;
    }