var ultimoId = 0

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
  var nome = self.closest("tr").find(".nome-prod").text();
  var preco = self.closest("tr").find(".preco-prod").text();
  var descricao = self.closest("tr").find(".descricao-prod").text();

  $("#nome").val(nome);
  $("#preco").val(preco);
  $("#descricao").val(descricao);

  $(".botao-home").addClass("editar");
  $(".botao-home").text("Salvar Edição");


  $(".editar").removeClass("botao-home");

  $(".editar").click(salvarEdicao);

  var salvarEdicao = function() {
    self.closest("tr").find(".nome-prod").text(nome);
    self.closest("tr").find(".preco-prod").text(preco);
    self.closest("tr").find(".descricao-prod").text(descricao);
    $(".botao-home").removeClass("editar");
  }

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
  contaItens();


}

$(aposInicializado);
