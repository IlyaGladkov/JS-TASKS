let logList = list => {
    console.log(list.value);
    if (list.next) {
        logList(list.next);
    }
}

logList(list)