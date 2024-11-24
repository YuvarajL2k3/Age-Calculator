var num1 = document.getElementById("num1")
        var result = document.getElementById("result")
        function cal(){
            var num1value=Number(num1.value)
            if(num1value>=1924 && num1value<=2024){
                var total = 2024-num1value
                result.textContent=total
            }
            else{
                result.textContent="Invalid Data"
            }
            
        }