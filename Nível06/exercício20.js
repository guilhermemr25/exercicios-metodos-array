let produtos = ["Arroz", "Feijão", "Macarrão", "Leite", "Café", "Açúcar"];

if (produtos.includes("Café")) {
    console.log("Tem café na lista de produtos.");
} else {
    console.log("Não tem café na lista de produtos.");
}

console.log("O café está na posição: " + produtos.indexOf("Café"));

console.log("Cópia parcial: " + produtos.slice(0, 3));

produtos.splice(3, 1);
console.log("Removendo o leite: " + produtos);

console.log(produtos.join(", "));