const myContacts = [{
        id: 1,
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
    },
    {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@braverian.com'
    },
    {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        email: 'gamma@gacurio.dev'
    }
]

//show contacts
const showContacts = contacts => {
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        console.log(`[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`)
    }
}



//add contacts
const addContact = (id = '', name = '', phone = '', email = '') => {
    let newContact = { id: id, name: name, phone: phone, email: email }
    myContacts.push(newContact)
}

//search contact
const searchContact = (contactName) => {
    let contact = ''
    for (let i = 0; i < contact.length; i++) {
        if (contactName === contact.name) {
            console.log(`${contact.name} ${contact.phone} ${contact.email}`)
        }
    }
}


showContacts(myContacts)
addContact(4, 'dhila', '2044546', 'djdlkqnsk@gmail.com')
searchContact('Alpha Avalon')
showContacts(myContacts)