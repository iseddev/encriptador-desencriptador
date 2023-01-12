// Scripts para el manejo de las encriptaciones y desencriptaciones de los mensajes
const d = document

// "Capturar" elementos del área de ingreso del mensaje y botones para encriptar y desencriptar
const $textArea = d.getElementById("textarea")
const $btnEncrypt = d.getElementById("btn-encrypt")
const $btnDecrypt = d.getElementById("btn-decrypt")

// "Capturar" elementos del area del mensaje encriptado y el botón de copiar mensaje encriptado
const $emptyContainer = d.getElementById("empty")
const $successContainer = d.getElementById("success")
const $successOutput = d.getElementById("success-output")
const $btnCopy = d.getElementById("btn-copy")

// Detectar evento "click" en el boton "Encriptar" y proceder a la encriptación del mensaje ingresado
$btnEncrypt.addEventListener("click", e => {
	e.preventDefault()

	// Convertir mensaje ingresado a minusculas y eliminar todos los posibles espacios al principio y final del texto
	let textAreaContent = $textArea.value.toLowerCase().trim()

	// Validar si el mensaje ingresado está "vacío"
	if(textAreaContent !== "") {
		let encryptedMsg = encryptMessage(textAreaContent)
		$emptyContainer.classList.remove("is-visible")
		$successContainer.classList.add("is-visible")
		$successOutput.innerHTML = encryptedMsg
	} else {
		$successContainer.classList.remove("is-visible")
		$emptyContainer.classList.add("is-visible")
	}
})

// Detectar evento "click" en el boton "Desencriptar" y proceder a la desencriptación del mensaje ingresado
$btnDecrypt.addEventListener("click", e => {
	e.preventDefault()
	// Convertir mensaje ingresado a minusculas y eliminar todos los posibles espacios al principio y final del texto
	let textAreaContent = $textArea.value.toLowerCase().trim()

	if(textAreaContent !== "") {
		let decryptedMsg = decryptMessage(textAreaContent)
		$emptyContainer.classList.remove("is-visible")
		$successContainer.classList.add("is-visible")
		$successOutput.innerHTML = decryptedMsg
	} else {
		$successContainer.classList.remove("is-visible")
		$emptyContainer.classList.add("is-visible")
	}
})

// Detectar evento "click" en el boton "Copiar" y proceder a copiar el mensaje encriptado
$btnCopy.addEventListener("click", e => {

	let text = $successOutput.innerHTML
	console.log(`Contenido de 'text': ${text}`) // Línea para validar que 'text' tiene contenido, eliminar posteriormente
	navigator.clipboard.writeText(text)

})

// Función para la encriptación del mensaje ingresado
const encryptMessage = (message) => {

	const messageArr = message.split(" ")
  let encrypt = ""
  const encryptedArr = []

  messageArr.forEach((word) => {
    for(let i = 0; i < word.length; i++) {
      word[i] === "a" || word[i] === "á"
        ? encrypt += "ai"
        : word[i] === "e" || word[i] === "é"
          ? encrypt += "enter"
          : word[i] === "i" || word[i] === "í"
            ? encrypt += "imes"
            : word[i] === "o" || word[i] === "ó"
              ? encrypt += "ober"
              : word[i] === "u" || word[i] === "ú"
                ? encrypt += "ufat"
                : encrypt += word[i]
    }
    encryptedArr.push(encrypt)
    encrypt = ""
  })

  let encryptedMessage = encryptedArr.join(" ")

  return encryptedMessage
}

// Función para la encriptación del mensaje ingresado
const decryptMessage = (message) => {

	let decryptedMsg = message.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")

	return decryptedMsg
}
