import { PostCard } from '@/components/Post-Card'
import { ShareButton } from '@/components/ShareButton'
import postsMock from '@/mocks/posts'

interface PostProps {
  params: { slug: string }
}

export default function Post({ params }: PostProps) {
  return (
    <>
      <header className="px-5 md:px-0">
        <div className="text-center container mx-auto my-10 md:my-20">
          <h1 className=" font-bold text-2xl md:text-4xl">
            10 erros comuns de maquiagem e como evitá-los
          </h1>
          <p className="mt-2 font-light text-sm md:text-base">
            Por: <b className="font-medium">Jeniffer Simões</b> - 02/05/2023
          </p>
        </div>

        <h2 className="text-center font-bold md:text-xl">
          Conheça os 10 erros mais comuns de maquiagem e aprenda a evitá-los
          para um resultado perfeito.
        </h2>
      </header>

      <section className="container mx-auto flex flex-col px-5 md:px-10 mb-10">
        <div className="flex items-center justify-center overflow-hidden w-full h-96 px-2 mb-5 md:mb-24 mt-14 rounded-md">
          <img
            src="/posts/erros comuns de maquiagem.avif"
            alt="O poder das cores na maquiagem: como escolher a tonalidade certa para
          cada ocasião"
            className="w-full "
          />
        </div>
        <article className="space-y-10 text-lg">
          <p>
            Se você é apaixonado por maquiagem, é importante saber como evitar
            os erros comuns que podem acabar estragando todo o seu visual. Aqui
            estão os 10 erros mais comuns de maquiagem e como evitá-los:
          </p>

          <ol className="list-decimal list-inside mx-5 space-y-3">
            <li>
              <strong>Escolher a cor de base errada:</strong> Ao escolher a cor
              de base errada, você corre o risco de parecer artificial.
              Certifique-se de escolher uma base que corresponda à cor da sua
              pele e misture bem para evitar linhas duras no rosto.
            </li>
            <li>
              <strong>Usar sobrancelhas muito escuras:</strong> Sobrancelhas
              muito escuras podem parecer artificiais e não combinarem com o tom
              do seu cabelo e tom de pele. Use um lápis ou sombra de sobrancelha
              na cor correta para obter um look mais natural.
            </li>
            <li>
              <strong>Não preparar a pele:</strong> Sempre limpe e hidrate a
              pele antes de aplicar a maquiagem. Isso ajuda a manter a pele
              saudável e a maquiagem a durar mais tempo.
            </li>
            <li>
              <strong>Não usar primer:</strong> O primer ajuda a preparar a pele
              para a maquiagem, reduzir a aparência de poros e fazer com que a
              maquiagem dure mais tempo. Não se esqueça de aplicá-lo antes de
              começar a maquiagem.
            </li>
            <li>
              <strong>Usar muito corretivo:</strong> Usar muito corretivo pode
              parecer artificial e acentuar as linhas finas ao redor dos olhos.
              Aplique apenas uma pequena quantidade de corretivo e misture bem
              para um look mais natural.
            </li>
            <li>
              <strong>Não misturar bem as cores:</strong> É importante misturar
              bem as cores para obter um look natural. Certifique-se de que as
              cores de sombra, blush e batom combinem bem entre si e com o seu
              tom de pele.
            </li>
            <li>
              <strong>Não usar a cor de blush certa:</strong> A cor do blush
              pode afetar a aparência de todo o seu visual. Certifique-se de
              escolher uma cor que corresponda à sua tonalidade natural de pele.
            </li>
            <li>
              <strong>Usar delineador muito grosso:</strong> Um delineador muito
              grosso pode fazer com que seus olhos pareçam menores e mais
              pesados. Aplique o delineador de maneira suave e precisa para
              obter um look mais natural.
            </li>
            <li>
              <strong>Usar muito pó:</strong> Usar muito pó pode fazer com que a
              maquiagem pareça muito pesada e artificial. Aplique apenas uma
              pequena quantidade de pó para definir a maquiagem e reduzir o
              brilho.
            </li>
            <li>
              <strong>Não retirar a maquiagem antes de dormir:</strong> Dormir
              com maquiagem pode entupir os poros e causar problemas na pele,
              como acne e irritação. Certifique-se de remover toda a maquiagem
              antes de ir para a cama.
            </li>
          </ol>
          <p>
            Ao evitar esses erros comuns de maquiagem, você pode obter um visual
            natural e bonito. Lembre-se de que a maquiagem deve realçar sua
            beleza natural, não mascará-la.
          </p>
        </article>

        <div className="flex flex-col gap-3 mt-5">
          <p className="font-bold text-xl">Compartilhe:</p>
          <div className="flex gap-5 items-center flex-wrap">
            <ShareButton type="whatsapp" url="" />
            <ShareButton type="facebook" url="" />
            <ShareButton type="twitter" url="" />
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-10 px-5 md:px-0">
        <h4 className="font-bold text-2xl">Ultimos Posts</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:place-items-stretch">
          {postsMock.slice(0, 6).map((item) => (
            <PostCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}
