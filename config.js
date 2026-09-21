/* CONFIGURAÇÃO DO SITE - é o único arquivo que você precisa editar */
window.GG_CONFIG = {
  loja: 'Empório Gran Gusto',
  whatsapp: '5548984786837',            // 55 + DDD + número da loja, só números
  enderecoLoja: 'Rod. Armando Calil Bulos, 6640, box 4 – Ingleses, Florianópolis – SC, CEP 88058-001',   // aparece para quem escolhe retirada
  taxaMadeira: 100,                      // taxa se a tábua de madeira não voltar no próximo dia útil
  precoTabua: 50,                        // valor da tábua em si (somado aos itens no orçamento)
  horarioLoja: 'segunda a sábado, das 7h30 às 19h',      // aparece para quem escolhe retirada
  horarioEntrega: 'segunda a sexta, das 9h às 17h30',    // aparece para quem escolhe entrega
  // Taxas de entrega por bairro (saída dos Ingleses). Mais de um valor = varia com o endereço, ex.: '12/14'.
  // Para mudar um valor, troque o número. Para tirar um bairro, apague a linha. Para incluir, copie uma linha.
  bairros: [
    ['Ingleses', '9'],
    ['Santinho', '12/14'],
    ['Vargem', '12'],
    ['Cachoeira', '12/14'],
    ['Ponta das Canas', '17/20'],
    ['Lagoinha', '22'],
    ['Praia Brava', '22'],
    ['Canasvieiras', '18'],
    ['Jurerê', '28'],
    ['Forte', '30'],
    ['Vargem Grande', '12/14/16'],
    ['Vargem Pequena', '17/20'],
    ['Ratones', '25/30'],
    ['Rio Vermelho', '12/14/16'],
    ['Barra da Lagoa', '38']
  ],
  apiUrl: 'https://script.google.com/macros/s/AKfycbwqcwa6lyQf5g_waPp34UlVb7jjjyGOHWfLQ47lUdU3KJK5Gu7AciVwodrRQ0h4P6V-ow/exec',                            // cole aqui o endereço /exec do Google Apps Script
  exemplo: false                          // troque para false quando o catálogo real estiver na planilha
};
