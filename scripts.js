const convert_button = document.querySelector(".converter-button")
const currency_select = document.querySelector(".currency-select")

function convert_values() {
    const input_currency_value = document.querySelector(".input-currency").value
    const currency_value_to_convert = document.querySelector(".currency-value-to-convert") //valor em real 
    const currency_value_converted = document.querySelector(".currency-value") // outras moedas

    console.log(currency_select.value)
    const libra_today = 6.2
    const bitcoin_today = 135.10


    if (currency_select.value == "libra") {
        currency_value_converted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(input_currency_value / libra_today)

    }
    if (currency_select.value == "bitcoin") {
        currency_value_converted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "BTC"
        }).format(input_currency_value / bitcoin_today)

    }

    currency_value_to_convert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input_currency_value)
}
function change_currancy() {
    const currency_name = document.getElementById("currency-name")
    const currency_image = document.querySelector(".currency-img")


    if (currency_select.value == "libra") {
        currency_name.innerHTML = "Libra Esterlina"
        currency_image.src = "./assets/libra.jpg"
    }

    if (currency_select.value == "bitcoin") {
        currency_name.innerHTML = "Bitcoin"
        currency_image.src = "./assets/bitcoin.jpg"
    }

convert_values()

}
currency_select.addEventListener("change", change_currancy)
convert_button.addEventListener("click", convert_values)