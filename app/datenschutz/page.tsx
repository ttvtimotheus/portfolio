import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO',
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold mb-3">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              </p>

              <p className="mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Vercel</h3>
              <p className="mb-4">
                Diese Website wird auf Servern von Vercel Inc. gehostet. Anbieter ist die Vercel Inc., 
                340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend "Vercel").
              </p>
              
              <p className="mb-4">
                Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer 
                IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Vercel: 
                <a href="https://vercel.com/legal/privacy-policy" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-4">
                <p className="mb-2"><strong>Verantwortliche Stelle für die Datenverarbeitung:</strong></p>
                <p className="mb-2">Timo Haseloff</p>
                <p className="mb-2">Musterstraße 123</p>
                <p className="mb-2">12345 Musterstadt</p>
                <p className="mb-2">E-Mail: timo@haseloff.dev</p>
              </div>

              <h3 className="text-xl font-semibold mb-3">Speicherdauer</h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold mb-3">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) 
                sofern diese abgefragt wurde.
              </p>

              <h3 className="text-xl font-semibold mb-3">E-Mail-Versand</h3>
              <p className="mb-4">
                Für den Versand von E-Mails nutzen wir den Dienstleister Resend. Anbieter ist Resend, Inc., 
                2261 Market Street #4008, San Francisco, CA 94114, USA.
              </p>
              
              <p className="mb-4">
                Resend verarbeitet Ihre Daten nur zur Übermittlung der E-Mails und zur Aufrechterhaltung 
                der Systemsicherheit. Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
              
              <p className="mb-4">Sie haben folgende Rechte:</p>
              
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Recht auf Auskunft:</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                <li><strong>Recht auf Berichtigung:</strong> Sie haben ein Recht auf Berichtigung unrichtiger oder unvollständiger Daten.</li>
                <li><strong>Recht auf Löschung:</strong> Sie können die Löschung Ihrer personenbezogenen Daten verlangen.</li>
                <li><strong>Recht auf Einschränkung:</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
                <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Ihre Daten in einem strukturierten Format zu erhalten.</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
              </ul>

              <p className="mb-4">
                <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde:</strong><br />
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in 
                Ihrer Browserzeile.
              </p>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Stand der Datenschutzerklärung:</strong> Januar 2025<br />
                Diese Datenschutzerklärung wurde mit dem Datenschutz-Generator der Kanzlei Kluger Strötz erstellt.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
