// src/pages/pilares/EducacaoPerinatal.tsx
import type React from "react";

const EducacaoPerinatal: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#9E0E18] text-white py-24 px-6 md:px-12 flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Título */}
        <div className="mb-12">
          <h1 className="font-dm_serif text-5xl md:text-7xl leading-none text-brand-red-900">
            Educação <br />
            perinatal <br />
            <span className="text-white font-bold">importa</span>?
          </h1>
        </div>

        {/* Corpo do Texto */}
        <div className="font-open_sans text-lg md:text-xl leading-relaxed text-justify space-y-6 opacity-90">
          <p>
            As consultas de educação perinatal são um dos pilares para uma experiência de
            parto positiva e segura, especialmente quando a mulher vai <span className="font-bold">parir no plantão</span>, ou
            seja, assistida por uma equipe que ela não conhece previamente. Quando uma
            mulher chega ao parto sem preparo, ela tende a <span className="font-bold">sentir medo, insegurança e dúvida</span>,
            sensações que podem gerar tensão corporal e emocional, interferindo
            diretamente na progressão do trabalho de parto. Isso ocorre porque o medo e a
            ansiedade aumentam a liberação de adrenalina, um hormônio que inibe a ocitocina,
            substância essencial para as contrações eficazes. Ou seja, a falta de conhecimento
            pode literalmente dificultar o parto.
          </p>

          <p>
            Além de favorecer um parto mais tranquilo e com melhores desfechos, a educação
            perinatal é uma ferramenta poderosa na <span className="font-bold">prevenção da violência obstétrica</span>. Esse
            tipo de violência pode ocorrer em diferentes momentos da assistência, inclusive no
            pré-natal, e se manifesta em atitudes desrespeitosas, intervenções sem necessidade,
            negligência, falta de informação ou comunicação inadequada.
          </p>

          <p>
            Diversos estudos brasileiros mostram que a maioria das mulheres inicia o pré-natal
            desejando o parto normal, mas muitas acabam mudando de opinião ou não
            conseguem realizá-lo. Essa mudança de trajetória está frequentemente associada à
            falta de informação adequada, à influência de profissionais de saúde, ao medo
            da dor e à cultura hospitalar intervencionista. Esses achados reforçam a
            importância da educação perinatal como estratégia essencial para fortalecer a
            autonomia da mulher, garantir decisões informadas e reduzir a distância entre o
            desejo e a realidade do parto no Brasil.
          </p>

          <p>
            Nessa situação, o conhecimento adquirido nas consultas se transforma em
            ferramenta de autonomia e proteção, permitindo que a mulher saiba o que pode
            solicitar, o que pode recusar e como expressar suas vontades com clareza e
            segurança. Nós <span className="font-bold">auxiliamos e apoiamos a construção do Plano de Parto</span>, que será
            construído a cada consulta, de acordo com os temas que abordaremos.
          </p>

          <p>
            As consultas de educação perinatal também envolvem o acompanhante, tornando-o
            um aliado consciente. Ele passa a compreender o que é normal, o que requer
            atenção e como oferecer apoio físico e emocional de maneira efetiva. Assim, mesmo
            diante de uma equipe nova, a mulher e seu acompanhante conseguem manter o
            foco, a tranquilidade e o protagonismo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducacaoPerinatal;