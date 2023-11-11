$("#input").change(function(){
    addList();
    saveList();
});
const ulist=$("ul");

function addList(text="",ch=0){
    let change="";
    if(text===""){
        change=$("#input").val();
    }
    else{
        change=text;
    }
    const list=document.createElement("li");
    list.innerHTML=`${change}<i class='fa-solid fa-check'></i><i class='fa-solid fa-trash'</i>`;
    if(ch===1){
        list.classList.add("checked");
    }
    $("#input").val('');
    ulist.append(list);
    saveList();
}

$("ul").on("click",".fa-trash",function(){
    $(this).parent("li").remove();
    saveList();
});

$("ul").on("click",".fa-check",function check(){
    $(this).parent("li").toggleClass("checked");
    saveList();
});

function saveList(){
    const lists=$("li");
    const data1=[];
    const data2=[];
        lists.each(
            (i)=>{
                data1.push(lists[i].textContent)
                if(lists[i].classList.contains("checked")){
                    data2.push(1);
                }else{
                    data2.push(0);
                }
            }
        );
        if(data1.length==0){
            localStorage.removeItem("list");
        }else{
            localStorage.setItem("list",JSON.stringify(data1));
        }

        if(data2.length===0){
            localStorage.removeItem("check");
        }else{
            localStorage.setItem("check",JSON.stringify(data2));
        }
}

(
    function(){
        const lnotes=JSON.parse(localStorage.getItem("list"));
        const checked=JSON.parse(localStorage.getItem("check"));
        if(lnotes!==null){
            lnotes.forEach(
                (lsnote,i)=>{
                    addList(lsnote,checked[i]);
                }
            )
        }
    
        
    }
)()
