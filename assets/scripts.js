// Scripts para el manejo de las encriptaciones y desencriptaciones de los mensajes
const d = document

const $btnEncrypt = d.getElementById("btn-encrypt")
const $btnDecrypt = d.getElementById("btn-decrypt")
const $btnCopy = d.getElementById("btn-copy")

$btnEncrypt.addEventListener("click", e => {
	e.preventDefault()

	const $textarea = d.getElementById("textarea")
	let userMsg = $textarea.value.toLowerCase()
	const $emptyContainer = d.getElementById("empty")
	const $successContainer = d.getElementById("success")
	const $successOutput = d.getElementById("success-output")

	if(userMsg !== "") {
		let encryptedMsg = encryptMessage(userMsg)
		$successOutput.innerHTML = encryptedMsg
		$emptyContainer.classList.remove("is-visible")
		$successContainer.classList.add("is-visible")
	} else {
		$successContainer.classList.remove("is-visible")
		$emptyContainer.classList.add("is-visible")
	}
})

$btnDecrypt.addEventListener("click", e => {
	e.preventDefault()

	const $textarea = d.getElementById("textarea")
	let userMsg = $textarea.value.toLowerCase()
	const $emptyContainer = d.getElementById("empty")
	const $successContainer = d.getElementById("success")
	const $successOutput = d.getElementById("success-output")

	if(userMsg !== "") {
		let decryptedMsg = decryptMessage(userMsg)
		$successOutput.innerHTML = decryptedMsg
		$emptyContainer.classList.remove("is-visible")
		$successContainer.classList.add("is-visible")
	} else {
		$successContainer.classList.remove("is-visible")
		$emptyContainer.classList.add("is-visible")
	}
})

const encryptMessage = (message) => {
	const arrayMessage = message.toLowerCase().trim().split(" ")
  let encrypt = ""
  const encryptedArr = []

  arrayMessage.forEach((word) => {
    for(let i = 0; i < word.length; i++) {
      word[i] === "a"
        ? encrypt += "ai"
        : word[i] === "e"
          ? encrypt += "enter"
          : word[i] === "i"
            ? encrypt += "imes"
            : word[i] === "o"
              ? encrypt += "ober"
              : word[i] === "u"
                ? encrypt += "ufat"
                : encrypt += word[i]
    }
    encryptedArr.push(encrypt)
    encrypt = ""
  })

  let encryptedMessage = encryptedArr.join(" ")

  return encryptedMessage
}

const decryptMessage = (message) => {

	let decryptedMsg = message.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")

	return decryptedMsg
}
