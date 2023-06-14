

////////// Tab //////////////////////

let modalTabBtn = document.querySelectorAll('.vehicles-content__btn--item')
let modalTabItem = document.querySelectorAll('.vehicles-content__items')

modalTabBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let currentBtnId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(currentBtnId)


        if (!currentBtn.classList.contains('active-tab')) {

            modalTabBtn.forEach((item) => {
                item.classList.remove('active-tab')
            })

            modalTabItem.forEach((item) => {
                item.classList.remove('active-tab')
            })

            currentBtn.classList.add('active-tab')
            currentTab.classList.add('active-tab')
          
        }

    })
})


document.querySelector('.vehicles-content__btn--item').click() /// по умолчанию клик