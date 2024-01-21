
const dateService = (date) => {
    let msec = Date.parse(date);
    const d = new Date(date);
    const options = { day: '2-digit', month: 'short', year: 'numeric' }
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(d).replace(/ /g, '-')
    return formattedDate
}


export default dateService;