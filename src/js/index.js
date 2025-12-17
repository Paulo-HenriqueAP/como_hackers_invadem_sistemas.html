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
        title: "o ataque ao Linkedin", content: `Lorem ipsum dolor sit amet ut cillum sunt ex mollit culpa eu commodo tempor ipsum aliquip id incididunt occaecat sunt lorem sint sed dolore sit deserunt amet duis ipsum culpa do nulla in magna aute tempor exercitation est culpa ad id voluptate eu tempor laborum tempor.`
    },

    {
        title: "vulnerabilidade explorada", content: `Lorem dolore labore anim ea velit sed id nisi mollit duis pariatur sint eiusmod pariatur culpa ullamco duis mollit mollit labore occaecat nisi adipiscing deserunt tempor incididunt officia aliqua ut fugiat consequat aute veniam nisi anim sint deserunt ullamco occaecat reprehenderit occaecat pariatur lorem labore ullamco eiusmod exercitation adipiscing.`
    },

    {
        title: "o impacto causado", content: `Duis adipiscing sit incididunt labore sed ullamco fugiat laboris ipsum magna ullamco aliqua qui veniam irure sed deserunt eiusmod ad consectetur sunt irure ullamco voluptate cupidatat ex elit commodo.
`
    },

    {
        title: "poderia ter sido evitado?", content: `Mollit cillum ad cupidatat id culpa pariatur minim deserunt fugiat incididunt sunt reprehenderit consequat irure ipsum sed ullamco minim qui eiusmod labore lorem enim id minim elit sunt aliquip excepteur consectetur irure quis proident duis anim duis eu do ullamco ad ut dolor culpa.`
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

