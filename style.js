let arr = [];
let arrName = [];
let arrEmail = [];
let arr1 = [];
$(document).ready(function () {
    $(".up").hide();
    $("#btnSubmit").hide();
    $(".btn-light").click(function () {
        $(this).text($(this).text() == 'Dark-Mode' ? 'Light-Mode' : 'Dark-Mode');
        $("body").toggleClass("dark-mode");
        $("table").css({ "background-color": "white", "border": "1px solid #DEE2E6" });
        $("tr:odd").css("background-color", "#0d0d0d");
        $("thead").css("background-color", "white");
    });
    $("#addData").click(function () {
        $("#btnSubmit").show();
        console.log("clicked");
        if ($("#name").val() != "" && $("#email").val() != "") {
            arr.push({ Name: `${$("#name").val()}`, Email: `${$("#email").val()}` });
            displayData();
            $("tr:odd").css({ "background-color": " #0d0d0d", "color": "white" });
            $("input").val("");
        } else {
            $("input").val("");
            var dataItem = $('.dataItem').append(`
            <div class="row mt-2 dynamicDataItem">
                <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Name" id="name">
                </div>
                <div class="col-md-4">
                    <input type="email" class="form-control" placeholder="Email" id="email">
                </div>
                <div class="col-md-4 mt-1">
                    <i class='fa-solid fa-square-minus' id='removeItem'></i>
                </div>
            </div>
          `)
          arr1.push(dataItem);
        }
    });
    

    $('body').on('click', '#removeItem', function () {
        $(this).parent().parent().remove();
    });
    $('body').on('click',"#btnSubmit",function(){
        console.log("clickedSubmit");
        $.each($('input[id=name]'),function(){
            if($(this).val() != ""){
                arrName.push($(this).val());
            }
        });
        console.log(arrName);
        $.each($('input[id=email]'),function(){
            if($(this).val() != ""){
                arrEmail.push($(this).val());
            }
        });
        for(i in arrName){
            arr.push({Name:arrName[i],Email:arrEmail[i]});
        }
        console.log(arr);
        displayData();
        arr.splice(0,arrName.length);
        console.log(arr);
        $("input").val("");
        $(".dynamicDataItem").remove();
        $("#btnSubmit").hide();
    })
})
function displayData() {
    var data = "<table>";
    for (let i = 0; i < arr.length; i++) {
        data += `<tr id='dataRemove${i}'>`
        data += "<td>" + (i + 1) + "</td>"
        data += "<td>" + arr[i].Name + "</td>"
        data += "<td>" + arr[i].Email + "</td>"
        data += "</tr>"
    }
    data += "</table>";
    $("#dataShow").html(data); 
    $("tr:odd").css({ "background-color": " #0d0d0d", "color": "white" });
    $(".up").show();
}
