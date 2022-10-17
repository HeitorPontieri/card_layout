'use strict'
import {mostrarAlunos} from './api.js'

class card extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode :'open'})
        this.nome = 'Sem Nome'
        this.turma = 'Sem Turma'
    }
    static get observedAttributes(){
        return ['nome', 'turma', 'foto']
    }
    attributeChangedCallback(nameAttr,oldValue,newValue){
        this [nameAttr] = newValue
    }
    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
     async component(){
        
       
    
    }
    
}
customElements.define('card-aluno', card)

