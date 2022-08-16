!function(){
    // select all
    document.getElementById('select-all').addEventListener('click', ()=> {
        selectAll();
    })
    function selectAll(){
        let inputs = document.querySelectorAll('.inputs');
        inputs.forEach((input) => {
            input.checked = true;
        });
    }

    // clear all
    document.getElementById('clear-all').addEventListener('click', ()=> {
        clearAll();
    })
    function clearAll(){
        let inputs = document.querySelectorAll('.inputs');
        inputs.forEach((input) => {
            input.checked = false;
        });
    }

    // generate pdf
    document.getElementById('generate-pdf').addEventListener('click', ()=> {
        generatePdf();
    })
    function generatePdf(){
        let arr = [];
        let checkBoxes = document.querySelectorAll('.inputs');
        checkBoxes.forEach(checkBox => {
            if (checkBox.checked === true) {
                let fileName = checkBox.id.replace('input-', "");
                let fullPath = `./files/${fileName}`;
                arr.push(fullPath);
            }
        })
        let jsonData = JSON.stringify(arr);
        postJson(jsonData);

        function postJson(data) {
            let url = './merge-pdf.php';
            // 普通にPOSTでページ遷移するコードを書く
            let form = document.createElement("form");
            let input = document.createElement('input');
            input.name = 'a';
            input.value = data;
            input.type = 'hidden';
            form.append(input);
            form.method = "POST";
            form.action = url;
            document.body.append(form);
            form.submit();
        }
    }
}();