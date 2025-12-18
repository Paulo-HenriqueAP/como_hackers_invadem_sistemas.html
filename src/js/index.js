const textag = document.getElementById("text");
const texTitle = document.getElementById("textTitle");
const iconEx = document.getElementById("exampleIcon");
const textEx = document.getElementById("textExample");
const bg_code = document.getElementById("code");
const realTitle = document.getElementById("realH2");
const realText = document.getElementById("realText");
const next = document.getElementById("countNext");

let html = document.body.innerHTML;

bg_code.textContent = html;

const texts = [
    {
        title: "> Ataques a APIs",
        example: `if not token_valido(request.headers.get
        ("Authorization")):
    return "Acesso negado", 401`,
        //icon: "src/imgs/icons/exemplos/0.png",
        text: `Esses ataques exploram falhas em autenticação, autorização ou validação de dados em APIs, permitindo acesso indevido a informações ou funcionalidades restritas.`
    },

    {
        title: "> Engenharia Social",
        example: `Exemplo: 
"Olá, sou do suporte técnico. Preciso da sua senha para corrigir um erro urgente."`,
        text: `Engenharia social explora o comportamento humano em vez de falhas técnicas, enganando pessoas para obter informações confidenciais como senhas ou acessos internos. É um dos ataques mais eficazes, pois contorna sistemas de segurança.`
    },

    {
        title: "> Exploits automatizados",
        example: `Exemplo defensivo:
Uso de IDS/IPS para detectar padrões automatizados`,
        text: `São ferramentas que exploram vulnerabilidades automaticamente em larga escala, geralmente usadas por bots. Elas dependem de falhas conhecidas e sistemas desatualizados`
    },

    {
        title: "> Força Bruta",
        example: `if tentativas > 5:
    bloquear_usuario()`,
        text: `Ataques de força bruta tentam diversas combinações de senhas até encontrar a correta. Eles exploram senhas fracas e sistemas sem limitação de tentativas.`
    },

    {
        title: "> Phishing",
        example: `Assunto: "Sua conta será bloqueada!"
Link: http://site-falso-login.com`,
        text: `Phishing é um ataque que utiliza e-mails, mensagens ou sites falsos para enganar usuários e fazê-los revelar dados sensíveis. Normalmente imita empresas ou pessoas confiáveis.`
    },

    {
        title: "> Ransomware",
        example: `with open("arquivo.txt", "r") as f:
    dados = f.read()`,
        text: `Ransomware é um malware que criptografa arquivos da vítima e exige pagamento para restaurar o acesso. Ele pode se espalhar por e-mails, downloads maliciosos ou vulnerabilidades não corrigidas.`
    },
    

    {
        title: "> Scanning",
        example:`import socket

def verificar_porta(host, porta):
    s = socket.socket()
    s.settimeout(1)
    return s.connect_ex((host, porta)) == 0

print(verificar_porta("localhost", 80))` ,
        text: `O scanning é a etapa de reconhecimento em que um atacante (ou auditor de segurança) identifica portas abertas, serviços ativos e versões de software em um sistema. Ele é usado tanto por invasores para encontrar pontos fracos quanto por equipes de segurança para mapear riscos antes que sejam explorados.`
    },

    {
        title: "> SQL Injection",
        example: `query = "SELECT * FROM users WHERE name = '" + user_input + "'"


query = "SELECT * FROM users WHERE name = %s"
cursor.execute(query, (user_input,))`,
        text: `SQL Injection ocorre quando dados fornecidos pelo usuário são inseridos diretamente em uma consulta SQL sem validação, permitindo manipular o banco de dados. Esse ataque pode resultar em vazamento, alteração ou exclusão de informações sensíveis.`
    },

    {
        title: "> Vulnerabilidades CVE",
        example: `sudo apt update && sudo apt upgrade
`,
        text: `CVE (Common Vulnerabilities and Exposures) é um sistema padrão que cataloga falhas conhecidas em softwares. Ataques exploram sistemas que não foram atualizados contra essas falhas públicas.`
    },

    {
        title: "> XSS",
        example: `<p>{{ comentario | escape }}</p>
`,
        text: `XSS acontece quando um atacante injeta scripts maliciosos em páginas web, que são executados no navegador de outros usuários. Isso pode permitir roubo de sessões, redirecionamentos maliciosos e alteração de conteúdo.`
    },
]

const linkedinTopics = [
    {
        title: "o ataque ao Linkedin", content: `Em 2012, o LinkedIn foi alvo de um incidente de segurança de grandes proporções, no qual dados de autenticação de usuários foram expostos. Na época, surgiram na internet aproximadamente 6,5 milhões de hashes de senhas, divulgados em um fórum estrangeiro.Posteriormente, em 2016, investigações revelaram que o problema era bem mais amplo do que se imaginava inicialmente: cerca de 117 milhões de contas haviam sido afetadas, o que representava quase a totalidade dos usuários do serviço naquele período.Embora as senhas não estivessem armazenadas em texto claro, os hashes vazados puderam ser quebrados com relativa facilidade, resultando na exposição de muitas credenciais.`
    },

    {
        title: "vulnerabilidade explorada", content: `O principal fator que agravou o incidente foi a forma inadequada de armazenamento das senhas. O LinkedIn utilizava o algoritmo SHA-1 para gerar os hashes, sem a aplicação de salt, uma prática essencial em segurança da informação. Por ser um algoritmo rápido e já considerado obsoleto para proteção de senhas, o SHA-1 permitiu que atacantes quebrassem grande parte das credenciais por meio de ataques de força bruta e uso de tabelas pré-computadas, tornando o vazamento extremamente prejudicial.`
    },

    {
        title: "o impacto causado", content: `O impacto desse episódio foi significativo tanto para os usuários quanto para a empresa. Muitos usuários tiveram suas senhas descobertas e, como era comum reutilizar a mesma senha em diferentes serviços, diversos ataques subsequentes ocorreram em outras plataformas, prática conhecida como credential stuffing. Para o LinkedIn, o vazamento resultou em danos à reputação, perda de confiança do público e na necessidade de forçar a redefinição de senhas em massa, além de servir como um alerta público sobre falhas graves em práticas de segurança.
`
    },

    {
        title: "poderia ter sido evitado?", content: `Esse incidente poderia ter sido evitado com a adoção de medidas básicas de segurança. O uso de algoritmos apropriados para armazenamento de senhas, como bcrypt, PBKDF2, scrypt ou Argon2, aliados à aplicação de salt único por usuário, teria dificultado significativamente a quebra das credenciais. Além disso, mecanismos de monitoramento, controle de acesso mais rigoroso e a implementação de autenticação em dois fatores teriam reduzido tanto a probabilidade do vazamento quanto seus impactos.`
    }

]

function set_text(num, el) {
    textag.innerText = texts[num].text;
    texTitle.innerText = texts[num].title;
    iconEx.setAttribute("src", `src/imgs/icons/exemplos/${num}.png`);
    textEx.innerText = texts[num].example

    el.classList.add("sel");
}

let carousel = 0;

function setLinkd() {
    carousel >= linkedinTopics.length - 1 ? carousel = 0 : carousel++;

    realTitle.innerText = linkedinTopics[carousel].title;
    realText.innerText = linkedinTopics[carousel].content;
    next.innerText = `${carousel + 1} / ${linkedinTopics.length}`;
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

}


