const TOKEN =
    'fecbcc0efecbcc0efecbcc0ee6fddd9da6ffecbfecbcc0e9b9e306ca062d2a01f419ff0';

let callApi = (method, bias) =>
    new Promise((resolve, reject) => {
        let fnName = method.replaceAll('.', '_');

        let script = document.createElement('SCRIPT');
        script.src = `https://api.vk.ru/method/${method}?access_token=${TOKEN}&domain=vkteam&offset=${bias}&count=15&v=5.154&callback=${fnName}`;
        document.getElementsByTagName('head')[0].appendChild(script);

        window[fnName] = function (data) {
            resolve(data);
            script.remove();
        };

        script.onerror = reject;
    });

let ul = document.querySelector('.list')

//task20

let storageLength = () => {
    console.log(localStorage.getItem('data').length/1024/1024)
}

let run = async (bias = 0) => {
    let response = await callApi('wall.get', bias)

    if (!localStorage.getItem('data')) {
        localStorage.setItem('data', JSON.stringify(response.response.items))
    } else {
        let storage = JSON.parse(localStorage.getItem('data')).concat(response.response.items)
        localStorage.setItem('data', JSON.stringify(storage))
        storageLength()
    }

    response.response.items.forEach((item) => {
        let li = document.createElement('li')
        li.textContent = item.text
        ul.append(li)
    })
};

run()

let bias = 15
window.onscroll = () => {
    let height = window.innerHeight
    if (window.scrollY > height) {
        run(bias)
        bias += 15
    }
}