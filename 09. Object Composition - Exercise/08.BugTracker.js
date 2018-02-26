function generateBugManager() {

    let id = 0;
    let bugs = [];
    let printer = undefined;

    function report(author, description, reproducible, severity) {
        let newReport = {
            ID: id++,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        };
        bugs.push(newReport);
        order();
    }

    function setStatus(id, newStatus) {
        bugs.filter(r => r.ID === id)[0].status = newStatus;
        order();
    }

    function remove(id) {
        bugs.filter(r => r.ID !== id);
        order();
    }

    function order(method = "ID") {
        if (method === "ID") {
            bugs = bugs.sort((a, b) => a.ID - b.ID);
        } else if (method === "author") {
            bugs = bugs.sort((a, b) => a.author.toString().localeCompare(b.author.toString()));

        } else if (method === "severity") {
            bugs = bugs.sort((a, b) => a.severity - b.severity);
        }
        updateScreen();
    }
    function output(selector) {
        printer = selector;
    }
    function updateScreen() {
        if (printer) {
            let parent = $(printer);
            parent.text('');
            for (let bug of bugs) {
                let html = formatBug(bug);
                parent.append(html);
            }
        }
    }
    function formatBug(bug) {
        return $('<div>')
            .attr('id', 'report_' + bug.ID)
            .addClass('report')
            .append($('<div>')
                .addClass('body')
                .append($('<p>')
                    .text(bug.description)))
            .append($('<div>')
                .addClass('title')
                .append($('<span>')
                    .addClass('author')
                    .text('Submitted by: ' + bug.author))
                .append($('<span>')
                    .addClass('status')
                    .text(bug.status + ' | ' + bug.severity)));
    }
    return {report, setStatus, remove, order, output};
}
