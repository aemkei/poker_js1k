(function () {
  /*
   *                            88b
   *                           d888
   *                            888
   *  888888  .d8888b.   d888   888    d8P
   *    "88b d88P  Y88b d8888   888   d8P
   *     888 Y88b.        888   888  d8P
   *     888  "Y888b.     888   888d88K
   *     888     "Y88b.   888   8888888b
   *     888       "888   888   888  Y88b
   *     88P Y88b  d88P   888   888   Y88b
   *     888  "Y8888P"  8888888 888    Y88b
   *   .d88P
   * .d88P                      888
   *                           d888
   *    88888888b.   .d88888b.  888    d8P  8888888888 8888888b.
   *    8888   Y88b d88P" "Y88b 888   d8P   888    888 888   Y88b
   *     888    888 888     888 888  d8P    888        888    888
   *     888   d88P 888     888 888d88K     8888888    888   d88P
   *     8888888P"  888     888 8888888b    888  ""    8888888P"
   *     888        888     888 888  Y88b   888        888 T88b
   *    88888       Y88b. .d88P 888   Y88b  888    888 888  T88b
   *    88888        "Y88888P"  888    Y88b 8888888888 888   T8888b
   *    88888                                                 T8888b
   *                      ______.------.______
   *              .------|J.--. |Q.--. |K.--. |------.
   *              |T.--. | :(): | (\/) | :/\: |A.--. |
   *              | :/\: | ()() | :\/: | :\/: | (\/) |
   *              | (__) | '--'J| '--'Q| '--'K| :\/: |
   *              | '--'T`______'------'______| '--'A|
   *              `------´                    `------'
   *                                                                  d8b
   *   .d8888888b.                                  888               Y8P
   *  d88P"   "Y88b  8888b.   .d88b.  88888b.d88b.  888  888  .d88b.
   *  888  d8b  888     "88b d8P  Y8b 888 "888 "88b 888 .88P d8P  Y8b 888
   *  888  888bd88P .d888888 88888888 888  888  888 888888K  88888888 888
   *  888  Y8888P"  888  888 Y8b.     888  888  888 888 "88b Y8b.     888
   *  Y88b.     .d8 "Y888888  "Y8888  888  888  888 888  888  "Y8888  888
   *   "Y88888888P"
   * 
   * 
   * SOURCE: https://github.com/aemkei/poker_js1k
   * SLIDES: http://go.ubilabs.net/js1k
   * 
   * 
   * DESCRIPTION
   * 
   * You're the last man standing.
   * To leave this dirty little town you need more money.
   * The barmaid offers you a simple Poker game:
   * You start with 100$ and every round cost 10$
   * 
   * Winnings:
   * 
   *    20$: Two Pairs
   *    40$: Three
   *    60$: Straight
   *    80$: Flush
   *   100$: Full House
   *   120$: Four
   *   140$: Straight Flush
   *   160$: Royal Flush
   * 
   * Good luck, cowboy!
   * 
   */


  /*
   *
   * # COMPRESSION
   *
   * Use Uglify to compress the script.
   * The following command helps me to keep track
   * of the compression rate:
   *
   *      echo -e "\n"; \
   *      uglifyjs poker.js > compressed.js; \
   *      cat compressed.js; \
   *      echo -e "\n\n"; \
   *      cat compressed.js | wc -c;
   *
   * After uglifying remove surrounding function:
   *
   *      (function(){ … })()
   *
   * and delete variable initialization:
   *
   *      var a,b,c,…,n;
   *
   * To compress the script even further use
   * the excellent Javascript crusher by @aivopaas at
   * http://www.iteral.com/jscrush/
   *
   */


  // introduce all variables
  var i, html, _document, in_progress, cash, picked_cards,
    flipped_cards, dealt_cards, cards_html, matched_i,
    n, suits, matched, pairs, threes, fours, flush, straight,
    points, temp_element;

  // center document
  html = "<center>";
  _document = document;
  in_progress = 1;
  cash = 10;
  picked_cards = [];
  flipped_cards = [];
  dealt_cards = [];
  cards_html = [];

  i = 5;
  while (i--) {
    // create cards placeholer
    html += '<button id=C' + i + ' onclick=F(' + i + ')></button> ';
  }

  // write info and deal button
  _document.write(
    html +
    '<h3 id=I></h3><button id=D onclick=D()>'
  );

  i = 52;
  while (i--) {
    // store html for cards
    // scale card using a heading
    cards_html[i] = "<h1 style=width:2em;color:" +
      // assign color
      (i > 25 && "red") + ">" +
      // assign symbol using a unicode character
      String.fromCharCode([3, 0, 5, 6][i / 13 | 0] + 9824) +
      // assign number
      "A23456789TJQK"[i % 13] +
      // add some extra bottom space
      "<h6>…";
  }

  // deal or trade cards
  D = function () {
    
    // reset flipped and picked cards
    if (!(in_progress = !in_progress)) {
      i = 52;
      while (i--) {
        flipped_cards[i] =  
        picked_cards[i] = 0;
      }
    }

    i = 5;
    while (i--) {
      if (!in_progress || flipped_cards[i]) {
        
        // trade flipped card
        while (picked_cards[n = Math.random() * 52 | 0]) {}

        picked_cards[n] = 1;

        temp_element = _document.getElementById("C" + i);
        temp_element.style.opacity = 1;
        temp_element.innerHTML = cards_html[n];

        // shift index plus 13
        // to fix lexical sorting 
        dealt_cards[i] = n + 13;
      }
    }

    if (in_progress) {
      suits = [0, 0, 0, 0];
      matched = [];
      pairs = threes = fours = flush = straight = points = 0;

      dealt_cards.sort();

      i = 13;
      while (i--) {
        matched[i] = 0;
      }

      // count matched values and suits
      i = 13;
      while (i--) {
        matched[dealt_cards[i] % 13]++;
        suits[dealt_cards[i] / 13 | 0]++;
      }

      // count pairs, threes and fours
      i = 13;
      while (i--) {
        matched_i = matched[i];
        if (matched_i == 2) {
          pairs++;
        } else if (matched_i == 3) {
          threes++;
        } else if (matched_i == 4) {
          fours++;
        }
      }

      // check flush
      i = 13;
      while (i--) {
        if (suits[i] == 5) {
          flush = 1;
        }
      }

      if (
        dealt_cards[4] - dealt_cards[1] == 3 &&
        dealt_cards[4] - dealt_cards[0] == 12 &&
        flush
      ) {
        points = 8; // Royal Flush
      } else if (
        dealt_cards[4] - dealt_cards[0] == 4 &&
        flush
      ) {
        points = 7; // Straight Flush
      }

      // reduce suits 
      i = 5;
      while (i--) { dealt_cards[i] = dealt_cards[i] % 13 + 13; }
      dealt_cards.sort();

      if (!points) {
        if (fours) {
          points = 6; // Fours
        } else if (threes && pairs) {
          points = 5; // Full House
        } else if (flush) {
          points = 4; // Fours
        } else if (
          (dealt_cards[4] - dealt_cards[3]) == 1 &&
          (dealt_cards[3] - dealt_cards[2]) == 1 &&
          (dealt_cards[2] - dealt_cards[1]) == 1 &&
          (
            dealt_cards[1] - dealt_cards[0] == 1 ||
            dealt_cards[4] - dealt_cards[0] == 12
          )
        ) {
          points = 3; // Straight
        } else if (threes) {
          points = 2; // Three
        } else if (pairs == 2) {
          points = 1; // Two Pairs
        }
      }
    }
    
    // update result
    _document.getElementById("I").innerHTML = (
      in_progress ?
      "NO LUCK02 PAIRS0THREE0STRAIGHT0FLUSH0FULL HOUSE0FOUR0STRAIGHT FLUSH0ROYAL FLUSH".split(0)[points] + "!<h3>" + (cash += points*2)*10
       : ".<h3>" +  (--cash*10)
    ) + "$";
    
    // update button
    _document.getElementById("D").innerHTML = in_progress ? 
      "New Game" : 
      "Trade Selected Cards";
    
    if (!cash && in_progress) {
      _document.getElementById("I").innerHTML = "GAME OVER"; 
      _document.getElementById("D").style.opacity = 0;
    }
  };

  // mark flipped cards
  F = function (i) {
    if (!in_progress) {
      _document.getElementById("C" + i).style.opacity = (
        flipped_cards[i] = !flipped_cards[i]
      ) ? .3 : 1;
    }
  };

  // start game
  D();
  
  /* Uncomment to run tests 

  function test_winnings(a,b,c,d,e, label){
    in_progress = 0;
    dealt_cards = [a+13, b+13, c+13, d+13, e+13];
    D();

    var inner = document.getElementById("I").innerHTML
    console.log(!!inner.match(label), label, dealt_cards);
  }

  test_winnings(13, 42, 23, 14, 05, "You lose")
  test_winnings(01, 14, 02, 15, 05, "2 Pairs");
  test_winnings(01, 27, 14, 15, 16, "Three");
  test_winnings(12, 00, 09, 10, 24, "Straight");
  test_winnings(00, 02, 04, 06, 08, "Flush");
  test_winnings(01, 14, 00, 13, 26, "Full House");
  test_winnings(01, 14, 27, 40, 03, "Four");
  test_winnings(04, 01, 02, 03, 05, "Straight Flush");
  test_winnings(12, 00, 09, 10, 11, "Royal Flush");

  */


})();