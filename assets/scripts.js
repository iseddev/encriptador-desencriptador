// Scripts para el manejo de las encriptaciones y desencriptaciones de los mensajes
const d = document

// "Capturar" elementos del área de ingreso del mensaje y botones para encriptar y desencriptar
const $textArea = d.querySelector("#textarea-text")
const $btnEncrypt = d.querySelector("#btn-encrypt")
const $btnDecrypt = d.querySelector("#btn-decrypt")

// "Capturar" elementos del area que mostrará los resultados del mensaje encriptado y el botón de copiar mensaje encriptado
const $emptyContainer = d.querySelector("#empty")
const $successContainer = d.querySelector("#success")
const $textareaSuccess = d.querySelector("#textarea-success")
const $btnCopy = d.querySelector("#btn-copy")


// ===== E N C R I P T A R   (EVENTO CLICK) =====
$btnEncrypt.addEventListener("click", () => {

	if($textArea.value !== "") {
		let userText = $textArea.value.toLowerCase().trim()
		let encryptedText = encryptText(userText)
		successOutput(encryptedText)
	} else { emptyOutput() }
})

// ===== D E S E N C R I P T A R   (EVENTO CLICK) =====
$btnDecrypt.addEventListener("click", () => {

	if($textArea.value !== "") {
		let encryptedText = $textArea.value.toLowerCase().trim()
		let decryptedText = decryptText(encryptedText)
		successOutput(decryptedText)
	} else { emptyOutput() }
})

// ===== C O P I A R   (EVENTO CLICK) =====
$btnCopy.addEventListener("click", () => {
	const copyText = $textareaSuccess.textContent
	console.log(copyText) // Validar el contenido de "copyText"
	console.log(typeof copyText) // Validar el tipo de dato del contenido de "copyText"
	navigator.clipboard.writeText(copyText).then( // Se obtiene error!!!
		() => {
			alert(`${copyText} ha sido copiado al clipboard!!!`) // Alerta para verificar que el texto se ha copiado al clipboard
		}
	)
})

// ===== E N C R I P T A R   (FUNCIÓN) =====
const encryptText = (text) => {

	const textArr = text.split(" ")
  let encryptedWord = ""
	let encryptedFullText = ""
  const encryptedArr = []

  textArr.forEach((word) => {
    for(let i = 0; i < word.length; i++) {
      word[i] === "a" || word[i] === "á"
        ? encryptedWord += "ai"
        : word[i] === "e" || word[i] === "é"
          ? encryptedWord += "enter"
          : word[i] === "i" || word[i] === "í"
            ? encryptedWord += "imes"
            : word[i] === "o" || word[i] === "ó"
              ? encryptedWord += "ober"
              : word[i] === "u" || word[i] === "ú"
                ? encryptedWord += "ufat"
                : encryptedWord += word[i]
    }
    encryptedArr.push(encryptedWord)
    encryptedWord = ""
  })

  encryptedFullText = encryptedArr.join(" ")
  return encryptedFullText
}

// ===== D E S E N C R I P T A R   (FUNCIÓN) =====
const decryptText = (text) => {

	let decryptedText = text.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")

	return decryptedText
}

const successOutput = (outputText) => {
	// $textareaSuccess.setAttribute("value", outputText)
	$textareaSuccess.value = outputText
	$textareaSuccess.innerHTML = outputText
	$emptyContainer.classList.remove("is-visible")
	$successContainer.classList.add("is-visible")
}

const emptyOutput = () => {
	$successContainer.classList.remove("is-visible")
	$emptyContainer.classList.add("is-visible")
}
