
let lanzador        = ''
let selectedSkill   = ''
let objetivo        = ''
let tipo            = ''

let card = document.querySelector("body")


card.addEventListener("click", function(event) {

    let target = event.target

    if (target.parentNode.parentNode.parentNode.classList[1] == 'Warrior' ) {
        tipo = target.parentNode.parentNode.parentNode.classList[1]
        
        if (target.classList[2] =='skill1') {
            lanzador =       target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill =  'Atacar'

        }
        if (target.classList[2] == 'skill2') {
            lanzador =      target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Blindar'
        }
        if (target.classList[2]=='skill3') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'IraYopuka'
        }
       
    }
    if (target.parentNode.parentNode.parentNode.classList[1] == 'Witcher' ) {
        tipo = target.parentNode.parentNode.parentNode.classList[1]

        if (target.classList[3] =='skill1') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Atacar'
        }
        if (target.classList[2] == 'skill2') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Peste'
        }
        if (target.classList[2]=='skill3') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Mejora'
        }
       
    }
    if (target.parentNode.parentNode.parentNode.classList[1] == 'Healer' ) {
        tipo = target.parentNode.parentNode.parentNode.classList[1]

        if (target.classList[3] =='skill1') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Atacar'
        
        }
        if (target.classList[2] == 'skill2') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Curar'
        }
        if (target.classList[3]=='skill3') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Sacrificio'
        }
       
    }
    
  });
  
  
  
  card.addEventListener("click", function(event) {

    let target = event.target
    let op1 = document.querySelector("div.card__img") 
    let op2 = document.querySelector("div.card__img > img")

    objetivo = target.parentNode.parentNode.classList[2]




    if ((op2.alt=='game' && target.alt=='game') || (op1.classList[0]=='card__img'  && target.classList[0]=='card__img')) {
        // console.log(`Mira loq ue tenemos quien pega ${lanzador} que pega ${selectedSkill} a quien pega ${objetivo} `);

        
        PersonajeGame.forEach(PersonajeGame=>{
            if(PersonajeGame.name == objetivo){
                objetivo = PersonajeGame               
            }
        })
        
        

        PersonajeGame.forEach(PersonajeGame=>{

            if(PersonajeGame.name == lanzador){
                lanzador= PersonajeGame

                if (selectedSkill == 'Atacar') {
                    PersonajeGame.Atacar(objetivo) 
                }
                if (selectedSkill == 'Blindar') {
                    PersonajeGame.blindar(objetivo) 
                }
                if (selectedSkill == 'IraYopuka') {
                    PersonajeGame.iraYopuka(objetivo)  
                }
          
                if (selectedSkill == 'Curar') {
                    PersonajeGame.curar(objetivo) 
                }
                if (selectedSkill == 'Sacrificio') {
                    PersonajeGame.sacrificio(objetivo)  
                }

                if (selectedSkill == 'Peste') {
                    PersonajeGame.Peste(objetivo) 
                }
                if (selectedSkill == 'Mejora') {
                    PersonajeGame.Mejora(objetivo)  
                }

            }

        })

        console.log(lanzador, tipo);
        console.log(objetivo);
   



    }
 



  })
  
  


  
  