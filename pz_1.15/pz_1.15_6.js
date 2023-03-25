function printDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat('uk-UA', options);
    const formattedDate = formatter.format(date);
    console.log(formattedDate)
}

printDate(new Date())