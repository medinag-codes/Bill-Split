var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const item = this.parentNode.parentNode.childNodes[1].innerText
        const amount = this.parentNode.parentNode.childNodes[3].innerText
        fetch('bill', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'item': item,
            'amount': amount,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const item = this.parentNode.parentNode.childNodes[1].innerText
    const amount = this.parentNode.parentNode.childNodes[3].innerText
    fetch('down', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'item': item,
        'amount': amount,
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const item = this.parentNode.parentNode.childNodes[1].innerText
        const amount = this.parentNode.parentNode.childNodes[3].innerText
        fetch('bill', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'item': item,
            'amount': amount
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
