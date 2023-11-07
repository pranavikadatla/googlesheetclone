const activeCellElement=document.getElementById("active-cell");
const textAlignElements=document.getElementsByClassName("text-align");
const boldButton=document.getElementById("bold");
const italicButton=document.getElementById("italic");
const underLineButton=document.getElementById("underLine");
let  activeCell=null;
let activeOptionState;
function highlightOptionButtonOnFocus(){
 if(activeOptionState.isBoldSelected&&!boldButton.classList.contains("active-option")){
      boldButton.classList.add("active-option");
 }
 else{
    boldButton.classList.remove("active-option");
 }
 if(activeOptionState.isItalicSelected&&!italicButton.classList.contains("active-option")){
   italicButton.classList.add("active-option");
 }
 else{
    italicButton.classList.remove("active-option");
 }
 if(activeOptionState. isUnderLineSelected&&!underLineButton.classList.contains("active-option")){
    underLineButton.classList.add("active-option");
  }
  else{
     underLineButton.classList.remove("active-option");
  } 
  highlightTextAlignButtons(activeOptionState.textAlign);
 
};

// const defaultOptionState={
//     fontFamily:"",
//     isBoldSelected:false,
//     isItalicSelected:false,
//     isUnderLineSelected:false,
//     textAlign:"left",
//     textColor:"#000",
//     backgroundColor:"#fff",
//     fontSize:14,
//  }; 
 function onCellFocus(event){
    if(activeCell&&activeCell.id===event.target.id){
       return;
 }
    activeCell=event.target;
    activeCellElement.innerText=event.target.id;
 let  computedStyle=window.getComputedStyle(activeCell);
activeOptionState={ 
    fontFamily:computedStyle.fontFamily,
    isBoldSelected:computedStyle.fontWeight==="600",
    isItalicSelected:computedStyle.fontStyle==="italic",
    isUnderLineSelected:computedStyle.textDecoration.includes("underline"),
    textAlign:computedStyle.textAlign,
    textColor:computedStyle.color,
    backgroundColor:computedStyle.backgroundColor,
    fontSize:computedStyle.fontSize,
};
highlightOptionButtonOnFocus();
 };


function onClickBold(bold){
    bold.classList.toggle("active-option");
    if(activeCell){
    if(activeOptionState.isBoldSelected){
        activeCell.style.fontWeight="400";
    }else{
        activeCell.style.fontWeight="600";
    }
 activeOptionState.isBoldSelected=!activeOptionState.isBoldSelected;
}
};  
function onClickItalic(italic){
    italic.classList.toggle("active-option");
    if(activeCell){
        if(activeOptionState.isItalicSelected){
            activeCell.style.fontStyle="normal"; 
        }else{
            activeCell.style.fontStyle="italic";
        }
        activeOptionState.isItalicSelected=!activeOptionState.isItalicSelected;   
}
};
function onClickUnderLine(underLine){       
    underLine.classList.toggle("active-option");
    if(activeCell){
if(activeOptionState.isUnderLineSelected){
    activeCell.style.textDecoration="none";
}
else{
    activeCell.style.textDecoration="underline";
}
    }
activeOptionState.isUnderLineSelected=!activeOptionState.isUnderLineSelected;       

};
function highlightTextAlignButtons(textAlignValue){

for(let i=0;i<textAlignElements.length;i++){
    if(textAlignElements[i].getAttribute("data-value")===textAlignValue){
        textAlignElements[i].classList.add("active-option");
    }
    else{
        textAlignElements[i].classList.remove("active-option");
    }
}
};
function onClickTextAlign(textAlignButton){
    let selectedValue=textAlignButton.getAttribute("data-value");
    highlightTextAlignButtons(selectedValue);
    if(activeCell){
        activeCell.style.textAlign=selectedValue;
        activeOptionState.textAlign=selectedValue;
    }
};
function onChangeTextColor(textColorInput){
let selectedColor=textColorInput.value;
if(activeCell){
    activeCell.style.color=selectedColor;
    activeOptionState.color=selectedColor;
}
};
function onChangeBackGroundColor(textColorInput){
    let selectedColor=textColorInput.value;
    if(activeCell){
        activeCell.style.backgroundColor=selectedColor;
        activeOptionState.backgroundColor=selectedColor;
    }
    };

function changeFontSize(){
   var selectedSize =document.getElementById("fontSizeSelector").value;
   activeCell.style.fontSize=selectedSize+'px';
}
function changeFontFamily(){
    var selectedFontFamily=document.getElementById("fontFamilySelector").value;
    activeCell.style.fontFamily=selectedFontFamily;
}