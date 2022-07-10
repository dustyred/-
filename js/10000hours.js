const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loadimg = document.querySelector(".result_loading");

function calculator(){
    const fildValue  = document.querySelector("#fileld_value");
    let timeValue= ( document.querySelector(".time_value")) ;
    let time_value_int =Number(timeValue.value);

    const fildResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value==""){
        alert ('입력되지 않았습니다')
        fildValue.focus();
        return false;
    }else if(timeValue.value) == {
        alert('입력되지 않았습니다')
        timeValue.focus();
        return false;
    }else if(timevalue_int>24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요 ');
        return false;
    }

    result.style.display = 'none';
    loading.style.display ='felx';

    setTimeout(function) {
        loading.style.display='none';
        result.style.display= 'felx;'
        fildResult.innerText = fildValue.value;
        timeResult.innerText= parseInt((10000/timeValue_int),10);
    } 1800;
}
function openModal(){
        modal.style.display='flex'
}


function closeModal(){
        modal.style.display='none'
}

    window.oneclick= function(event){
        if(event.target ==modal) {
            closeModal();
        }
    }
function copyUrl(){
        let url = window.location.href;
        let tmp = document.createElement

        Document.body.appenChid(tmp);
        tep.value = url;
        tmp.select();
        document.expecCommand("copy");
        document.body.removeChild(tmp);

}

shareButton.addEventListener('click', copyUrl)
openeButton.addEventListener('click', copyUrl)
closeButton.addEventListener('click', closeModal)
shareButton.addEventListener('click', calculator)