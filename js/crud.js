var removerItem = function(event){
  event.preventDefault(); //evita que a página tete ir pra algum luga
  var self = $(this);
  self.closest("tr").remove();

}


var resetaForm = function(){
  $("#nome").val("");
  $("#preco").val("");
  $("#descricao").val("");

}


var adicionarItem = function(event){
  event.preventDefault();
  var nome = $("#nome").val();
  var preco = parseFloat($("#preco").val());
  var descricao = $("#descricao").val();


  var tr = $("<tr>").append($("<td>").text(nome).addClass("nome-prod"));
  tr.append($("<td>").addClass("preco-prod").text(preco));
  tr.append($("<td>").addClass("descricao-prod").text(descricao));

  var tdAcoes = $("<td>").append($("<a>").text("Editar").addClass("editar-item").attr("href", ""));
  tdAcoes.append("  |  ");
  tdAcoes.append($("<a>").text("Excluir").addClass("excluir-item").attr("href", ""));

  tr.append(tdAcoes);

  $(".produtos").find("tbody").append(tr);
  $(".excluir-item").click(removerItem);
  resetaForm();

}

var aposInicializado = function(){
  $(".excluir-item").click(removerItem);
  $(".botao-home").click(adicionarItem);


}

$(aposInicializado);
