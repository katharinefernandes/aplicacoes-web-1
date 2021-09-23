var pessoa = {
  idade: 17,
  // Objeto dentro do objeto
  nome: {
    primeiro: "Katharine",
    ultimo: "Rodrigues",
  },
  apelido: "Kat",
  sexo: "feminino",
  // Array dentro do objeto
  hobbies: ["dançar", "web-design", "música"],

  // Função dentro do objeto
  saudacao: function () {
    // Referenciando com "this."
    console.log(`Olá! Me chamo ${this.nome.primeiro} ${this.nome.ultimo}.`);
  },

  bio: function () {
    console.log(
      // Referenciando com "pessoa['']"
      `Muito prazer!, pode me chamar de ${this.apelido}, eu tenho ${pessoa["idade"]} anos e sou do sexo ${pessoa["sexo"]}. Meus hobbies são: ${pessoa.hobbies[0]},  ${pessoa.hobbies[1]} e ${pessoa.hobbies[2]}.`
    );
  },
};
// Exibindo as informações no console
console.log(pessoa.saudacao(), pessoa.bio());
