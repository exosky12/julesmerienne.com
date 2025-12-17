import { Seo } from '~/components/SEO/Seo'
import { GridLayers } from '~/components/Grid/grid'
import { useLanguage } from '~/context/LanguageContext'

export default function Legal() {
  const { language } = useLanguage()

  return (
    <>
      <Seo
        title={language === 'en' ? 'Legal Notice' : 'Mentions Légales'}
        description={
          language === 'en'
            ? 'Legal notice and privacy policy.'
            : 'Mentions légales et politique de confidentialité.'
        }
        url="https://julesmerienne.dev/mentions-legales"
      />

      <div className="fixed top-0 left-0 w-full h-screen -z-50 overflow-hidden">
        <GridLayers showFog={true} variant={5} />
      </div>

      <div className="flex flex-col gap-12 max-w-3xl mx-auto pb-24 animate-in fade-in duration-700 slide-in-from-bottom-4">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight mb-8">
            {language === 'en' ? 'Legal Notice' : 'Mentions Légales'}
          </h1>

          <div className="prose prose-lg max-w-none text-black/80 font-sans leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-mono text-black mb-4">1. Éditeur du site</h2>
              <p>
                Le site <strong>julesmerienne.dev</strong> est édité par{' '}
                <strong>Jules Merienne</strong>.<br />
                <strong>Email :</strong> julesmerienne06@gmail.com <br />
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-mono text-black mb-4">2. Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                <strong>Koyeb</strong>
                <br />
                USA
                <br />
                <br />
                Les images sont hébergées par :<br />
                <strong>Vercel (Vercel Blob)</strong>
                <br />
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133 Walnut, CA 91789, USA
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-mono text-black mb-4">
                3. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le
                droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont
                réservés, y compris pour les documents téléchargeables et les représentations
                iconographiques et photographiques. La reproduction de tout ou partie de ce site sur
                un support électronique quel qu'il soit est formellement interdite sauf autorisation
                expresse du directeur de la publication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-mono text-black mb-4">
                4. Données personnelles
              </h2>
              <p>
                Ce site utilise <strong>PostHog</strong> pour l'analyse d'audience de manière
                anonyme. Aucune donnée personnelle nominative n'est collectée à votre insu.
              </p>
              <p>
                Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un
                droit d'accès, de modification et de suppression des données vous concernant. Pour
                exercer ce droit, envoyez un email à l'adresse indiquée plus haut.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
