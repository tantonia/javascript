let bgColor = undefined;

$(document).ready(function () {
    $('#btn').on('click', function(){
        onClickMeClicked()
    })
})

function onClickMeClicked(){
    updateBg()
}

function updateBg() {
    bgColor = getBgColor()
    showBgColor()
}

function getBgColor() {
    const colors = ['red','white','black', 'green', 'blue', 'yellow'];
    return colors [Math.floor(Math.random() * colors.length)]
}

function showBgColor() {
    $('#clr-hex').html(bgColor)
    $('body').css('background-color', bgColor)
}