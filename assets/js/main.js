import { getHellfireSubscriptions, subscribeToHellfire } from './firebase/hellfire-club.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscribe = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = await subscribeToHellfire(subscribe)
    console.log('Inscrito com sucesso: ' + subscriptionId)

    txtName = ''
    txtEmail = ''
    txtLevel = ''
    txtCharacter = ''
})

async function loadData() {
    const subscriptions = await getHellfireSubscriptions()
    console.log(subscriptions)
}
