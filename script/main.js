const perfis = [
  {
    nome: "Leonardo Lima",
    idade: "20 anos",
    cidade: "Guarulhos - SP",
    bio: "Leonardo tem 20 anos e cursa Ciência da Computação na UNESP – Bauru. Apaixonado por jogos, programação e edição, ele une criatividade e raciocínio lógico em tudo o que faz. Sempre disposto a aprender, gosta de testar novas ferramentas e transformar suas ideias em projetos práticos.",
    foto: "imgs/leo.png",
  },
  {
    nome: "Alexander Enzo",
    idade: "18 anos",
    cidade: "São Paulo - SP",
    bio: "Alex tem 18 anos e cursa Ciência da Computação na UNESP – Bauru. Desde cedo, mostrou interesse por desafios matemáticos, o que despertou seu gosto pela programação. Com um pensamento analítico e muita curiosidade, busca constantemente expandir seus conhecimentos e entender a lógica por trás das tecnologias.",
    foto: "imgs/alex.png",
  },
  {
    nome: "Henrique Issao",
    idade: "19 anos",
    cidade: "Campinas - SP",
    bio: "Issao tem 19 anos e cursa Ciência da Computação na UNESP – Bauru. Apaixonado por jogos e programação, adora criar e explorar novas ideias. Nos momentos livres, gosta de cozinhar e brincar com seu cachorro, o Choque, equilibrando aprendizado e diversão.",
    foto: "imgs/issao.png",
  },
  {
    nome: "Gabriel Silva",
    idade: "18 anos",
    cidade: "Jaú - SP",
    bio: "Gabriel tem 18 anos e cursa Ciência da Computação na UNESP – Bauru. Interessado por tecnologia e programação desde cedo, está sempre aprendendo e explorando novas ferramentas. Engajado em pesquisa, especialmente em pesquisa operacional, combina curiosidade e dedicação para transformar ideias em projetos reais.",
    foto: "imgs/silva.png",
  },
  {
    nome: "André Arsky",
    idade: "19 anos",
    cidade: "São Paulo - SP",
    bio: "André tem 19 anos e cursa Ciência da Computação na UNESP – Bauru. Amante de jogos online e entusiasta da programação de jogos, está sempre aprimorando suas habilidades e explorando novas tecnologias. Com talento e empenho, busca se destacar no desenvolvimento de games.",
    foto: "imgs/andre.png",
  },
  {
    nome: "Kauã Victor",
    idade: "18 anos",
    cidade: "Embu - SP",
    bio: "Kauã tem 18 anos e cursa Ciência da Computação na UNESP – Bauru. Morador de Embu das Artes – SP, ele demonstra grande interesse em computação gráfica, sempre buscando explorar e aplicar novas tecnologias. Curioso e dedicado, está constantemente aprimorando suas habilidades e transformando ideias em projetos concretos.",
    foto: "imgs/kaua.png",
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
