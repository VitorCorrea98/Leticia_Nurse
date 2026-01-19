// src/pages/pilares/ExamesPreNatais.tsx
import type React from "react";
// Importe a imagem da caderneta/papelaria aqui
// Caso não tenha recortada, pode usar a imagem inteira cropped ou um placeholder
import Img_Caderneta from "../../assets/Home/Acompanhamento_de_Exames.jpeg";

const ExamesPreNatais: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* SEÇÃO SUPERIOR: Fundo Rosa Claro */}
      <div className="bg-[#F3BCC8] py-24 px-6 md:px-12 flex justify-center flex-grow">
        <div className="max-w-4xl w-full">

          <h1 className="font-dm_serif text-5xl md:text-7xl leading-tight mb-12 text-[#D67C8C] opacity-90">
            <span className="text-[#BF6376] font-bold">Acompanhamento dos</span> <br />
            <span className="text-white">exames pré natais</span>
          </h1>

          <div className="font-open_sans text-lg md:text-xl leading-relaxed text-justify space-y-6 text-[#9C5263]">
            <p>
              O pré-natal não é apenas uma sequência de consultas, é um <span className="font-bold">acompanhamento contínuo da saúde da gestante e do bebê</span>. Cada consulta serve para atualizar o
              risco obstétrico, prevenir complicações e assegurar que a gestação evolua de forma
              saudável, dentro do possível. Uma gestante considerada de risco habitual pode
              deixar de sê-lo se algum exame apresentar alterações, por isso, todos os exames são
              fundamentais para atualização do risco e das condutas obstétricas.
            </p>
            <p>
              Como enfermeira obstétrica, acompanho de forma próxima os resultados dos
              exames pré-natais de todas as minhas gestantes. Meu papel não é realizar o pré-natal, mas sim atuar paralelamente, <span className="font-bold">garantindo que cada resultado seja avaliado</span> de acordo com os protocolos do Ministério da Saúde e com o quadro clínico de cada
              mulher. Meu papel é acompanhar de perto a evolução da gestação, trazendo
              debates críticos, análises, solicitação de novos exames, se necessário for.
            </p>
            <p>
              Observar os exames permite identificar precocemente qualquer alteração, orientar
              sobre a necessidade de repetir exames ou solicitar outros, e apoiar a gestante no
              diálogo com o profissional que realiza o pré-natal. Esse acompanhamento
              contínuo ajuda a reduzir riscos, aumentar a segurança e promover um cuidado
              mais personalizado, baseado em evidências e no respeito à saúde da mulher.
            </p>
            <p>
              Um pré-natal bem conduzido, aliado a um acompanhamento atento dos exames, é
              essencial para o trabalho de parto. A assistência pré-hospitalar é técnica, profissional
              e especializada, por isso o acompanhamento do histórico gestacional é
              extremamente importante na tomada de decisão. Além disso, permite que a equipe
              esteja preparada para eventuais intercorrências e reduzindo complicações
              relacionadas a comorbidades. Isso significa mais segurança e tranquilidade para a
              gestante e sua família, do início da gestação até o nascimento do bebê.
            </p>
          </div>
        </div>
      </div>

      {/* SEÇÃO INFERIOR: Bloco Escuro (Caderneta) */}
      <div className="bg-[#5C2E3A] text-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Texto do Bloco Escuro */}
          <div className="w-full md:w-1/2 z-10">
            <p className="font-open_sans text-xl md:text-2xl text-center md:text-left leading-relaxed">
              Para esse acompanhamento, eu desenvolvi uma
              caderneta preenchida online por mim, com todos
              os resultados exames, medicações,
              suplementações, que inclusive podem ser
              solicitados por mim, durante o pré-natal.
            </p>
          </div>

          {/* Imagem da Caderneta */}
          {/* A imagem está rotacionada na referência, usamos rotate-6 para simular */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md transform md:rotate-3 transition-transform hover:rotate-0 duration-500">
              {/* Se não tiver a imagem exata, esse bloco cinza serve de placeholder estrutural */}
              {Img_Caderneta ? (
                <img src={Img_Caderneta} alt="Caderneta de acompanhamento" className="w-full drop-shadow-2xl rounded-lg" />
              ) : (
                <div className="aspect-[4/3] bg-white text-gray-400 flex items-center justify-center rounded-lg shadow-2xl">
                  Imagem da Caderneta
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ExamesPreNatais;