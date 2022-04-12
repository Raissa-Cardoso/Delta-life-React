export default [
    {
        id: 1, titulo: "DL1000", subtitulo: "Monitor Multiparamétrico Touch screen", isVet: true, foco:"",
        descricao:
            "É um equipamento fundamental para clínicas e hospitais veterinários. Ele detecta sinais vitais do paciente e exibe os resultados simultaneamente para a efetividade do acompanhamento cirúrgico. Como possui alarmes configuráveis, o DL1000 oferece suporte necessário para que seu paciente esteja seguramente monitorado.",
        caracteristicas: 
        [
            {idCaracteristica:1, caracteristica: "Alto desempenho em baixa perfusão"},
            {idCaracteristica:2,caracteristica:"Cabo paciente de 5 vias"},
            {idCaracteristica:3,caracteristica:"Cabo sensor de temperatura retal, com 3 m de comprimento cada"},
            {idCaracteristica:4, caracteristica:"Conexão USB"},
            {idCaracteristica:5, caracteristica:"5 manguitos com tamanhos diferentes"},
            {idCaracteristica:6, caracteristica:"Software para gravação de exames de ECG dos pacientes"},
            {idCaracteristica:7, caracteristica:"Sistema de análise por impressão"},
            {idCaracteristica:8, caracteristica:"Fácil instalação"},
            {idCaracteristica:9, caracteristica:"Cursores eletrônicos para medidas"},
            {idCaracteristica:10, caracteristica:"Geração de laudo eletrônico de ECG para envio ao cliente"},
            {idCaracteristica:11, caracteristica:"Detector de respiração"}
        ],
        imagem:"'../assets/vet1.jpeg'"
    },
    { 
        id: 2, titulo: "DL740", subtitulo: "Aparelho de anestesia inalatória com ventilação", isVet: true, foco:"",
        descricao: 
            "Sistema de Anestesia destinado à administração de gases e/ou vapores anestésicos através de respiração espontânea ou controlada, manual ou mecânica. Fabricado, em chapa de aço carbono/alumínio e pintado com tinta a pó eletrostática híbrida e resistente a produtos químicos.", 
        caracteristicas: 
        [
            {idCaracteristica:1, caracteristica: "Ventilação micro processada"},
            {idCaracteristica:2, caracteristica: "Ajuste digital para pressão"},
            {idCaracteristica:3, caracteristica: "Ajuste digital para freqüência respiratória"},
            {idCaracteristica:4, caracteristica: "Ajuste digital de tempo inspiratório"},
            {idCaracteristica:5, caracteristica: "Pressão máxima obtida pela ventilação"},
            {idCaracteristica:6, caracteristica: "Pressão atual pulmonar"},
            {idCaracteristica:7, caracteristica: "Relação inspiração expiração"},
            {idCaracteristica:8, caracteristica: "Possibilita ciclar por pressão e tempo"},
            {idCaracteristica:9, caracteristica: "Vaporizador universal, com ajustes para os diferentes tipos de anestésicos"},
            {idCaracteristica:10, caracteristica: "Equipamento com pedestal, disponível nas opções em maleta e de bancada"}
        ] 
    },
    { 
        id: 3, titulo: "DL4000", subtitulo: "Foco 24 LEDs com pedestal", isVet:"", foco:"cirúrgico",
        descricao: 
            "O Foco cirúrgico Delta Life é mais um equipamento desenvolvido para facilitar consultas e procedimentos simples.", 
        caracteristicas: 
            [
                {idCaracteristica:1, caracteristica: "24 luzes LED na cúpula"},
                {idCaracteristica:2, caracteristica: "Dois tipos de luz: branco frio e amarelo quente"},
                {idCaracteristica:3, caracteristica: "Baixo consumo"},
                {idCaracteristica:4, caracteristica: "Maior luminosidade"},
                {idCaracteristica:5, caracteristica: "Não esquenta o ambiente"},
                {idCaracteristica:6, caracteristica: "Diminui a necessidade do uso do centro cirúrgico em exames e procedimentos simples"}
            ]
    },
    { 
        id: 4, titulo: "Life1000", subtitulo: "Monitor Multiparamétrico", isVet:"false", foco:"",
        descricao: 
            "O LIFE 1000 é destinado à monitorização de pacientes adultos, pediátricos e neonatais em ambiente ambulatórios de emergência ou unidades de tratamento intensivo. Equipamento deve ser operado por profissionais da saúde. Por ser um equipamento portátil, também pode ser utilizado para o transporte de pacientes.", 
        caracteristicas: 
            [
                {idCaracteristica:1, caracteristica: "Tela de LCD touchscreen de 8 polegadas"} ,
                {idCaracteristica:2, caracteristica: "Permite a visualização de 7 derivações do ECG ( DI, DII, DIII, aVF, aVR, aVL e V )"},
                {idCaracteristica:3, caracteristica: "Frequência cardíaca pelo ECG"},
                {idCaracteristica:4, caracteristica: "Saturação deoxigênio (SpO ) com curva pletismográfica"},
                {idCaracteristica:5, caracteristica: "Pulso cardíaco pelo oxímetro"},
                {idCaracteristica:6, caracteristica: "Índice de perfusão"},
                {idCaracteristica:7, caracteristica: "Temperatura (dois sensores)"},
                {idCaracteristica:8, caracteristica: "Pressão arterial não invasiva (PANI)"},
                {idCaracteristica:9, caracteristica: "Frequência respiratória (FR)"},
                {idCaracteristica:10, caracteristica: "Exibe o histórico gráfico dos parâmetros mensurados"},
                {idCaracteristica:11, caracteristica: "Possibilita a programação de aferições da PANI periodicamente"},
                {idCaracteristica:12, caracteristica: "Possibilita o ajuste dos parâmetros dos alarmes conforme cada paciente"}
            ]
    }
]