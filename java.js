let name = prompt('ведите имя')
if(name === 'Alex') {
    let account= +prompt('номер счета')
    if( account === 7777 ) {
        let cash = +prompt('сколько обналичить?')
        let money = 10000
        if (cash <= money) {
            alert(`
            Ваш баланс был: ${money}
            Ващ баланс сейчас: ${money - cash}
            `)
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('неправилный пароль')
    }
} else {
    alert('Пользователь не найден дасвидули')
}
