$(document).ready(function() {
    sayLorem()
})

function sayLorem() {
    // const p = $('<p></p>')
    // p.html(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae perspiciatis? Dolore voluptatum veniam reiciendis suscipit fugit. Pariatur dolor at aspernatur. Nam odit veniam autem tempore amet. Reiciendis, nulla recusandae!`)

    // $('body').append(p)
    $(`<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae perspiciatis? Dolore voluptatum veniam reiciendis suscipit fugit. Pariatur dolor at aspernatur. Nam odit veniam autem tempore amet. Reiciendis, nulla recusandae!</p>`).appendTo('body')
}