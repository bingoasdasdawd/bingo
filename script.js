var size = 5;
    var texts = ['akcja kompas','average promo team','dodge','ranged top','3/0 > 3/3','jg diff','top diff','kayn ban/diana gaming','5+ min queue',
'afk','wtf balanced x champ rito???','lagi','65% kp','wygramy na smoki','ff15','faker mid','1v2 gank','1s ult proc',
'ares','comeback izrael','crazy parry','8+ cs/min','penta','gg ez','0,00 died','polish mountain','toxic',
'win','lose','+14','+18','baron we cant end copium','dont start baron take wolves','wypierdolka z sumonerkami/ultem',
'enchanting table language','gud game rito everything is fine ','objective steal','first pick','antyheal','duo uwu botlane','jest smok ale gank top worth bardziej'];

    var cards = (function createCards() {
      var cards = [];
      var table = document.getElementById('cards');
      for (var y = 0; y < size; y++) {
        var tr = document.createElement('tr');
        var rowCards = [];
        cards.push(rowCards);
        table.appendChild(tr);
        for (var x = 0; x < size; x++) {
          var td = document.createElement('td');
          td.classList.add('card');
          td.onclick = select(x, y);
          tr.appendChild(td);
          rowCards.push({
            element: td
          });
        }
      }
      return cards;
    })();
function select(x, y) {
      return function() {
        var card = cards[y][x];
        if (!card.selected) {
          card.element.classList.add('selected');
          card.selected = true;
          checkOver();
        }
      };
    }

    function lineSelected(x, y, dx, dy) {
      var r = true;
      while (r && x >= 0 && x < size && y >= 0 && y < size) {
        r = r && cards[y][x].selected
        x += dx, y += dy;
      }
      return r;
    }

    function checkOver() {
      var hasLine = lineSelected(0, 0, 1, 1) || lineSelected(size - 1, 0, -1, 1);
      for (i = 0; i < size; i++) {
        hasLine = hasLine || lineSelected(i, 0, 0, 1) || lineSelected(0, i, 1, 0);
      }
      if (hasLine) {
        setTimeout(function() {
          alert('Bingo!');
          init();
        }, 100);
      }
    }

    function init() {
      var a = Array.from(texts);
      a.sort((a, b) => 0.5 - Math.random());
      for (var i = 0; i < a.length; i++) {
        var x = i % size,
          y = Math.floor(i / size);
        var card = cards[y][x];
        card.element.innerText = a[i];
        card.element.classList.remove('selected');
        card.selected = false;
      }
    }

    init();
