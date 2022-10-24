//SECTION DEALING WITH THE SELECTION OF SECTION 3 LABELS
var label1 = document.querySelector('#slide1Label')
var label2 = document.querySelector('#slide1Labe2')
var label3 = document.querySelector('#slide1Labe3')
var label4 = document.querySelector('#slide1Labe4')
var label5 = document.querySelector('#slide1Labe5')

label1.addEventListener('click', () => {
    label1.style.border = '2px solid #ffffff';
    label2.style.border = '2px solid #B2B2B2';
    label3.style.border = '2px solid #B2B2B2';
    label4.style.border = '2px solid #B2B2B2';
    label5.style.border = '2px solid #B2B2B2';
})

label2.addEventListener('click', () => {
    label1.style.border = '2px solid #B2B2B2';
    label2.style.border = '2px solid #ffffff';
    label3.style.border = '2px solid #B2B2B2';
    label4.style.border = '2px solid #B2B2B2';
    label5.style.border = '2px solid #B2B2B2';
})

label3.addEventListener('click', () => {
    label1.style.border = '2px solid #B2B2B2';
    label2.style.border = '2px solid #B2B2B2';
    label3.style.border = '2px solid #ffffff';
    label4.style.border = '2px solid #B2B2B2';
    label5.style.border = '2px solid #B2B2B2';
})

label4.addEventListener('click', () => {
    label1.style.border = '2px solid #B2B2B2';
    label2.style.border = '2px solid #B2B2B2';
    label3.style.border = '2px solid #B2B2B2';
    label4.style.border = '2px solid #ffffff';
    label5.style.border = '2px solid #B2B2B2';
})

label5.addEventListener('click', () => {
    label1.style.border = '2px solid #B2B2B2';
    label2.style.border = '2px solid #B2B2B2';
    label3.style.border = '2px solid #B2B2B2';
    label4.style.border = '2px solid #B2B2B2';
    label5.style.border = '2px solid #ffffff';
})

//GET SKILLS BLOCK
var skillHtml = document.querySelector('.skill-html')
var skillCss = document.querySelector('.skill-css')
var skillJs = document.querySelector('.skill-js')
var skillAws = document.querySelector('.skill-aws')
var skillPython = document.querySelector('.skill-python')
var skillNodejs = document.querySelector('.skill-nodejs')
var skillReact = document.querySelector('.skill-react')
//GET ICONS
var htmlIcon = document.querySelector('#skill-html-icon')
var cssIcon = document.querySelector('#skill-css-icon')
var jsIcon = document.querySelector('#skill-js-icon')
var awsIcon = document.querySelector('#skill-aws-icon')
var pythonIcon = document.querySelector('#skill-python-icon')
var nodejsIcon = document.querySelector('#skill-nodejs-icon')
var reactIcon = document.querySelector('#skill-react-icon')

//GET INFORMATION
var informationHtml = document.querySelector('#information-html')
var informationCss = document.querySelector('#information-css')
var informationJs = document.querySelector('#information-js')
var informationAws = document.querySelector('#information-aws')
var informationPython = document.querySelector('#information-python')
var informationNodejs = document.querySelector('#information-nodejs')
var informationReact = document.querySelector('#information-react')

//LISTENING TO ACTIONS
skillHtml.addEventListener('mouseover', () => {
    htmlIcon.style.opacity = '0'
    informationHtml.style.opacity = '100'
})
skillHtml.addEventListener('mouseout', () => {
    informationHtml.style.opacity = '0'
    htmlIcon.style.opacity = '100'
})

skillCss.addEventListener('mouseover', () => {
    cssIcon.style.opacity = '0'
    informationCss.style.opacity = '100'
})
skillCss.addEventListener('mouseout', () => {
    informationCss.style.opacity = '0'
    cssIcon.style.opacity = '100'
})

skillJs.addEventListener('mouseover', () => {
    jsIcon.style.opacity = '0'
    informationJs.style.opacity = '100'
})
skillJs.addEventListener('mouseout', () => {
    informationJs.style.opacity = '0'
    jsIcon.style.opacity = '100'
})

skillAws.addEventListener('mouseover', () => {
    awsIcon.style.opacity = '0'
    informationAws.style.opacity = '100'
})
skillAws.addEventListener('mouseout', () => {
    informationAws.style.opacity = '0'
    awsIcon.style.opacity = '100'
})

skillPython.addEventListener('mouseover', () => {
    pythonIcon.style.opacity = '0'
    informationPython.style.opacity = '100'
})
skillPython.addEventListener('mouseout', () => {
    informationPython.style.opacity = '0'
    pythonIcon.style.opacity = '100'
})

skillNodejs.addEventListener('mouseover', () => {
    nodejsIcon.style.opacity = '0'
    informationNodejs.style.opacity = '100'
})
skillNodejs.addEventListener('mouseout', () => {
    informationNodejs.style.opacity = '0'
    nodejsIcon.style.opacity = '100'
})

skillReact.addEventListener('mouseover', () => {
    reactIcon.style.opacity = '0'
    informationReact.style.opacity = '100'
})
skillReact.addEventListener('mouseout', () => {
    informationReact.style.opacity = '0'
    reactIcon.style.opacity = '100'
})


//FUNCTIONS THAT SHOW SECTIONS
window.sr = ScrollReveal({ reset: true})

sr.reveal('#section2', { duration: 1500 })
sr.reveal('#section3', { duration: 1500 })


//FUNCTION THAT EFFECTS TYPE OF INFORMATION
const aboutMe = document.querySelector('#aboutMe')
const firstParagraphAbout = document.querySelector('#first-paragraph-about')
const secondParagraphAbout = document.querySelector('#second-paragraph-about')

const objective = document.querySelector('#objective')
const firstParagraphObjective = document.querySelector('#first-paragraph-objective')
const secondParagraphObjective = document.querySelector('#second-paragraph-objective')

const aboutMeTxt = "SOBRE MIM"
const firstParagraphAboutTxt = 'Me chamo Murilo tenho 22 anos e atualmente  curso Engenharia de Software na federal de Brasília-DF. Logo que ingressei na universidade eu tive a certeza que ali era a minha área, como todas as vezes em que desenvolvo, reafirma ainda mais que foi o maior acerto que cometi na minha vida.'
const secondParagraphAboutTxt = "Estou trabalhando em me tornar um Desenvolvedor Full-Stack, já que tenho um fascínio nas duas ramificações: Front-End e Back-End. De maneira geral e resumida, busco por uma oportunidade que me faça adquirir novos aprendizados e que agregue mais conhecimento e crescimento profissional."
const objectiveTxt = "OBJETIVOS"
const firstParagraphObjectiveTxt = "Meu objetivo profissional é me tornar um Desenvolvedor Full Stack, já que sou apaixonado pelo Front-End e Back-End. Por fim só ficarei realizado quando eu chegar em um nivel de tanto aprender com amigos de trabalho quanto poder ensina-lhes coisas novas também de acordo com minhas experiências."
const secondParagraphObjectiveTxt = ""

const interval = 30;

function writeContent(element, elementTxt, interval){
    const char = elementTxt.split("").reverse()
    const typer = setInterval(() => {
        if(!char.length){
            return clearInterval(typer)
        }
        const next = char.pop()
        element.innerHTML += next
    }, interval)
}

async function writeTxt(aboutMe, aboutMeTxt, firstParagraphAbout, firstParagraphAboutTxt, secondParagraphAbout, secondParagraphAboutTxt, objective, objectiveTxt, firstParagraphObjective, firstParagraphObjectiveTxt, interval){
    writeContent(aboutMe, aboutMeTxt, interval)
    await sleep(1)
    writeContent(firstParagraphAbout, firstParagraphAboutTxt, interval)
    await sleep(9)
    writeContent(secondParagraphAbout, secondParagraphAboutTxt, interval)
    await sleep(9)
    writeContent(objective, objectiveTxt, interval)
    await sleep(1)
    writeContent(firstParagraphObjective, firstParagraphObjectiveTxt, interval)
}

async function sleep(seconds){
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

writeTxt(aboutMe, aboutMeTxt, firstParagraphAbout, firstParagraphAboutTxt, secondParagraphAbout, secondParagraphAboutTxt, objective, objectiveTxt, firstParagraphObjective, firstParagraphObjectiveTxt, interval)
