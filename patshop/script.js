//// PAT SHOP - banho e tosa ////
const listaServico = [
    {id: 1, nome: 'Banho Completo', preco: 80.00, disponivel: true},
    {id: 2, nome: 'Tosa Higienica', preco: 100.00, disponivel: false},
    {id: 3, nome: 'Tosa Estética', preco: 120.00, disponivel: true},
    {id: 4, nome: 'Hidratação do pelo', preco: 180.00, disponivel: false},
    ];

//     ///FILTER
//     const servicoDisponivel = listaServico.filter(servico => servico.disponivel);
//    console.log(servicoDisponivel);

//     ///map - aplicar R$2,00 do perfume
//     const servicoComDesconto = servicoDisponivel.map(servico => {
//     return {
//         ...servico,
//         precoFinal: servico.preco + 2
//     }
// })
// console.log(servicoComDesconto)

// //reduce - faturamento do dia
// const faturamentoTotal = servicoComDesconto.reduce((acumulador, item) =>{
// return acumulador + item.precoFinal;
// }, 0);
// console.log(`R$ ${faturamentoTotal.toFixed(2)}`);
// console.log( `--- RELATÓRIO DE VENDAS Pet Shop ---`);
// console.log(`Servicos realizados :  ${servicoComDesconto.length}`);
// console.log(`Faturamento previsto (com aplicação) : R$ ${faturamentoTotal.toFixed(2)}`);
   
