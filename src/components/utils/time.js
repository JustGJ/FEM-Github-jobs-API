const time = (now, previous) => {

    let msPerMinute = 60 * 1000,
        msPerHour = msPerMinute * 60,
        msPerDay = msPerHour * 24,
        msPerMonth = msPerDay * 30,
        msPerYear = msPerMonth * 365,
        elapsed = now - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ` seconds ago`; 
    } else if (elapsed < msPerHour){
        return Math.round(elapsed / msPerHour) !== 1 
            ? Math.round(elapsed / msPerMinute) + ` minutes ago`   
            : Math.round(elapsed / msPerMinute) + ` minute ago`;
    } else if (elapsed < msPerDay){
        return Math.round(elapsed / msPerHour) !== 1
            ? Math.round(elapsed / msPerHour) + ' hours ago'
            : Math.round(elapsed / msPerHour) + ' hour ago'
    } else if (elapsed < msPerMonth){
        return Math.round(elapsed / msPerDay) !== 1     
            ? Math.round(elapsed / msPerDay) + ' days ago'
            : Math.round(elapsed / msPerDay) + ' day ago'
    } else {
        return Math.round(elapsed / msPerYear) !== 1
            ? Math.round(elapsed / msPerYear) + ' years ago'
            : Math.round(elapsed / msPerYear) + ' year ago'
    }
}

export default time;