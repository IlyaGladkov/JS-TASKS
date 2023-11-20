let urlImg = 'https://i.pinimg.com/originals/b9/2b/7b/b92b7b18c1936f9f3b4fd2074052e404.jpg'

let imgPromise = (url) => {
    return new Promise((res, rej) => {
        let img = new Image ();
        img.onload = () => res (img);
        img.onerror = rej;
        img.src = url;
    })
}

imgPromise(urlImg)