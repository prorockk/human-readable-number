module.exports = function toReadable (number) {
  let arr1 = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let arr3 = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  let result = '';
  let numberStr = number.toString();
  if (numberStr.length==1) {

    result = arr1[Number(numberStr[0])]
  } 
  else if (numberStr.length==2) {
      if (numberStr==10) {return 'ten'}
      else if (Number(numberStr[1])==0){
          result =arr2[Number(numberStr[0]-2)]
      }
      else if (Number(numberStr[0])==1&&Number(numberStr[1])!=0) {
        result =arr3[Number(numberStr[1]-1)]
       }
      else {
        result = arr2[Number(numberStr[0]-2)] +' '+ arr1[Number(numberStr[1])]
        }
  }
  else if (numberStr.length==3) {
    if (Number(numberStr[1])==1&&Number(numberStr[2])==0){
      result = arr1[Number(numberStr[0])]+' hundred ten'
    }
    else if (Number(numberStr[2])==0){
      if (Number(numberStr[1])==0){
        result = arr1[Number(numberStr[0])]+' hundred'
      }
      else result = arr1[Number(numberStr[0])]+' hundred ' + arr2[Number(numberStr[1]-2)]
    }
    else if (Number(numberStr[1])==0&&Number(numberStr[2])!=0){
      result = arr1[Number(numberStr[0])]+' hundred ' + arr1[Number(numberStr[2])]
    }
    else if (Number(numberStr[1])==1&&Number(numberStr[2])!=0) {
     result = arr1[Number(numberStr[0])]+' hundred ' + arr3[Number(numberStr[2]-1)]
    }
    else  result = arr1[Number(numberStr[0])]+' hundred ' + arr2[Number(numberStr[1]-2)] +' '+ arr1[numberStr[2]]
  }
  else {return 'Error'}
  return result
}
