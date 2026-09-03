let nomes = ["Guilherme", "João", "Carlos", "Diana", "Maria", "Ana", "Jose", "Roberto", "Pedro", "Mateus",];

if (nomes.includes("Ana")) {
    console.log("Tem Ana na lista de nomes.");
} else {
    console.log("Não tem Ana na lista de nomes.");
}

console.log("Ana está na posição: ", nomes.indexOf("Ana"));

console.log("Parte da lista: ", nomes.slice(0, 4));

nomes.splice(4, 1);
console.log("Removendo Maria: ", nomes);

nomes.splice(4, 0, "Lucas");
console.log("Adicionando Lucas: ", nomes);

console.log("Lista ordenada: ", nomes.sort());

console.log("Lista em ordem reversa: ", nomes.reverse());
console.log("Lista como texto: ", nomes.join(", "));