document.addEventListener("DOMContentLoaded", () => {
  const data = {
    "Redefinir senha sistemas": `
    Prezado(a), 
      
      Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                   
      Atenciosamente,
      Equipe de Suporte de TI.
      `,

    "Credencial de Acesso Sistemas Genéricos": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.
      .
      `,

    "Privilégio de acesso": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.
      `,

    "Redefinir senha Sistema X": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.
      `,

    "Redefinir Authenticação Multifator": `
      Prezado(a), 
      
      Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                   
      Atenciosamente,
      Equipe de Suporte de TI. 
      `,

    "Incluir usuário na lista de e-mail": `
      Prezado(a), 
      
      Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                   
      Atenciosamente,
      Equipe de Suporte de TI.   
      `,

    "Remover usuário na lista de e-mail": `
      Prezado(a), 
      
      Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                   
      Atenciosamente,
      Equipe de Suporte de TI.   
      `,

    "Credencial de Acesso - Sistema Y": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.
                      
      `,

    "Liberação de acesso XYZ<": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.
                      
      `,

    "Credencial de Acesso - ABC": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI. 
      `,

    "Credencial de Acesso - QJK": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.
      `,

    "Voucher Wifi": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.     
      `,

    "PIN Impressora": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.  
      `,

    "Rede Mobile": `
    Prezado(a), 
      
    Esta mensagem contém informações sensíveis que serão inseridas dinamicamente por questões de segurança.
                 
    Atenciosamente,
    Equipe de Suporte de TI.
      `,
  };

  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.previousElementSibling.textContent.trim();
      const textToCopy = data[title];

      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchTitle();
    }
  });
});

function searchTitle() {
  const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  const titles = document.querySelectorAll(".title");

  titles.forEach((title) => {
    const titleText = title.textContent.trim().toLowerCase();
    const parentItem = title.parentElement.parentElement;

    if (titleText.includes(searchTerm)) {
      parentItem.style.display = "block";
    } else {
      parentItem.style.display = "none";
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleMode');
  const body = document.body;
  const inputs = document.querySelectorAll('input');
  const modeIcon = document.getElementById('modeIcon');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    inputs.forEach(input => {
      input.classList.add(savedTheme);
    });
    if (savedTheme === 'dark-mode') {
      modeIcon.classList.remove('fa-sun');
      modeIcon.classList.add('fa-moon');
    } else {
      modeIcon.classList.remove('fa-moon');
      modeIcon.classList.add('fa-sun');
    }
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    inputs.forEach(input => {
      input.classList.toggle('dark-mode');
    });


    if (body.classList.contains('dark-mode')) {
      modeIcon.classList.remove('fa-sun');
      modeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      modeIcon.classList.remove('fa-moon');
      modeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light-mode');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const spanGeneratePassword = document.querySelector('#generatePassword');

  spanGeneratePassword.addEventListener('click', () => {

    const password = generatePassword();

    navigator.clipboard.writeText(password)
  });

  function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghjkmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "@";

    let password = "";

    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));

    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));

    password += numbers.charAt(Math.floor(Math.random() * numbers.length));

    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    for (let i = 0; i < 4; i++) {
      const chars = uppercaseChars + lowercaseChars + numbers + specialChars;
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
  }
});


(function ($) {

  function generateStar(canvas, ctx, starRadius) {
    ctx.beginPath();
    ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius * Math.random(), 0, Math.PI * 2, false);
    //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);

    var rand = Math.random();
    if (rand <= 0.5) {
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
      ctx.shadowBlur = 3;
    }
    else if (rand > 0.75) {
      ctx.fillStyle = "rgba(255, 254, 196, 1)";
      ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
      ctx.shadowBlur = 4;
    }
    else {
      ctx.fillStyle = "rgba(192, 247, 255, 1)";
      ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
      ctx.shadowBlur = 7;
    }
    ctx.fill();
  }

  $(function () {

    var canvas = document.getElementById("space");
    var context = canvas.getContext("2d");

    onresize = function () {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    onresize();

    interval = setInterval(
      function (interval) {
        generateStar(canvas, context, 3);
      }
      , 24);

    setTimeout( // Stop sreating stars after 10s
      function () { clearInterval(interval); }
      , 10000
    );

  });
})(jQuery);