let jsonStr ='{"menu": {"id": "file","value": "File","popup": {"menuitem": [{"value": "New", "onclick": "CreateNewDoc()"},{"value": "Open", "onclick": "OpenDoc()"},{"value": "Close", "onclick": "CloseDoc()"}]}}}'

let toJSON = (str) => {
    let obj = eval('(' + str + ')')
    console.log(obj)
}

toJSON(jsonStr)