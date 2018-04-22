function Card(id, name)) {
		var self = this;

	    this.id = id;
	    this.name = name || 'No name given'
	    this.$element = createCard();

	    function createCard() {

	    	//CREATE BLOCKS
		    var $card = $('<li>').addClass('card');
		    var $cardDescription = $('<p>').addClass('card-description').text(self.name);
		    var $cardDelete = $('<button>').addClass('btn-delete').text('x');		    

		    //BIND TO CLICK EVENT
			$cardDelete.click(function(){
			    self.removeCard();
			});

			//COMBINE BLOCKS AND RETURN CARD
			$card.append($cardDelete)
				.append($cardDescription);
			return $card;
	    };
	};

    Card.prototype = {
		removeCard: function() {
		    var self = this;
		    $.ajax({
			    url: baseUrl + '/card/' + self.id,
			    method: 'DELETE',
			    success: function(){
			    	self.$element.remove();
			    }
		    });
		};
	};