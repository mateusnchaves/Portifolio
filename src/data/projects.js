import { todo } from '../lib/todo.js';

/**
 * Projetos da seção "Selected Work", na ordem em que aparecem.
 *
 * Campos com todo('...') aparecem no site com a etiqueta "Pendente".
 * Substitua cada um pelo valor real, por exemplo:
 *   category: 'Aplicação web',
 *   stack: ['HTML', 'CSS', 'JavaScript'],
 *   links: { repo: 'https://github.com/mateusnchaves/nome-do-repo', demo: null },
 *
 * Opcionais — use null para esconder:
 *   result      resultado ou aprendizado, quando existir
 *   team        ['Nome', 'Nome'] em projetos feitos em grupo
 *   links.demo  link da versão publicada
 *   image       { src: 'assets/projects/<id>.webp', alt: 'O que a tela mostra' }
 *               (1600 × 1000 px; veja assets/projects/README.md)
 */
export const projects = [
{
    id: 'smartvagas',
    title: 'Smart Vagas',
    featured: false,
    category: 'Aplicação web · Projeto pessoal',
    year: '2026',
    summary:
      'Sistema de gestão para estacionamentos pequenos: entrada e saída pela placa, mapa de vagas em tempo real, mensalistas, caixa por turno e lucro do mês. Inclui um portal onde o motorista reserva vaga com antecedência.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Better Auth', 'Tailwind CSS', 'Zod', 'Vitest'],
    team: ['Mateus Chaves', 'Vinicius Giroto', 'Thalysson Sergio', 'Vinicius Paes', 'Thiago Almeron', 'Vitor Tomirotte'],
    problem:
      'O dono de um estacionamento de centro costuma controlar tudo em papel, caderno ou WhatsApp. Ele não sabe quem está dentro, perde vaga para mensalista inadimplente, o operador demora no horário de pico e o lucro real, descontando salários e contas, nunca fica claro.',
    solution:
      'O operador digita a placa em um único campo e o sistema decide sozinho se é entrada (com vaga sugerida) ou saída (com valor calculado no servidor). O dono acompanha o mapa de vagas, os mensalistas com planos por dia e horário, o caixa por turno com contagem às cegas e o financeiro com receita, custos, folha com encargos e lucro do mês, exportável em CSV. O dono escolhe quais vagas libera para reserva: o motorista reserva pelo portal, recebe um código e paga antecipadamente. Travas no banco e lock por vaga impedem reserva dupla, e toda operação com dinheiro fica registrada em auditoria.',
    result:
      'Aplicação funcional com três perfis (dono, operador e motorista) e permissões checadas no servidor, além de 119 testes automatizados nas regras de preço, mensalidade, reserva e caixa. Em um teste com 8 reservas simultâneas para 5 vagas, não houve nenhuma reserva duplicada. O pagamento da reserva ainda é confirmado manualmente no guichê; a integração com um gateway Pix fica para a próxima versão.',
    links: {
      repo: 'https://github.com/mateusnchaves/SmartVagas',
      demo: 'https://github.com/mateusnchaves/SmartVagas',
    },
    image: {
      src: './assets/projects/smartvagas_login_1600x1000.png',
      alt: 'Tela do pátio do Smart Vagas, com o campo de placa no estilo Mercosul e o mapa de vagas em que as livres aparecem em verde claro, as ocupadas em cinza-escuro com a placa e as reservadas em âmbar.',
    },
  },
  {
    id: 'ecoway',
    title: 'EcoWay',
    featured: false,
    category: 'Aplicação web · Projeto acadêmico',
    year: '2026',
    summary:
      'Plataforma para planejar viagens de carro elétrico no Brasil: calcula a autonomia, sugere estações de recarga compatíveis e monta o plano completo da rota. Projeto em equipe da Facens, na disciplina UPX III.',
    stack: ['Flask', 'SQLite', 'JavaScript', 'Vite', 'Leaflet', 'OpenRouteService', 'Open Charge Map'],
    team: ['Mateus Chaves', 'Vinicius Giroto', 'Thalysson Sergio', 'Vinicius Paes', 'Rafael Vidal'],
    problem:
      'Quem viaja de carro elétrico precisa saber, antes de sair, se a bateria chega ao destino e onde recarregar no caminho. Fazer essa conta à mão, cruzando autonomia do veículo, distância e estações compatíveis, é trabalhoso e arriscado.',
    solution:
      'O usuário cadastra o veículo e informa origem, destino e nível de bateria. O EcoWay calcula a rota com margem de segurança configurável e recomenda nenhuma, uma ou várias paradas de recarga. O backend em Flask busca estações ao longo do corredor da rota, integrando OpenRouteService, Open Charge Map, ViaCEP e Nominatim; o frontend mostra o trajeto no mapa com Leaflet e guarda o histórico de rotas de cada usuário.',
    result:
      'Aplicação funcional com cadastro e login, veículos por usuário, planejamento com múltiplas recargas e histórico de rotas. O backend tem 57 testes automatizados e fallbacks para falhas dos provedores externos. A qualidade do plano ainda depende da cobertura de estações do Open Charge Map.',
    links: {
      repo: todo('Link do repositório no GitHub'),
      demo: todo('Link da versão publicada'),
    },
    image: {
      src: './assets/projects/ecoway.webp',
      alt: 'Página inicial do EcoWay, com o título "Planeje rotas elétricas com segurança e eficiência" e o resumo de uma rota de São Paulo a Curitiba com duas paradas de recarga.',
    },
  },
  {
    id: 'gestaofinanceira',
    title: 'Gestão Financeira Pessoal',
    featured: false,
    category: todo('Categoria'),
    year: todo('Ano'),
    summary: todo('O que o projeto faz, em uma ou duas frases.'),
    stack: todo('Tecnologias utilizadas'),
    problem: todo('Qual problema o projeto resolve?'),
    solution: todo('Como o projeto resolve esse problema?'),
    result: null,
    links: {
      repo: todo('Link do repositório no GitHub'),
      demo: null,
    },
    image: null,
  },
];