const perfis = [
  {
    nome: "Leonardo Lima Silva",
    idade: "20 anos",
    cidade: "Guarulhos - SP",
    bio: "Cursando Bacharelado em Ciência da Computação (BCC) em Bauru - SP. Interesse voltado para tecnologia, eletrônicos, jogos e programação competitiva, com foco no desenvolvimento de habilidades que integrem lógica, criatividade e inovação.",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nome: "João Pereira",
    idade: "24 anos",
    cidade: "Campinas - SP",
    bio: "Desenvolvedor web focado em front-end e UX. Gosta de café e código limpo.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nome: "Marina Lima",
    idade: "21 anos",
    cidade: "São Paulo - SP",
    bio: "Entusiasta de robótica e machine learning. Ama desafios de lógica.",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

let indiceAtual = 0;

const nomeEl = document.getElementById("nomes");
const idadeEl = document.getElementById("idades");
const cidadeEl = document.getElementById("cidades");
const bioEl = document.querySelector("#bio p");
const fotoEl = document.getElementById("profileCicle");

function atualizarPerfil() {
  const perfil = perfis[indiceAtual];
  nomeEl.textContent = perfil.nome;
  idadeEl.textContent = perfil.idade;
  cidadeEl.textContent = perfil.cidade;
  bioEl.textContent = perfil.bio;
  fotoEl.style.backgroundImage = `url('${perfil.foto}')`;
}

document.getElementById("leftButton").addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + perfis.length) % perfis.length;
  atualizarPerfil();
});

document.getElementById("rightButton").addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % perfis.length;
  atualizarPerfil();
});

atualizarPerfil();
