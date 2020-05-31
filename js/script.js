  $ ("#formulario").validate ({
        rules: {
          nome : {
              required: true,
              minlength: 3
          },
          email : {
              required: true,
              minlength: 8
          },
		 telefone: {
            required: true,
            minlength: 9           
        },

         CPF: {
         	required: true,
         	minlength: 11
         },

         nascimento: {
         	required: true,
         	minlength: 10
         },

         endereco: {
         	required: true

         },

         CEP: {
         	required: true,
         	minlength: 8
         },

         estado: {
         	required: true
         },

         cidade: {
         	required: true
         }

          }
      })

  $("#telefone").mask('(00) 00000-0000');

  $("#CPF").mask('00000000000');

  
