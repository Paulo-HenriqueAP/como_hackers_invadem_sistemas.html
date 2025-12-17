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
        example: "trecho código de exemplo 0 >--",
        //icon: "src/imgs/icons/exemplos/0.png",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis lectus ipsum, eget tincidunt enim rhoncus vitae. Aenean sed velit porttitor, venenatis tortor in, scelerisque turpis. Donec eu rhoncus neque. Aenean hendrerit et sem vitae consectetur. Etiam facilisis congue vulputate. Nulla malesuada magna felis, sit amet interdum orci condimentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet porta convallis.`
    },

    {
        title: "> Engenharia Social",
        example: "trecho código de exemplo 1 >--",
        text: `Curabitur sodales turpis et dictum vestibulum. Phasellus quis molestie magna. Suspendisse elit risus, hendrerit ut ex non, fringilla tempus lectus. Suspendisse vitae tincidunt arcu. Praesent bibendum malesuada felis non mattis. Nullam venenatis dui nisi, sit amet interdum enim cursus sit amet. Aenean vitae enim nisl. Fusce pulvinar, neque ut tincidunt aliquam, ex leo rhoncus nunc, in aliquet nulla urna non urna. Phasellus pretium lobortis elit a ultricies. Donec eu nulla non nisl convallis accumsan.`
    },

    {
        title: "> Exploits automatizados",
        example: "trecho código de exemplo 2 >--",
        text: `Nullam ipsum sapien, viverra vitae sagittis non, vulputate id augue. Aliquam tortor ex, tempus sed iaculis nec, convallis vel sapien. Sed hendrerit mauris in ligula ultricies egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin lacinia lectus eu elit consequat faucibus. Aenean in est consequat, cursus nibh eu, molestie turpis. Sed varius ultrices dolor, sed rhoncus neque pellentesque id. Nunc et nisl fermentum, gravida velit eget, tincidunt velit. Nullam id dignissim ipsum, sit amet pulvinar risus.`
    },

    {
        title: "> Força Bruta",
        example: "trecho código de exemplo 3 >--",
        text: `Nunc ultrices urna dui, sit amet venenatis erat imperdiet eu. Donec enim nibh, volutpat at odio ut, sodales egestas sem. Proin non mauris vitae augue ullamcorper cursus non vel mauris. Curabitur faucibus augue velit, in facilisis orci blandit in. Aliquam imperdiet venenatis magna pulvinar mattis. Pellentesque pellentesque, sem vitae lacinia auctor, est diam pulvinar elit, eu faucibus lorem arcu sit amet nibh. Nam pellentesque mi a purus convallis posuere. Duis bibendum viverra cursus. Vivamus consectetur purus lacus, non lobortis magna viverra vitae.`
    },

    {
        title: "> Phishing",
        example: "trecho código de exemplo 4 >--",
        text: `Aliquam erat volutpat. Pellentesque eget faucibus felis, a accumsan magna. Morbi vel massa vel nulla semper ornare a nec massa. Donec eu tellus lacinia, auctor nisi eu, rhoncus sem. Quisque vulputate tristique arcu vel imperdiet. Vestibulum quis posuere nisl, cursus rhoncus erat. Quisque eu sagittis mi. Cras lobortis risus nunc, ac rhoncus libero porta eget. Nam at semper neque. Donec accumsan, turpis condimentum imperdiet rutrum, risus augue feugiat mauris, eu pharetra nisi enim at felis. Nulla odio magna, lacinia id egestas ac, euismod nec erat.`
    },

    {
        title: "> Ransomware",
        example: "trecho código de exemplo 5 >--",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus aliquet libero, iaculis tempus dui. Maecenas pellentesque lacus non odio porta, consequat blandit eros semper. Fusce mollis vulputate mauris, eu eleifend leo consectetur volutpat. Quisque pharetra pulvinar odio id feugiat. Morbi quis augue eu nunc porta interdum pulvinar eu metus. Proin ornare velit non orci dictum, eget suscipit dolor aliquet. Integer blandit ac purus nec auctor. Vestibulum eu tempor velit. Curabitur ut dolor ac libero fringilla finibus. Praesent viverra pharetra justo sed euismod. Ut dignissim mattis ligula, id ullamcorper leo dapibus at. Cras maximus gravida imperdiet. Ut lobortis porttitor tincidunt. Ut placerat quam ut vehicula commodo.`
    },

    {
        title: "> Scanning",
        example: "trecho código de exemplo 6 >--",
        text: `Ut id bibendum nulla, et ultrices leo. Praesent condimentum sagittis felis ac malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum id aliquam mauris, nec ornare lorem. Duis nec orci non purus congue congue. Nulla faucibus dapibus erat quis varius. Sed aliquet feugiat nisl, a viverra elit bibendum nec.`
    },

    {
        title: "> SQL Injection",
        example: "trecho código de exemplo 7 >--",
        text: `Donec blandit porttitor tempor. Phasellus justo ligula, feugiat nec cursus viverra, elementum a turpis. Suspendisse nec aliquet ligula. Phasellus condimentum, metus vel egestas viverra, nibh ligula sollicitudin urna, vitae interdum augue nulla quis turpis. Sed fermentum elit quis neque porta, vitae faucibus elit ultricies. Curabitur mollis dolor non tortor eleifend mattis. Donec eget vehicula orci, gravida efficitur turpis.`
    },

    {
        title: "> Vulnerabilidades CVE",
        example: "trecho código de exemplo 8 >--",
        text: `Sed at mollis metus. In ornare erat enim, in tincidunt ante suscipit non. Suspendisse sollicitudin lacus eget enim maximus venenatis. Proin accumsan venenatis rutrum. Nunc tincidunt metus sit amet ipsum efficitur suscipit. Donec gravida at velit ac consectetur. Integer mattis facilisis congue. Donec porttitor blandit leo, id volutpat sapien laoreet id. Quisque dapibus nulla justo, vitae hendrerit lacus ultrices vel. Cras nec nulla lectus. Vestibulum erat ante, commodo ut bibendum at, dapibus eget velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    },

    {
        title: "> XSS",
        example: "trecho código de exemplo 9 >--",
        text: `Suspendisse molestie faucibus ex aliquet lacinia. Aenean in vehicula ligula. Vivamus tempor mauris at justo maximus imperdiet. Curabitur id velit facilisis, ullamcorper magna a, euismod tellus. Vivamus cursus elit id quam venenatis, vitae ullamcorper libero egestas. Sed posuere tortor augue, ut tempor nisl molestie id. Vivamus iaculis arcu in nulla convallis, ut vehicula odio viverra. Sed quis faucibus quam, ut finibus felis. Aenean pharetra mauris eget dui fringilla feugiat. Suspendisse venenatis ut magna non tristique. Nunc sodales sodales scelerisque. In volutpat aliquam lacus imperdiet mollis. Vestibulum ullamcorper mollis ex vel blandit. Etiam at hendrerit orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum at viverra sem.`
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