$(function() {
  $('#js-shopping-list-form').submit( event => {
    // stop the default form submission behavior
    event.preventDefault();
    
    const shoppingItem = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
    // we'll store individual DOM elements for each number
    // in this array, and once we've produced them all,
    // we'll append it to the results section of our HTML
    
    const results = [];
    results.push(shoppingItem); //push item user created into an array

    const resultsElements = results.map(function(item) {
      return '<li><span class="shopping-item>${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    });
    
    
    $(".shopping-list").append(resultsElements);
    


   

  });

});