function pesquisacep(valor){
    //Variavel Cep para confirmar se os dados estão corretos.
    var cep = valor.replace(/\D/g,'');
    //Verifica se o campo CEP foi informado.
    if(cep != ""){
        //Função para validar o cep, necessariamente o cep precisa ter 8 números
        //e um caractere especial
        var validacep = /[0-9]{8}$/;

        if(validaecep.test(cep)){
            document.getElementById("cep").value= "...";
            document.getElementById("rua").value= "...";
            document.getElementById("bairro").value= "...";
            document.getElementById("cidade").value= "...";
            document.getElementById("uf").value= "...";

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep +'/json/?callback=meu_callback';
            document.body.appendChild(script) 
        }
        else{
            limpa_formulario_cep();
            alert("Insere um CEp válido filha da puta burro!<3")
           
        }
        function limpa_formulario_cep(){
            document.getElementById("cep").value= "";
            document.getElementById("rua").value= "";
            document.getElementById("bairro").value= "";
            document.getElementById("cidade").value= "";
            document.getElementById("uf").value= "";
        }
        function meu_callback(conteúdo){
            if(!("erro" in conteúdo)){
                document.getElementById('rua').value= (conteúdo.logradouro);
                document.getElementById('bairro').value= (conteúdo.bairro);
                document.getElementById('cidade').value= (conteúdo.cidade);
                document.getElementById('uf').value= (conteúdo.uf);
            }
            
        }
    }
}