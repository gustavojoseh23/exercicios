let nomeCompleto = 'Gustavo Joseh da Costa Conceição';
console.log(nomeCompleto);

let nomeReverso = nomeCompleto.split('').reverse().join('');
console.log(nomeReverso);

let nomeAocontrario = nomeCompleto.split(' ');
let ultimoNome = nomeAocontrario.pop();
let sobrenome = nomeAocontrario.pop();
nomeAocontrario = nomeAocontrario.join(' '); 
let novoNome = `${ultimoNome} ${sobrenome} ${nomeAocontrario}`;
console.log(novoNome);
