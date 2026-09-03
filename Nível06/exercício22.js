const musicas = ["Rock", "Pop", "Sertanejo", "Funk", "Eletrônica", "Hip Hop", "Jazz", "Clássica"];

if (musicas.includes("Pop")) {
    console.log("Tem pop na lista de músicas.");
} else {
    console.log("Não tem pop na lista de músicas.");
}

console.log("O pop está na posição: ", musicas.indexOf("Pop"));

console.log("seleção de músicas: ", musicas.slice(1, 6));

musicas.splice(0, 1);
console.log("Removendo o rock: ", musicas);

console.log(musicas.sort());

console.log(musicas.reverse());

console.log(musicas.join(", "));