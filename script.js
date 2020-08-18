const profil = {
    name: 'Ian Lombu',
    age: 25
}

const handler = {
    get: (target, name) => {
        name in target ? console.log(target[name]) :
        console.log('not found');
    },
    set: (target, name, value) => {
        target[name] = value;
    }
}
const profilProxy = new Proxy(profil, handler)

profilProxy.name
profilProxy.age
profilProxy.status
