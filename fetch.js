import {pdfs} from "./pdfs.js";
    function fetchPdfs() {
        let secSheets1 = document.getElementById('sheets-1');
        for (let i = 0; i <= pdfs.length - 1; i++) {
            const divTag    = document.createElement('div');
            const inputTag  = document.createElement('input');
            const labelTag  = document.createElement('label');
            
            divTag.classList.add('select-btn');
            divTag.id      = 'div-' + pdfs[i].fileName;

            inputTag.classList.add('inputs');
            inputTag.type  = 'checkbox';
            inputTag.id    = 'input-' + pdfs[i].fileName;
            if(pdfs[i].default === "on") {
                inputTag.checked = true;
            }

            labelTag.classList.add('select-btn-label');
            labelTag.id        = 'label-' + pdfs[i].fileName;
            labelTag.innerText = pdfs[i].docName;
            labelTag.htmlFor   =  'input-' + pdfs[i].fileName;

            divTag.append(inputTag, labelTag);
            secSheets1.append(divTag);
        }
    }
    fetchPdfs();