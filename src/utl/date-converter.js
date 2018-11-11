export default (format, inputDate) => {
    if (format) {
        format = format.toLowerCase();
    }

    const date = inputDate || new Date();
    let year;
    let month;
    let day;

    if (typeof date === 'string') {
        const dateSpilt = date.split('-');
        year = dateSpilt[0];
        month = dateSpilt[1];
        day = dateSpilt[2];
    } else {
        year = date.getFullYear();
        month = '' + (date.getMonth() + 1);
        if (month.length < 2) month = '0' + month;
        day = date.getDate();
        if (day < 10) day = '0' + day;
    }

    switch(format) {
        case 'yyyy-mm-dd':
            return `${year}-${month}-${day}`;
        case 'mm-dd-yyyy':
            return `${month}-${day}-${year}`;
        default:
            return `${month}-${day}-${year}`;
    }
};