
const dateService = (date) => {
    let msec = Date.parse(date);
    const d = new Date(date);

    // const options = { weekday:"long", year:"numeric", month:"short", day:"numeric"}
    // const options = {  day:"numeric", year:"numeric", month:"short"}
    // console.log('date', d)
    const options = { day: '2-digit', month: 'short', year: 'numeric' }
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(d).replace(/ /g, '-')
    console.log('date', formattedDate)
    return formattedDate
}


export default dateService;