/*tilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe*/


// creo un array con le iformazioni di ogni membro del team
const teamUsers = [
    {
        nome: "Waine Bernet",
        ruolo: "Founder e CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter gordon",
        ruolo: "Office Manager",
        foto: ""
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: ""
    },
    {
        nome: "Scot Estrada",
        ruolo: "Developer",
        foto: ""
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: ""
    }
];

// Stampare su console le informazioni di ogni membro del team
teamUsers.forEach(member => {
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
});

// Ottenere l'elemento della lista dal DOM
const teamListElement = document.getElementById('team-list');

// Stampare le stesse informazioni sul DOM sotto forma di stringhe
teamUsers.forEach(member => {
    // Creare una stringa con le informazioni del membro del team
    const memberInfoString = `Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`;
    
    // Creare un elemento list item (li) nel DOM
    const memberListItem = document.createElement('li');
    
    // Impostare il contenuto del list item con la stringa delle informazioni del membro
    memberListItem.textContent = memberInfoString;
    
    // Aggiungere il list item alla lista nel DOM
    teamListElement.appendChild(memberListItem);
});
