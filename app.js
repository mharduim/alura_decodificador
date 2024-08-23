let sidebarConteudo = document.querySelector('#sidebarConteudo');

// Adiciona o event listener para o novo botão de copiar
document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = document.querySelector('#sidebarConteudo').textContent;

    // Cria um elemento de input temporário para copiar o texto
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Seleciona o texto do input e o copia
    tempInput.select();
    document.execCommand('copy');

    // Remove o elemento temporário do DOM
    document.body.removeChild(tempInput);

    // Opcional: Adiciona um feedback ao usuário
    alert('Texto copiado para a área de transferência!');
});

function criptografar() {

    let texto = document.querySelector('input').value.toLowerCase()

    textoCrip = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat")

    document.getElementById('sidebarConteudo').innerHTML= textoCrip
    document.getElementById('copyButton').style.display = 'block';
   
    }

function descriptografar() {
    
    let texto = document.querySelector('input').value.toLowerCase()

    textoCrip = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u")

    document.getElementById('sidebarConteudo').innerHTML= textoCrip
    document.getElementById('copyButton').style.display = 'block';
}

