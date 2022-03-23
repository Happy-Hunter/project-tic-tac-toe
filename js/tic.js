
let player1 = 'x'
let player2 = 'o'
let turn = 0

$('.board-square').on('click', function() {
    if ($(this).text() !== ""){
        return
    }
    if (turn %2 === 0){
        $(this).text(player1).addClass('player1')
    } else {
        $(this).text(player2).addClass('player2')
    }
    winner()
    turn++

    if(turn === 9) {
        alert('It\'\s is a draw,\ losers.')
    }
})

const winner = function() {
        if ($('#1').text() === player1 && $('#2').text() === player1  && $('#3').text() === player1) {
            alert(`Player One Wins!`)
    
    }
        if ($('#4').text() === player1 && $('#5').text() === player1  && $('#6').text() === player1) {
            alert(`Player One Wins!`)
        
    }
        if ($('#7').text() === player1 && $('#8').text() === player1  && $('#9').text() === player1) {
            alert(`Player One Wins!`)
            
    }
        if ($('#1').text() === player1 && $('#4').text() === player1  && $('#7').text() === player1) {
            alert(`Player One Wins!`)
                
    }
        if ($('#2').text() === player1 && $('#5').text() === player1  && $('#8').text() === player1) {
            alert(`Player One Wins!`)

    }             
        if ($('#3').text() === player1 && $('#6').text() === player1  && $('#9').text() === player1) {
            alert(`Player One Wins!`)
                    
    }
        if ($('#1').text() === player1 && $('#5').text() === player1  && $('#9').text() === player1) {
            alert(`Player One Wins!`)
                    
    }
        if ($('#3').text() === player1 && $('#5').text() === player1  && $('#7').text() === player1) {
        alert(`Player One Wins!`)
                
    }

        if ($('#1').text() === player2 && $('#2').text() === player2  && $('#3').text() === player2) {
            alert(`Player Two Wins!`)
    
    }
        if ($('#4').text() === player2 && $('#5').text() === player2  && $('#6').text() === player2) {
            alert(`Player Two Wins!`)
        
    }
        if ($('#7').text() === player2 && $('#8').text() === player2  && $('#9').text() === player2) {
            alert(`Player Two Wins!`)
            
    }
        if ($('#1').text() === player2 && $('#4').text() === player2  && $('#7').text() === player2) {
            alert(`Player Two Wins!`)
                
    }
        if ($('#2').text() === player2 && $('#5').text() === player2  && $('#8').text() === player2) {
            alert(`Player Two Wins!`)

    }             
        if ($('#3').text() === player2 && $('#6').text() === player2  && $('#9').text() === player2) {
            alert(`Player Two Wins!`)
                    
    }
        if ($('#1').text() === player2 && $('#5').text() === player2  && $('#9').text() === player2) {
            alert(`Player Two Wins!`)
                    
    }   
        if ($('#3').text() === player2 && $('#5').text() === player2  && $('#7').text() === player2) {
        alert(`Player Two Wins!`)
      
    }
    console.log(turn)
 

};

winner()

$('button').on('click', function() {
    $('.board-square').empty();
    turn = 0
 })
