//usuário comum, gerente ou diretor
//switch .. case (interromper caso)

let permissão = 'diretor';

switch(permissão) {
    case 'comum':
        console.log('Nada demais.');
        break;
    case 'gerente':
        console.log('Chama o gerente.');
        break;
    case 'diretor':
        console.log('Respeita mamacita');
        break;

    default:
        console.log('Quem é você querida?');
}