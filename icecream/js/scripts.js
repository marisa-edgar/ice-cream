$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
  const person1Input= $("input#person1").val();
  const flavors= ["rockyRoad","mintChip","cookieDough","vanilla","strawberry","chocolate"]
  ul = document.createElement('ul');

  document.getElementById('myFlavorList').appendChild(ul);

  $(".person1").text(person1Input);

  flavors.forEach(function(flavor){
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += flavor;
    
  });
  //$(".person1").text(person1Input);
  });
});