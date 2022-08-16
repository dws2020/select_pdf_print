!function(){
    let url = 'doc.json';
    async function fetchFiles() {
        let res   = await fetch(url);
        let files = await res.json();  

        let secSheets1 = document.getElementById('sheets-1');
        for (let i = 0; i <= files.length - 1; i++) {
            const divTag    = document.createElement('div');
            const inputTag  = document.createElement('input');
            const labelTag      = document.createElement('label');
            
            divTag.classList.add('select-btn');
            divTag.id      = 'div-' + files[i].fileName;

            inputTag.classList.add('inputs');
            inputTag.type  = 'checkbox';
            inputTag.id    = 'input-' + files[i].fileName;
            if(files[i].default === "on") {
                inputTag.checked = true;
            }

            labelTag.classList.add('select-btn-label');
            labelTag.id        = 'label-' + files[i].fileName;
            labelTag.innerText = files[i].docName;
            labelTag.htmlFor   =  'input-' + files[i].fileName;

            divTag.append(inputTag, labelTag);
            secSheets1.append(divTag);
        }
        // let inputTags = document.querySelectorAll('.inputs');

        // let docNames = document.querySelectorAll('.select-btn-p');
        // docNames.forEach((docName)=> {
        //     docName.addEventListener('click', () => {
        //     let fileName = docName.id.replace('p-','');
        //     let targetInput = document.getElementById('input-' + fileName);
        //     if (targetInput.checked === true) {
        //         targetInput.checked = false;
        //     } else {
        //         targetInput.checked = true;
        //     }
        //     });
        // })
    }
    fetchFiles();
}();