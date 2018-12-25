const cards = [{
    front: 'First set foot on the moon',
    back: 'Neil Armstrong',
    flipped: false,
  },
  {
    front: 'Discovered the penicillin',
    back: 'Alexander Fleming',
    flipped: false,

  },
  {
    front: 'The Nobel prize is named after him',
    back: 'Alfred Nobel',
    flipped: false,
  },
  {
    front: 'Formulated the law of gravity',
    back: 'Isaac Newton',
    flipped: false,
  },
];

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '',
    error: false
  },
  methods: {
    toggleCard: function (card) {
      card.flipped = !card.flipped;
    },
    addNew: function () {

      if (!this.newFront|| !this.newBack )
      {
        this.error = true;
      }

      else {

      this.cards.push({
        front: this.newFront,
        back: this.newBack,
        flipped: false
      });
      this.newBack = '';
      this.newFront = '';
      this.error= false;
    }
    }

  }
});