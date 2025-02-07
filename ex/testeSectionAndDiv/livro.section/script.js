function toggleContent(sectionId){ //Função para alternar a visibilidade do conteúdo: Mostrar/Esconder
    var content = document.getElementById(sectionId); //Encontrar o elemnet que contém o conteúdo da seção
    
    if (content.style.display === "none") {  //verificar se o conteúdo está atualmente visível ou não
        content.style.display = "block";//Mostrar o conteúdo
    } else {
        content.style.display = "none"; //Esconder o conteúdo

    }
}