const masks = {
  cpf(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  },

  phone(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  },
};

document.querySelectorAll("input").forEach(($input) => {
  const field = $input.dataset.js;

  $input.addEventListener(
    "input",
    (e) => {
      e.target.value = masks[field](e.target.value);
    },
    false
  );
});

const form = document.getElementById('form')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const cpf = document.getElementById('cpf')

const button = document.getElementById('button')

button.addEventListener('click', event => {
    event.preventDefault()

    if (email.value == '') {
        email.classList.add('errorInput')
    } else {
        email.classList.remove('errorInput')
    }

    if (telefone.value == '') {
        telefone.classList.add('errorInput')
    } else {
        telefone.classList.remove('errorInput')
    }

    if (cpf.value == '') {
        cpf.classList.add('errorInput')
    } else {
        cpf.classList.remove('errorInput')
    }

    // Validar o e-mail
    if (
        email.value.indexOf('@') == -1 ||
        email.value.indexOf('.') == -1 ||
        email.value.indexOf('.') - email.value.indexOf('@') == 1
    ) {
        email.classList.add('errorInput')
    } else {
        email.classList.remove('errorInput')
    }

    // Validar o cpf
    if (cpf.value.length <= 13) {
        cpf.classList.add('errorInput')
    } else {
        cpf.classList.remove('errorInput')
    }

    // Validar o telefone
    if (telefone.value.length <= 13) {
        telefone.classList.add('errorInput')
    } else {
        telefone.classList.remove('errorInput')
    }
})