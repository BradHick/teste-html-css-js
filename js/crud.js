var ultimoId = 0
var id;

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
  var preco = $("#preco").maskMoney({decimal:",", thousands:"."}).val();
  var descricao = $("#descricao").val();
  ultimoId += 1;

  var tr = $("<tr>").append($("<td>").text(nome).addClass("nome-prod"));
  tr.attr("id", ultimoId);
  tr.append($("<td>").addClass("preco-prod").text(preco));
  tr.append($("<td>").addClass("descricao-prod").text(descricao));

  var tdAcoes = $("<td>").append($("<a>").text("Editar").addClass("editar-item").attr("href", ""));
  tdAcoes.append("  |  ");
  tdAcoes.append($("<a>").text("Excluir").addClass("excluir-item").attr("href", ""));

  tr.append(tdAcoes);

  $(".produtos").find("tbody").append(tr);
  $(".excluir-item").click(removerItem);
  $(".editar-item").click(editarItem);
  resetaForm();

}

var editarItem = function(event){
  event.preventDefault();
  var self = $(this);
  var produto = self.closest("tr");
  id = produto.attr("id");
  var nome = produto.find(".nome-prod").text();
  var preco = produto.find(".preco-prod").text();
  var descricao = produto.find(".descricao-prod").text();

  $("#nome").val(nome);
  $("#preco").val(preco);
  $("#descricao").val(descricao);

  $(".botao-home").hide();

  $(".editar").show();


  var salvarEdicao = function(event) {
    event.preventDefault();
    var novoProduto = $("#"+id);
    novoProduto.find(".nome-prod").text($("#nome").val());
    novoProduto.find(".preco-prod").text($("#preco").val());
    novoProduto.find(".descricao-prod").text($("#descricao").val());

    $(".botao-home").show();
    $(".editar").hide();
  }

  $(".editar").click(salvarEdicao);
}

var contaItens = function(){
  var listaProdutos = $(".lista-produtos"); //fazendo isso, caso apareçam mais listas, a function já estará preparada
  listaProdutos.each(function() {
    var lista = $(this);
    var items = lista.find("tr");
    for(var i=0; i < items.length; i++) {
      $(items[i]).attr("id", i);
      ultimoId = i;

    }
  });
}

var aposInicializado = function(){
  $("#preco").maskMoney({decimal:",", thousands:"."});
  $(".excluir-item").click(removerItem);
  $(".editar-item").click(editarItem);
  $(".botao-home").click(adicionarItem);
  $(".editar").hide();
  contaItens();


}

$(aposInicializado);
