// src/pages/pilares/AssistenciaHospitalar.tsx
import type React from "react";

const AssistenciaHospitalar: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#B06C7C] text-white pt-24 px-6 md:px-12 flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Título */}
        <h1 className="font-dm_serif text-5xl md:text-7xl leading-tight mb-12">
          Assistência Pré- <br />
          hospitalar & <br />
          Hospitalar
        </h1>

        {/* Texto Principal */}
        <div className="font-open_sans text-lg md:text-xl leading-relaxed text-justify space-y-6 mb-12">
          <p>
            A assistência pré-hospitalar ao parto é o cuidado oferecido desde o início do
            trabalho de parto, antes da gestante ser admitida na maternidade, <span className="font-bold">ainda em casa</span>.
            É um acompanhamento técnico e emocional que permite avaliar a evolução do
            parto, garantir a segurança da mãe e do bebê e oferecer conforto e tranquilidade
            nesse momento tão importante, onde surgem dúvidas como: <span className="italic">"Já está na hora de ir para o hospital?", "Essas contrações são de trabalho de parto?", "O bebê está bem?"</span>.
          </p>
          <p>
            Essa fase (pré-hospitalar) é determinante para o desfecho do parto e contar com
            profissionais qualificadas faz toda a diferença. A enfermeira obstétrica é a
            profissional capacitada para avaliar clinicamente a gestante e o bebê,
            <span className="font-bold"> identificar a fase do trabalho de parto, monitorar sinais vitais, batimentos
              cardíacos fetais e evolução da dilatação</span>, além de orientar sobre o momento
            adequado para seguir ao hospital. Sua atuação é técnica.
          </p>
          <p>
            Já a doula oferece um suporte essencial no campo físico e emocional. Ela atua no
            conforto da gestante com técnicas de respiração, massagens, posições, uso de
            bolas e medidas não farmacológicas de alívio da dor. Além de tudo, a Vic é
            psicóloga, tendo um olhar ainda mais sensível para a mente durante o parto.
            <span className="font-bold"> Doula é presença constante, promovendo acolhimento, segurança emocional
              e suporte à família.</span>
          </p>
          <p>
            Nós estamos juntas em todos os momentos da assistência, desde as consultas
            até a chegada em casa. Levamos as tecnologias não farmacológicas e materiais
            para ambientar e deixar sua casa ainda mais aconchegante. Parto também é
            emocional, você precisa estar confortável.
          </p>
          <p>
            Ter doula e enfermeira não substitui o hospital, mas prepara o caminho para
            uma internação mais segura, consciente e positiva, reduzindo intervenções
            desnecessárias e favorecendo o parto fisiológico. Nós iremos juntas com você na
            transferência para a maternidade e continuamos o acompanhamento na sala
            de parto, até o nascimento do bebê.
          </p>
        </div>

        {/* Card de Benefícios (Fundo mais claro) */}
        <div className="bg-white/20 backdrop-blur-sm rounded-t-3xl px-8 pt-8 md:p-10 shadow-inner border border-white/10">
          <ul className="list-disc pl-5 space-y-3 font-open_sans text-lg md:text-xl text-white marker:text-white">
            <li>Acompanha o início do trabalho de parto com segurança, evitando idas precoces à maternidade.</li>
            <li>Reduz o risco de intervenções desnecessárias, como ocitocina e analgesia farmacológica (OMS, 2018).</li>
            <li>Diminui a taxa de cesarianas desnecessárias em até 25%, segundo dados da Organização Mundial da Saúde.</li>
            <li>Favorece a evolução natural e fisiológica do parto, respeitando o tempo do corpo da mulher.</li>
            <li>Aumenta a sensação de segurança e tranquilidade, por ter uma profissional qualificada ao lado.</li>
            <li>Permite identificar precocemente intercorrências, garantindo encaminhamento oportuno à maternidade.</li>
            <li>Melhora a experiência de parto, promovendo protagonismo, autonomia e bem-estar.</li>
            <li>Reduz o estresse e a ansiedade, especialmente com a presença da doula e do suporte contínuo.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AssistenciaHospitalar;