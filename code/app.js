app = {
    init : function() {
        console.log("init inside app!");
        $("title").text("Project X");
        $.getJSON("data.json")
        .done(app.onSuccess)
        .fail(app.onError);
        
    },
    onSuccess:function(jsonData){
        // processa i dati qui!!!
        console.log(jsonData);
        let list = jsonData.commandList;
        list.forEach(element => {
            let html = `<div class="table-row">
            <div class="table-cell">${element.name}</div>
            <div class="table-cell">${element.description}</div>
        </div>`;
        $("#command-table").append(html);
        });
    },
    
    onError:function(e){
        console.log("error!");
        console.log(JSON.stringify(e));
    }
};



$(document).ready(app.init);