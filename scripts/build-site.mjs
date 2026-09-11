import { mkdirSync, writeFileSync } from 'node:fs';

// Static bilingual pages: all content and metadata remain available without JavaScript.
const origin = 'https://yuridelimadev.github.io';
const github = 'https://github.com/yurIdeLimaDev';
const linkedin = 'https://www.linkedin.com/in/yuridelima';
const email = 'yuri.silva.bezerra.lima@academico.ufpb.br';
const locales = {
  pt: {
    lang: 'pt-BR', ogLocale: 'pt_BR', path: '/', other: '/en/', switchLabel: 'Read in English', switchText: 'EN',
    description: 'Yuri de Lima, em João Pessoa. Application Security, DevSecOps, WAF e automação SOC/SOAR. Projetos, experiência, formação na UFPB e currículo em PDF.',
    skip: 'Ir para o conteúdo', home: 'início', menu: 'Abrir menu', nav: 'Navegação principal',
    navigation: ['Projetos', 'Experiência', 'Formação', 'Contato'],
    available: 'Disponível para oportunidades · remoto ou híbrido',
    pitch: 'Desenvolvo soluções para proteger aplicações e automatizar rotinas de segurança. Experiência em WAF, Threat Intelligence e automação SOC/SOAR.',
    location: 'João Pessoa, PB · Remoto ou híbrido',
    quickFacts: 'PT / EN / ES · Ciência da Computação, UFPB · conclusão prevista: dez. 2026',
    focus: 'Foco: WAF, AppSec e automação SOC/SOAR',
    cv: 'Baixar CV em PDF', cvFile: '/assets/cv-yuri-de-lima-pt.pdf', view: 'Ver projetos', portrait: 'Retrato de Yuri de Lima',
    signals: [['48', 'combinações de cenários na validação do DoBotShield'], ['~200', 'eventos por dia em integrações SOC'], ['6 h', 'economizadas por semana com automação']],
    projectIndex: '01 / Projetos', projectTitle: 'O que construí e por que importa.',
    projectIntro: 'Uma visão direta do problema, da minha contribuição e do resultado. Os repositórios trazem os detalhes técnicos.',
    problem: 'Problema', solution: 'Solução', result: 'Resultado', details: 'Detalhes técnicos', repo: 'Ver repositório',
    projects: [
      {name: 'DoBotShield', type: 'Segurança de aplicações', state: 'Ativo', status: 'active', url: '/DoBotShieldV2', tags: ['Go', 'WAF', 'Docker', 'GitHub Actions'],
        problem: 'Proteger aplicações existentes sem reescrever seu código.', solution: 'Desenvolvi uma camada que inspeciona o tráfego e aplica regras de proteção.', result: 'Validação em 48 combinações de cenários, com limites e evidências documentados.',
        detail: 'WAF e proxy reverso em Go com inspeção HTTP/WebSocket, normalização de payloads, rate limiting e controles IP/CIDR. Comparação de oito alvos com SQLMap, OWASP ZAP, Commix, XSStrike, testssl.sh e wrk.'},
      {name: 'Crateras lunares', type: 'Visão computacional', url: '/ID-Crateras-Lunares', tags: ['Go', 'Canny', 'Hough'],
        problem: 'Identificar e medir crateras em imagens da Lua.', solution: 'Implementei as etapas de detecção sem bibliotecas externas de visão computacional.', result: 'Um processo explicável para detectar crateras de 5 a 20 km.',
        note: 'Relevância para AppSec: demonstra raciocínio de detecção e validação de regras, também útil ao desenvolver um WAF. É um projeto acadêmico, não uma ferramenta de segurança.', detail: 'Imagens LRO WAC, detecção de bordas Canny e transformada de Hough, com a biblioteca padrão de Go.'},
      {name: 'IA como Pool', type: 'Sistemas distribuídos', url: '/-IA_como_Pool', tags: ['FastAPI', 'RabbitMQ', 'Redis', 'C4'],
        problem: 'Organizar o processamento de tarefas de IA e prever falhas.', solution: 'Contribuí com a documentação da arquitetura e diagramas dos serviços.', result: 'Fluxos de processamento, recuperação e responsabilidades documentados para a equipe.',
        detail: 'Arquitetura assíncrona com Redis, PostgreSQL, RabbitMQ, retry, DLQ, circuit breaker e cache-aside. Contribuição focada na documentação e nos diagramas C4.'},
      {name: 'Canny Gabor Di Zenzo', type: 'Processamento de imagens', url: '/PDI-Filtros', tags: ['Python', 'NumPy', '38 testes'],
        problem: 'Comparar formas de identificar contornos em imagens coloridas.', solution: 'Implementei e comparei algoritmos de detecção de bordas.', result: 'Comparação reproduzível apoiada por 38 testes.',
        detail: 'Canny clássico e abordagem vetorial para imagens coloridas, com correlação, supressão de não máximos e histerese implementadas do zero.'},
      {name: 'Vexkeep', type: 'Pesquisa aplicada em segurança', state: 'Em desenvolvimento', status: 'development', tags: ['Go', 'AppSec', 'Supply chain'],
        problem: 'Investigar e priorizar problemas de segurança com rastreabilidade.', solution: 'Desenvolvimento de um fluxo com execução isolada, políticas e revisão humana.', result: 'Projeto em desenvolvimento, ainda sem resultados de produção publicados.',
        detail: 'Políticas versionadas, evidência normalizada e revisão humana final. Repositório privado; apenas a descrição de alto nível é pública.'}
    ],
    methodIndex: '02 / Como trabalho', methodTitle: 'Clareza, colaboração e critério.', methodIntro: 'Hábitos que orientam meu trabalho técnico e a colaboração com outras pessoas.',
    principles: [
      ['Comunicação técnica', 'Explico o problema, a evidência e os limites da solução para apoiar decisões, inclusive de quem não trabalha com segurança.'],
      ['Trabalho em equipe', 'Documento fluxos e decisões para que outras pessoas possam revisar, dar continuidade e manter o trabalho.'],
      ['Pensamento crítico', 'Testo hipóteses, comparo resultados e separo riscos confirmados de suposições antes de recomendar uma ação.']
    ],
    experienceIndex: '03 / Experiência', experienceTitle: 'Segurança aplicada ao trabalho diário.',
    experienceIntro: 'Experiências organizadas pelo término mais recente. A pesquisa no LIM ocorreu durante o período na Aliança Motos.',
    roles: [
      ['mai. 2025 a ago. 2025', 'Vultus Cybersecurity Ecosystem', 'Estágio em Threat Intelligence', 'Coleta e análise de cerca de 150 indicadores de ameaça por mês, correlação com MITRE ATT&CK e relatórios para apoiar a detecção e a resposta.', ['19% menos tempo na priorização de alertas', '20% menos retrabalho na organização de evidências']],
      ['mai. 2024 a abr. 2025', 'Aliança Motos', 'Estágio em TI, automação e desenvolvimento', 'Aplicações em Python e Streamlit para processar documentos, conferir registros e produzir relatórios. Automação de rotinas de catálogo com JavaScript.', ['6 h por semana economizadas', '33% menos tempo de processamento']],
      ['set. 2024 a nov. 2024', 'LIM | Laboratório de Interação e Mídia', 'Pesquisador associado', 'Atuação temporária e híbrida em design de software e projetos de pesquisa.', ['Pesquisa simultânea ao estágio na Aliança Motos']],
      ['ago. 2023 a dez. 2023', 'IT4US Cyber Security', 'Estágio em automação de playbooks de segurança', 'Automação de procedimentos de triagem e resposta com SOAR, scripts e integrações REST para cerca de 200 eventos por dia.', ['31% das etapas repetitivas automatizadas', '21% menos tempo na resposta inicial']]
    ],
    skillsIndex: '04 / Competências', skillsTitle: 'Base técnica para investigar e construir.',
    skills: [
      ['Application Security', 'Segurança Web/API, OWASP Top 10, WAF, SQLMap, OWASP ZAP e validação de controles.'],
      ['Operações de segurança', 'Threat Intelligence, OSINT, IOCs/TTPs, MITRE ATT&CK, SOAR, SIEM e automação de resposta.'],
      ['Engenharia e DevSecOps', 'Go, Python, JavaScript, APIs REST, FastAPI, Streamlit, testes, Git, Docker, Linux e GitHub Actions.'],
      ['Dados e mensageria', 'PostgreSQL, Redis, RabbitMQ, SQL, SPARQL e processamento de documentos e planilhas.']
    ],
    educationIndex: '05 / Formação e idiomas', educationTitle: 'Formação acadêmica e idiomas de trabalho.',
    degree: 'Bacharelado em Ciência da Computação', university: 'Universidade Federal da Paraíba (UFPB)', expected: 'Em andamento · conclusão prevista para dezembro de 2026',
    languages: [['Português', 'Nativo'], ['Inglês', 'Fluente'], ['Espanhol', 'Fluente']],
    contactIndex: '06 / Contato', contactTitle: 'Vamos conversar sobre a próxima oportunidade.', contactIntro: 'Interesse em Application Security, DevSecOps e automação de segurança. Disponível para trabalho remoto ou híbrido.', contactLabel: 'Canais de contato', footer: 'Application Security · DevSecOps · Automação'
  },
  en: {
    lang: 'en', ogLocale: 'en_US', path: '/en/', other: '/', switchLabel: 'Ler em português', switchText: 'PT',
    description: 'Yuri de Lima, based in João Pessoa, Brazil. Application Security, DevSecOps, WAF and SOC/SOAR automation. Projects, experience, UFPB education and PDF resume.',
    skip: 'Skip to content', home: 'home', menu: 'Open menu', nav: 'Main navigation', navigation: ['Projects', 'Experience', 'Education', 'Contact'],
    available: 'Open to opportunities · remote or hybrid',
    pitch: 'I develop solutions to protect applications and automate security workflows. Experience in WAF development, Threat Intelligence and SOC/SOAR automation.',
    location: 'João Pessoa, Brazil · Remote or hybrid', quickFacts: 'PT / EN / ES · Computer Science, UFPB · expected graduation: Dec 2026', focus: 'Focus: WAF, AppSec and SOC/SOAR automation',
    cv: 'Download resume PDF', cvFile: '/assets/cv-yuri-de-lima-en.pdf', view: 'View projects', portrait: 'Portrait of Yuri de Lima',
    signals: [['48', 'scenario combinations in DoBotShield validation'], ['~200', 'events per day in SOC integrations'], ['6 h', 'saved per week through automation']],
    projectIndex: '01 / Projects', projectTitle: 'What I built and why it matters.', projectIntro: 'The problem, my contribution and the outcome. Repositories provide the technical details.',
    problem: 'Problem', solution: 'Solution', result: 'Outcome', details: 'Technical details', repo: 'View repository',
    projects: [
      {name: 'DoBotShield', type: 'Application Security', state: 'Active', status: 'active', url: '/DoBotShieldV2', tags: ['Go', 'WAF', 'Docker', 'GitHub Actions'],
        problem: 'Protect existing applications without rewriting their code.', solution: 'I developed a layer that inspects traffic and applies protection rules.', result: 'Validation across 48 scenario combinations, with documented evidence and limitations.',
        detail: 'Go WAF and reverse proxy with HTTP/WebSocket inspection, payload normalization, rate limiting and IP/CIDR controls. Eight targets compared using SQLMap, OWASP ZAP, Commix, XSStrike, testssl.sh and wrk.'},
      {name: 'Lunar crater detection', type: 'Computer vision', url: '/ID-Crateras-Lunares', tags: ['Go', 'Canny', 'Hough'],
        problem: 'Identify and measure craters in lunar imagery.', solution: 'I implemented the detection stages without external computer vision libraries.', result: 'An explainable process for detecting craters from 5 to 20 km in diameter.',
        note: 'Relevance to AppSec: demonstrates detection logic and rule validation, skills also useful in WAF development. This is an academic project, not a security tool.', detail: 'LRO WAC imagery, Canny edge detection and the Hough transform, using the Go standard library.'},
      {name: 'AI as a Pool', type: 'Distributed systems', url: '/-IA_como_Pool', tags: ['FastAPI', 'RabbitMQ', 'Redis', 'C4'],
        problem: 'Organize AI task processing and account for failures.', solution: 'I contributed architecture documentation and service diagrams.', result: 'Processing, recovery flows and responsibilities documented for the team.',
        detail: 'Asynchronous architecture with Redis, PostgreSQL, RabbitMQ, retries, DLQ, circuit breaker and cache-aside. My contribution focused on documentation and C4 diagrams.'},
      {name: 'Canny Gabor Di Zenzo', type: 'Image processing', url: '/PDI-Filtros', tags: ['Python', 'NumPy', '38 tests'],
        problem: 'Compare ways to identify edges in color images.', solution: 'I implemented and compared edge detection algorithms.', result: 'A reproducible comparison supported by 38 tests.',
        detail: 'Classic Canny and a vector approach to color images, with correlation, non-maximum suppression and hysteresis implemented from scratch.'},
      {name: 'Vexkeep', type: 'Applied security research', state: 'In development', status: 'development', tags: ['Go', 'AppSec', 'Supply chain'],
        problem: 'Investigate and prioritize security issues with traceable decisions.', solution: 'Developing a workflow with isolated execution, policies and human review.', result: 'Work in progress, with no published production results yet.',
        detail: 'Versioned policies, normalized evidence and final human review. Private repository; only a high-level description is public.'}
    ],
    methodIndex: '02 / How I work', methodTitle: 'Clarity, collaboration and judgment.', methodIntro: 'Habits that guide my technical work and collaboration with others.',
    principles: [
      ['Technical communication', 'I explain the problem, evidence and limitations to support decisions, including for people outside security.'],
      ['Teamwork', 'I document workflows and decisions so others can review, continue and maintain the work.'],
      ['Critical thinking', 'I test hypotheses, compare results and separate confirmed risks from assumptions before recommending action.']
    ],
    experienceIndex: '03 / Experience', experienceTitle: 'Security in day-to-day work.', experienceIntro: 'Roles ordered by most recent end date. The LIM research role overlapped with my internship at Aliança Motos.',
    roles: [
      ['May 2025 to Aug 2025', 'Vultus Cybersecurity Ecosystem', 'Threat Intelligence Intern', 'Collected and analyzed approximately 150 threat indicators per month, mapped evidence to MITRE ATT&CK and produced reports to support detection and response.', ['19% less time prioritizing alerts', '20% less rework organizing evidence']],
      ['May 2024 to Apr 2025', 'Aliança Motos', 'IT, Automation and Development Intern', 'Python and Streamlit applications to process documents, reconcile records and produce reports. JavaScript automation for catalog workflows.', ['6 hours saved per week', '33% less processing time']],
      ['Sep 2024 to Nov 2024', 'LIM | Laboratory of Interaction and Media', 'Associate Researcher', 'Temporary, hybrid role in software design and research projects.', ['Research alongside the Aliança Motos internship']],
      ['Aug 2023 to Dec 2023', 'IT4US Cyber Security', 'Security Playbook Automation Intern', 'Automated triage and response procedures with SOAR, scripts and REST integrations for approximately 200 events per day.', ['31% of repetitive steps automated', '21% less time to initial response']]
    ],
    skillsIndex: '04 / Skills', skillsTitle: 'Technical foundations to investigate and build.',
    skills: [
      ['Application Security', 'Web/API security, OWASP Top 10, WAF, SQLMap, OWASP ZAP and control validation.'],
      ['Security operations', 'Threat Intelligence, OSINT, IOCs/TTPs, MITRE ATT&CK, SOAR, SIEM and response automation.'],
      ['Engineering and DevSecOps', 'Go, Python, JavaScript, REST APIs, FastAPI, Streamlit, testing, Git, Docker, Linux and GitHub Actions.'],
      ['Data and messaging', 'PostgreSQL, Redis, RabbitMQ, SQL, SPARQL, document and spreadsheet processing.']
    ],
    educationIndex: '05 / Education and languages', educationTitle: 'Education and working languages.', degree: "Bachelor's degree in Computer Science", university: 'Federal University of Paraíba (UFPB)', expected: 'In progress · expected graduation in December 2026',
    languages: [['Portuguese', 'Native'], ['English', 'Fluent'], ['Spanish', 'Fluent']],
    contactIndex: '06 / Contact', contactTitle: 'Let’s talk about the next opportunity.', contactIntro: 'Interested in Application Security, DevSecOps and security automation. Available for remote or hybrid work.', contactLabel: 'Contact channels', footer: 'Application Security · DevSecOps · Automation'
  }
};
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const external = (url, label, cls = '') => `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
const heading = (id, index, title, intro = '') => `<div class="section-heading"><p class="section-index">${esc(index)}</p><h2 id="${id}">${esc(title)}</h2>${intro ? `<p>${esc(intro)}</p>` : ''}</div>`;

for (const [lang, d] of Object.entries(locales)) {
  const url = origin + d.path;
  const title = 'Yuri de Lima - AppSec Engineer | João Pessoa';
  const person = {'@context':'https://schema.org','@type':'Person','@id':origin+'/#person',name:'Yuri de Lima',url:origin+'/',image:origin+'/assets/yuri-silva.jpg',jobTitle:'Application Security & DevSecOps',email:'mailto:'+email,sameAs:[github,linkedin],address:{'@type':'PostalAddress',addressLocality:'João Pessoa',addressRegion:'PB',addressCountry:'BR'},affiliation:{'@type':'CollegeOrUniversity',name:'Universidade Federal da Paraíba'},knowsLanguage:['pt-BR','en','es'],knowsAbout:['Application Security','DevSecOps','WAF','Threat Intelligence','SOC','SOAR','Security Automation','Go','Python']};
  const html = `<!doctype html>
<html lang="${d.lang}">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#f5f7f4" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#131b17" media="(prefers-color-scheme: dark)">
  <title>${esc(title)}</title><meta name="description" content="${esc(d.description)}"><meta name="author" content="Yuri de Lima">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="pt-BR" href="${origin}/"><link rel="alternate" hreflang="en" href="${origin}/en/"><link rel="alternate" hreflang="x-default" href="${origin}/">
  <meta property="og:type" content="website"><meta property="og:locale" content="${d.ogLocale}"><meta property="og:site_name" content="Yuri de Lima">
  <meta property="og:title" content="Yuri de Lima | Application Security &amp; DevSecOps"><meta property="og:description" content="${esc(d.description)}"><meta property="og:url" content="${url}">
  <meta property="og:image" content="${origin}/assets/og.png"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1731"><meta property="og:image:height" content="909"><meta property="og:image:alt" content="Yuri de Lima, Application Security and DevSecOps">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Yuri de Lima | Application Security &amp; DevSecOps"><meta name="twitter:description" content="${esc(d.description)}"><meta name="twitter:image" content="${origin}/assets/og.png">
  <link rel="icon" href="/assets/favicon.svg?v=4" type="image/svg+xml"><link rel="manifest" href="/site.webmanifest"><link rel="stylesheet" href="/styles.css?v=5"><script src="/script.js?v=5" defer></script>
  <script type="application/ld+json">${JSON.stringify(person)}</script>
</head>
<body>
  <a class="skip-link" href="#conteudo">${d.skip}</a>
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Yuri de Lima, ${d.home}"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 36" focusable="false"><path d="M4 5 L13.5 17.5 L23 5 M13.5 17.5 L13.5 31"/><path d="M29.5 5 L29.5 31 L43.5 31"/></svg></span><span>Yuri de Lima</span></a>
    <div class="header-controls"><a class="language-toggle" href="${d.other}" hreflang="${lang === 'pt' ? 'en' : 'pt-BR'}" lang="${lang === 'pt' ? 'en' : 'pt-BR'}" aria-label="${d.switchLabel}">${d.switchText}</a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav"><span class="sr-only">${d.menu}</span><span aria-hidden="true"></span><span aria-hidden="true"></span></button></div>
    <nav id="main-nav" class="main-nav" aria-label="${d.nav}">${['trabalhos','experiencia','formacao','contato'].map((id,i)=>`<a ${i===3?'class="nav-cta" ':''}href="#${id}">${d.navigation[i]}</a>`).join('')}</nav>
  </header>
  <main id="conteudo">
    <section id="inicio" class="hero section-shell" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="availability"><span class="status-dot" aria-hidden="true"></span>${d.available}</p>
        <p class="hero-pitch">${d.pitch}</p>
        <h1 id="hero-title">Yuri de Lima <span>Application Security &amp; DevSecOps</span></h1>
        <p class="hero-location">${d.location}</p><p class="hero-facts">${d.quickFacts}</p><p class="hero-focus">${d.focus}</p>
        <div class="hero-actions"><a class="button button-primary" href="${d.cvFile}" download>${d.cv}</a>${external(linkedin,'LinkedIn','button button-secondary')}<a class="text-link" href="#trabalhos">${d.view}</a></div>
        <dl class="signal-grid">${d.signals.map(([n,t])=>`<div><dt>${n}</dt><dd>${t}</dd></div>`).join('')}</dl>
      </div>
      <aside class="profile-panel" aria-label="Yuri de Lima"><div class="portrait-frame"><img src="/assets/yuri-silva.jpg" alt="${d.portrait}" width="640" height="640" fetchpriority="high"></div><div class="profile-meta"><p>João Pessoa · PB · ${lang === 'en' ? 'Brazil' : 'Brasil'}</p></div></aside>
    </section>
    <section id="trabalhos" class="projects section-shell" aria-labelledby="projects-title">
      ${heading('projects-title',d.projectIndex,d.projectTitle,d.projectIntro)}
      <div class="project-grid">${d.projects.map((p,i)=>`<article class="project-card ${i===0?'project-card-featured':''}"><div class="project-number" aria-hidden="true">0${i+1}</div><div class="project-content"><div class="project-topline"><p class="project-type">${p.type}</p>${p.state?`<span class="project-state state-${p.status}">${p.state}</span>`:''}</div><h3>${p.name}</h3><dl class="project-story">${['problem','solution','result'].map(k=>`<div><dt>${d[k]}</dt><dd>${esc(p[k])}</dd></div>`).join('')}</dl>${p.note?`<p class="project-relevance">${esc(p.note)}</p>`:''}<details><summary>${d.details}</summary><p>${esc(p.detail)}</p></details><ul class="tag-list">${p.tags.map(t=>`<li>${t}</li>`).join('')}</ul>${p.url?external(github+p.url,d.repo,'project-link'):''}</div></article>`).join('')}</div>
    </section>
    <section class="method section-shell" aria-labelledby="method-title">${heading('method-title',d.methodIndex,d.methodTitle,d.methodIntro)}<ol class="principle-list">${d.principles.map(([t,p],i)=>`<li><span class="principle-number">0${i+1}</span><h3>${t}</h3><p>${p}</p></li>`).join('')}</ol></section>
    <section id="experiencia" class="experience section-shell" aria-labelledby="experience-title">${heading('experience-title',d.experienceIndex,d.experienceTitle,d.experienceIntro)}<div class="timeline">${d.roles.map(([date,company,role,description,impacts])=>`<article class="timeline-item"><p class="timeline-date">${date}</p><div><p class="timeline-company">${esc(company)}</p><h3>${role}</h3><p>${esc(description)}</p><ul class="impact-list">${impacts.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div></article>`).join('')}</div></section>
    <section id="competencias" class="capabilities section-shell" aria-labelledby="capabilities-title">${heading('capabilities-title',d.skillsIndex,d.skillsTitle)}<div class="capability-grid">${d.skills.map(([t,p])=>`<article><h3>${esc(t)}</h3><p>${esc(p)}</p></article>`).join('')}</div></section>
    <section id="formacao" class="education section-shell" aria-labelledby="education-title">${heading('education-title',d.educationIndex,d.educationTitle)}<div class="education-strip"><div><h3>${d.degree}</h3><p>${d.university}</p><p>${d.expected}</p></div><div><dl class="language-list">${d.languages.map(([t,p])=>`<div><dt>${t}</dt><dd>${p}</dd></div>`).join('')}</dl></div></div></section>
    <section id="contato" class="contact section-shell" aria-labelledby="contact-title"><p class="section-index">${d.contactIndex}</p><div class="contact-grid"><div><h2 id="contact-title">${d.contactTitle}</h2><p>${d.contactIntro}</p></div><div class="contact-actions" aria-label="${d.contactLabel}"><a class="button button-primary" href="${d.cvFile}" download>${d.cv}</a>${external(linkedin,'LinkedIn','button button-secondary')}${external(github,'GitHub','button button-secondary')}<a class="button button-secondary" href="mailto:${email}">Email</a></div></div></section>
  </main>
  <footer class="site-footer section-shell"><p>© <span data-year>2026</span> Yuri de Lima</p><p>${d.footer}</p></footer>
</body></html>
`;
  mkdirSync(lang === 'en' ? 'en' : '.', {recursive: true});
  writeFileSync(lang === 'en' ? 'en/index.html' : 'index.html', html);
}
