var label1 = document.querySelector('#slide1Label')
var label2 = document.querySelector('#slide1Labe2')
var label3 = document.querySelector('#slide1Labe3')
var label4 = document.querySelector('#slide1Labe4')
var label5 = document.querySelector('#slide1Labe5')


label1.addEventListener('click', () => {
    label1.style.border = '2px solid #2bff00';
    label2.style.border = '2px solid #393E46';
    label3.style.border = '2px solid #393E46';
    label4.style.border = '2px solid #393E46';
    label5.style.border = '2px solid #393E46';
})

label2.addEventListener('click', () => {
    label1.style.border = '2px solid #393E46';
    label2.style.border = '2px solid #2bff00';
    label3.style.border = '2px solid #393E46';
    label4.style.border = '2px solid #393E46';
    label5.style.border = '2px solid #393E46';
})

label3.addEventListener('click', () => {
    label1.style.border = '2px solid #393E46';
    label2.style.border = '2px solid #393E46';
    label3.style.border = '2px solid #2bff00';
    label4.style.border = '2px solid #393E46';
    label5.style.border = '2px solid #393E46';
})

label4.addEventListener('click', () => {
    label1.style.border = '2px solid #393E46';
    label2.style.border = '2px solid #393E46';
    label3.style.border = '2px solid #393E46';
    label4.style.border = '2px solid #2bff00';
    label5.style.border = '2px solid #393E46';
})

label5.addEventListener('click', () => {
    label1.style.border = '2px solid #393E46';
    label2.style.border = '2px solid #393E46';
    label3.style.border = '2px solid #393E46';
    label4.style.border = '2px solid #393E46';
    label5.style.border = '2px solid #2bff00';
})


//Pega bloco das skills
var skillHtml = document.querySelector('.skill-html')
var skillCss = document.querySelector('.skill-css')
var skillJs = document.querySelector('.skill-js')
var skillAws = document.querySelector('.skill-aws')
var skillPython = document.querySelector('.skill-python')
var skillNodejs = document.querySelector('.skill-nodejs')
var skillReact = document.querySelector('.skill-react')
//Pega icones
var htmlIcon = document.querySelector('#skill-html-icon')
var cssIcon = document.querySelector('#skill-css-icon')
var jsIcon = document.querySelector('#skill-js-icon')
var awsIcon = document.querySelector('#skill-aws-icon')
var pythonIcon = document.querySelector('#skill-python-icon')
var nodejsIcon = document.querySelector('#skill-nodejs-icon')
var reactIcon = document.querySelector('#skill-react-icon')

//pega informações
var informationHtml = document.querySelector('#information-html')
var informationCss = document.querySelector('#information-css')
var informationJs = document.querySelector('#information-js')
var informationAws = document.querySelector('#information-aws')
var informationPython = document.querySelector('#information-python')
var informationNodejs = document.querySelector('#information-nodejs')
var informationReact = document.querySelector('#information-react')

//Escuta ações
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


/*skillHtml.addEventListener('mouseover', () => {
    htmlIcon.innerHTML = "<h1>ola gente kkkkkkkkkkk</h1>"    
})

skillHtml.addEventListener('mouseout', () => {
    htmlIcon.innerHTML = '<i id="skill-html-icon" class="fa-brands fa-html5"></i>'
})*/




const aboutMe = document.querySelector('#aboutMe')
var firstParagraphAbout = document.querySelector('#first-paragraph-about')
var secondParagraphAbout = document.querySelector('#second-paragraph-about')

var objective = document.querySelector('#objective')
var firstParagraphObjective = document.querySelector('#first-paragraph-objective')
var secondParagraphObjective = document.querySelector('#second-paragraph-objective')


const aboutMeTxt = "SOBRE MIM"
var firstParagraphAboutTxt = "Me chamo Murilo, tenho 22 anos e sou um apaixonado por tecnologia. Sempre achei fascinante tudo que tivesse haver com tecnologia, principalmente relacionada a computação, e foi por isso que em 2018 comecei minha faculdade de Engenharia de Software na Universidade de Brasília(UnB)."
var secondParagraphAboutTxt = "Desde lá, venho adquirindo conhecimentos tanto na parte de Front-End quanto no Back-End, pois sempre achei fascinante as duas ramificações."
var objectiveTxt = "OBJETIVOS"
var firstParagraphObjectiveTxt = "Meu objetivo profissional é me tornar um Desenvolvedor Full Stack, já que sou apaixonado pelo Front-End e Back-End. Por fim só ficarei realizado quando eu chegar em um nivel de tanto aprender com amigos de trabalho quanto poder ensinalhes coisas novas também de acordo com minhas experiências."
var secondParagraphObjectiveTxt = "De maneira resumida, o importante é ser feliz e transmitir essa felicidades para todos os colegas de trabalho e familiares."

const interval = 50;

//Me chamo Murilo, tenho 22 anos e sou um apaixonado por tecnologia. Sempre achei fascinante tudo que tivesse haver com tecnologia, principalmente relacionada a computação, e foi por isso que em 2018 comecei minha faculdade de Engenharia de Software na Universidade de Brasília(UnB).
//Desde lá, venho adquirindo conhecimentos tanto na parte de Front-End quanto no Back-End, pois sempre achei fascinante as duas ramificações.

//Meu objetivo profissional é me tornar um Desenvolvedor Full Stack, já que sou apaixonado pelo Front-End e Back-End. Por fim só ficarei realizado quando eu chegar em um nivel de tanto aprender com amigos de trabalho quanto poder ensinalhes coisas novas também de acordo com minhas experiências.
//De maneira resumida, o importante é ser feliz e transmitir essa felicidades para todos os colegas de trabalho e familiares.


function writeContent(firstParagraphAbout, firstParagraphAboutTxt, interval){
    const char = firstParagraphAboutTxt.split("").reverse()
    const typer = setInterval(() => {
        if(!char.length){
            return clearInterval(typer)
        }
        const next = char.pop()
        firstParagraphAbout.innerHTML += next
    }, interval)
}

/*function writeTxt(aboutMe, aboutMeTxt, firstParagraphAbout, firstParagraphAboutTxt, secondParagraphAbout, secondParagraphAboutTxt, objective, objectiveTxt, firstParagraphObjective, firstParagraphObjectiveTxt, secondParagraphObjective, secondParagraphObjectiveTxt, interval){
    writeContent(aboutMe, aboutMeTxt, interval)
    writeContent(firstParagraphAbout, firstParagraphAboutTxt, interval)
    writeContent(secondParagraphAbout, secondParagraphAboutTxt, interval)
    writeContent(objective, objectiveTxt, interval)
    writeContent(firstParagraphObjective, firstParagraphObjectiveTxt, interval)
    writeContent(secondParagraphObjective, secondParagraphObjectiveTxt, interval)
}

writeTxt(aboutMe, aboutMeTxt, firstParagraphAbout, firstParagraphAboutTxt, secondParagraphAbout, secondParagraphAboutTxt, objective, objectiveTxt, firstParagraphObjective, firstParagraphObjectiveTxt, secondParagraphObjective, secondParagraphObjectiveTxt, interval)
*/


async function writeTxt(aboutMe, aboutMeTxt, firstParagraphAbout, firstParagraphAboutTxt, secondParagraphAbout, secondParagraphAboutTxt, objective, objectiveTxt, firstParagraphObjective, firstParagraphObjectiveTxt, secondParagraphObjective, secondParagraphObjectiveTxt, interval){
    writeContent(aboutMe, aboutMeTxt, interval)
    await sleep(1)
    writeContent(firstParagraphAbout, firstParagraphAboutTxt, interval)
    await sleep(15)
    writeContent(secondParagraphAbout, secondParagraphAboutTxt, interval)
    await sleep(8)
    writeContent(objective, objectiveTxt, interval)
    await sleep(1)
    writeContent(firstParagraphObjective, firstParagraphObjectiveTxt, interval)
    await sleep(16)
    writeContent(secondParagraphObjective, secondParagraphObjectiveTxt, interval)
}

async function sleep(seconds){
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

writeTxt(aboutMe, aboutMeTxt, firstParagraphAbout, firstParagraphAboutTxt, secondParagraphAbout, secondParagraphAboutTxt, objective, objectiveTxt, firstParagraphObjective, firstParagraphObjectiveTxt, secondParagraphObjective, secondParagraphObjectiveTxt, interval)
