const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function getDate(plus) {
    let date = new Date()
    console.log('date:: ', date)
    console.log('plus:: ', plus)
    let date2 = new Date(date.setDate(date.getDate()+plus))
    let result = `${days[date2.getDay()]}, ${date2.getDate()} ${months[date2.getMonth()]}`
    console.log(result)
    return result
}

export function getDate2(plus) {
    let date = new Date()
    console.log('date:: ', date)
    console.log('plus:: ', plus)
    let date2 = new Date(date.setDate(date.getDate()+plus))
    let result = `${date2.getDate()} ${months[date2.getMonth()]} ${date2.getFullYear()}`
    console.log(result)
    return result
}