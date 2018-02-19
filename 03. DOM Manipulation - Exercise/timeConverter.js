function attachEventsListeners() {
    let divsArr = document.getElementsByTagName('div');
    for (let i = 0; i < divsArr.length; i++) {

        divsArr[i].children[divsArr[i].children.length - 1].addEventListener('click', convert);
    }
    function convert() {
        let parent = this.parentNode;
        if (parent.children[1].id === 'days') {
            for (let i = 0; i < divsArr.length; i++) {
                let element = divsArr[i].children[1];
                if (divsArr[i].children[1].id === 'hours') {
                    element.value = Number(parent.children[1].value) * 24;
                } else if (divsArr[i].children[1].id === 'minutes') {
                    element.value = Number(parent.children[1].value) * 24 * 60;
                } else if (divsArr[i].children[1].id === 'seconds') {
                    element.value = Number(parent.children[1].value) * 24 * 60 * 60;
                }
            }

        } else if (parent.children[1].id === 'minutes') {
            for (let i = 0; i < divsArr.length; i++) {
                let element = divsArr[i].children[1];
                if (divsArr[i].children[1].id === 'days') {
                    element.value = Number(parent.children[1].value) / 24 / 60;
                } else if (divsArr[i].children[1].id === 'hours') {
                    element.value = Number(parent.children[1].value) / 60;
                } else if (divsArr[i].children[1].id === 'seconds') {
                    element.value = Number(parent.children[1].value) * 60;
                }
            }

        } else if (parent.children[1].id === 'hours') {
            for (let i = 0; i < divsArr.length; i++) {
                let element = divsArr[i].children[1];
                if (divsArr[i].children[1].id === 'days') {
                    element.value = Number(parent.children[1].value) / 24;
                } else if (divsArr[i].children[1].id === 'minutes') {
                    element.value = Number(parent.children[1].value) * 60;
                } else if (divsArr[i].children[1].id === 'seconds') {
                    element.value = Number(parent.children[1].value) * 60 * 60;
                }
            }

        } else if (parent.children[1].id === 'seconds') {
            for (let i = 0; i < divsArr.length; i++) {
                let element = divsArr[i].children[1];
                if (divsArr[i].children[1].id === 'days') {
                    element.value = Number(parent.children[1].value) / 24 / 60 / 60;
                } else if (divsArr[i].children[1].id === 'minutes') {
                    element.value = Number(parent.children[1].value) / 60;
                } else if (divsArr[i].children[1].id === 'hours') {
                    element.value = Number(parent.children[1].value) / 60 / 60;
                }

            }
        }
    }
}
