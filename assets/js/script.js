function exibirMenu(){
    document.getElementById("conteudo-menu").style.display="flex";
}
function ocutarMenu(){
    document.getElementById("conteudo-menu").style.display="none";
}


// ---------------------- <--------> --------------------

function transacao(e) {
 console.log(e);
var tipo = document.getElementById('nova-transacao').value;
var nome = document.getElementById('nm-merca').value;
var valor = document.getElementById('valor-input').value;

var transacao = JSON.parse(localStorage.getItem('transacao') || '[]');

transacao.push(
    {
        tipo: tipo,
        nome: nome,
        valor: valor,
    }
);

localStorage.setItem('transacao', JSON.stringify(transacao));

// document.getElementById('btn-transacao');
};

console.log(localStorage.getItem('transacao'));

function desenhaTabela() {
    if (transacao != null) {
    
        document.querySelector('table.table tbody').innerHTML += 
            `<tr>
                <td class="mais-menos">
                    ${transacao.tipo}
                </td>
                <td class="mercadoria">
                    ${localStorage.getItem(nome.value)}
                </td>
        
                <td class="valor-mercadoria"  >
                    ${localStorage.getItem(valor.value)}
                </td>    
            </tr>`
    }
    
};


// console.log(document.querySelector('table.table').innerHTML);

//     for (person in mercadorias) {
//     document.querySelector('table.table tbody').innerHTML += 
//     `<tr>
//         <td class="mais-menos">
//             ${mercadorias[person].transacao}
//         </td>
//         <td class="mercadoria">
//             ${mercadorias[person].nome}
//         </td>

//         <td class="valor-mercadoria"  >
//             ${mercadorias[person].valor}
//         </td>    
//     </tr>`
// };

// if (mercadorias > 0) {
//         document.querySelector('table.table tbody').innerHTML += `<tr class="total">
//         <td></td>
//         <td class="mercadoria" id="total">Total</td>
//         <td class="valor-mercadoria"  id="total">R$ 12.909,99 
//     </tr>
//     <tr class="lucro">
//         <td></td>
//         <td></td>
//         <td>[LUCRO]</td>
//     </tr>`
// };
