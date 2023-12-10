 document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!cell.textContent) {
          cell.textContent = currentPlayer;
          if (checkWinner()) {
            alert(`O jogador ${currentPlayer} venceu!`);
            resetGame();
          } else if (isBoardFull()) {
            alert('Empate!');
            resetGame();
          } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          }
        }
      });
    });

    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
      });
    }

    function isBoardFull() {
      return Array.from(cells).every(cell => cell.textContent);
    }

    function resetGame() {
      cells.forEach(cell => {
        cell.textContent = '';
      });
      currentPlayer = 'X';
    }
  });