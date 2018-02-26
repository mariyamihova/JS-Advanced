function processCommands(commands) {

    let commandProcessor = (function () {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) => list = list.filter(x => x !== item),
            print: () => console.log(list.join(","))
        }
    })();
    for (let line of commands) {
        let [commandName, arg] = line.split(' ');
        commandProcessor[commandName](arg);
    }

}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);