var removerItem = function(event){
  event.preventDefault(); //evita que a página tete ir pra algum luga
  var self = $(this);
  self.closest("tr").remove();

}


var aposInicializado = function(){
  $(".excluir-item").click(removerItem);


}

$(aposInicializado);
