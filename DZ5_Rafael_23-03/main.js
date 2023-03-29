const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const lira = document.querySelector('#lira')

const convert = (elem, target, isTrue, isTrue2)=> {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            if (isTrue){
                target.value = (elem.value / response.usd).toFixed(2)
            }else{
                target.value = (elem.value * response.usd).toFixed(2)
            }
            elem.value === "" ? (target.value = "") : null
        })
        elem.addEventListener("input", () => {
            const got = new XMLHttpRequest()
            got.open("GET", "date.json")
            got.setRequestHeader("Content-type", "application/json")
            got.send()
            got.addEventListener("load", () => {
                const form = JSON.parse(gut.form)
                if (isTrue2){
                    target.value = (elem.value / form.lira).toFixed(2)
                }else{
                    target.value = (elem.value * form.lira).toFixed(2)
                }
                elem.value === "" ? (target.value = "") : null
            })
        })
    })
}

convert(som, lira, 12)
convert(lira, som, )
convert(som, usd, 15)
convert(usd, som, )
convert(usd, lira, 12)
convert(lira, usd, )
