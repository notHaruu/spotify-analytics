import Link from "next/link"

export default function DevelopDocPage() {
    return (
        <div className="p-4 md:p-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl pb-5 mb-10 font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Impressum</h1>

            <h2 className="mb-5 text-3xl lg:text-5xl text-black dark:text-white">Impressum</h2>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Angaben gemäß § 5 DDG</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div>
                    <span>Malek Zaid</span>
                </div>
                <div className="flex flex-col">
                    <span>Asbachstraße 44</span>
                    <span>99423 Weimar</span>
                    <span>Deutschland</span>
                </div>
                <div>
                    <span>E-Mail: <Link href={"mailto:kontakt@example.de"} className="underline">malek.zaid@web.de</Link></span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Verantwortlich für den Inhalt</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div>
                    <span>Malek Zaid</span>
                </div>
                <div className="flex flex-col">
                    <span>Asbachstraße 44</span>
                    <span>99423 Weimar</span>
                    <span>Deutschland</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Markenhinweis zu Spotify</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Diese Website ist ein unabhängiges Hobbyprojekt und steht in keiner Verbindung zu Spotify AB. Spotify ist eine eingetragene Marke von Spotify AB.</span>
                    <span>Die Nutzung der Spotify Web API erfolgt gemäß den geltenden Spotify Developer Terms und Richtlinien. Sämtliche Marken-, Produkt- und Firmennamen von Spotify sind Eigentum der jeweiligen Rechteinhaber.</span>
                </div>
            </div>

            <h2 className="mb-5 text-3xl lg:text-5xl text-black dark:text-white">Datenschutz</h2>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Verantwortlicher</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div>
                    <span>Malek Zaid</span>
                </div>
                <div className="flex flex-col">
                    <span>Asbachstraße 44</span>
                    <span>99423 Weimar</span>
                    <span>Deutschland</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Hosting durch Vercel</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Diese Website wird über <Link href={"https://www.vercel.com"} className="underline">Vercel</Link> gehostet. Beim Aufruf der Website werden technisch erforderliche Informationen verarbeitet, um den Betrieb, die Sicherheit und die Auslieferung der Website zu gewährleisten.</span>
                    <span>Hierzu können insbesondere, aber nicht ausgeschlossen, folgende Daten gehören:</span>
                    <span className="list-disc ml-5">
                        <li>IP-Adresse</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>Browsertyp und Browserversion</li>
                        <li>Betriebssystem</li>
                        <li>Referrer-URL</li>
                        <li>Aufgerufene Seiten und Ressourcen</li>
                    </span>
                    <span>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund des berechtigten Interesses an einem sicheren und stabilen Betrieb der Website.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Anmeldung mit Spotify</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Die Anmeldung auf dieser Website erfolgt über das OAuth-Verfahren von Spotify.</span>
                    <span>Wenn du dich mit deinem Spotify-Konto anmeldest, wirst du zu Spotify weitergeleitet. Nach erfolgreicher Authentifizierung erhält diese Website die von dir freigegebenen Informationen und Berechtigungen.</span>
                    <span>Die Verarbeitung erfolgt zur Bereitstellung der angebotenen Funktionen und auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie gegebenenfalls deiner Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Von Spotify abgerufene Daten</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Abhängig von den von Spotify bereitgestellten Informationen und den erteilten Berechtigungen können folgende Daten verarbeitet werden:</span>
                    <span className="font-bold">Kontoinformationen</span>
                    <span className="list-disc ml-5">
                        <li>Spotify User ID</li>
                        <li>Anzeigename</li>
                        <li>E-Mail-Adresse</li>
                        <li>Profilinformationen</li>
                        <li>Spotify-Kontotyp</li>
                    </span>
                    <span className="font-bold">Musik- und Nutzungsdaten</span>
                    <span className="list-disc ml-5">
                        <li>Top Artists</li>
                        <li>Top Tracks</li>
                        <li>Gespeicherte Titel und Bibliotheksinformationen</li>
                        <li>Zuletzt abgespielte Titel</li>
                        <li>Öffentliche und private Playlists</li>
                        <li>Kollaborative Playlists</li>
                        <li>Aktueller Wiedergabestatus</li>
                        <li>Aktuell wiedergegebene Inhalte</li>
                    </span>
                    <span>Es werden ausschließlich die Daten verarbeitet, die zur Bereitstellung der Funktionen dieser Website erforderlich sind.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Zweck der Verarbeitung</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Die Verarbeitung erfolgt insbesondere zu folgenden Zwecken:</span>
                    <span className="list-disc ml-5">
                        <li>Authentifizierung von Nutzern</li>
                        <li>Bereitstellung personalisierter Spotify-Analysen</li>
                        <li>Darstellung von Hörstatistiken</li>
                        <li>Analyse persönlicher Musikpräferenzen</li>
                        <li>Anzeige von Künstler-, Titel- und Playlist-Auswertungen</li>
                        <li>Sicherstellung der technischen Funktionalität der Website</li>
                    </span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Rechtsgrundlagen der Verarbeitung</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von:</span>
                    <span className="list-disc ml-5">
                        <li>Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung der gewünschten Funktionen nach Anmeldung)</li>
                        <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung des Nutzers, soweit erforderlich)</li>
                        <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Sicherheit, Betrieb und Weiterentwicklung der Website)</li>
                    </span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Speicherung der Daten</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Spotify-Daten werden nur in dem Umfang und für die Dauer gespeichert, die zur Bereitstellung der angebotenen Funktionen erforderlich sind.</span>
                    <span>Soweit keine gesetzliche Aufbewahrungspflicht besteht, werden personenbezogene Daten gelöscht, sobald der Zweck der Verarbeitung entfällt.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Empfänger der Daten</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Im Rahmen der Nutzung dieser Website können personenbezogene Daten an folgende Empfänger übermittelt werden:</span>
                    <span className="list-disc ml-5">
                        <li>Spotify AB zur Authentifizierung und Bereitstellung der Spotify-Daten</li>
                        <li>Vercel Inc. als Hosting-Dienstleister</li>
                    </span>
                    <span>Eine darüber hinausgehende Weitergabe personenbezogener Daten erfolgt nicht, sofern keine gesetzliche Verpflichtung besteht.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Cookies und Sitzungsdaten</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Diese Website kann technisch notwendige Cookies oder Sitzungsdaten verwenden, um die Anmeldung und Nutzung der Website zu ermöglichen.</span>
                    <span>Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Server Logfiles</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Beim Besuch der Website werden automatisch Informationen in Server-Logfiles erfasst. Hierzu können insbesondere gehören:</span>
                    <span className="list-disc ml-5">
                        <li>IP-Adresse</li>
                        <li>Browserinformationen</li>
                        <li>Betriebssystem</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>Aufgerufene Seiten</li>
                        <li>Technische Fehlerprotokolle</li>
                    </span>
                    <span>Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs sowie der Sicherheit der Website.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Rechte der betroffenen Personen</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Sie hast im Rahmen der gesetzlichen Bestimmungen das Recht auf:</span>
                    <span className="list-disc ml-5">
                        <li>Auskunft über gespeicherte personenbezogene Daten</li>
                        <li>Berichtigung unrichtiger Daten</li>
                        <li>Löschung personenbezogener Daten</li>
                        <li>Einschränkung der Verarbeitung</li>
                        <li>Datenübertragbarkeit</li>
                        <li>Widerspruch gegen die Verarbeitung</li>
                    </span>
                    <span>Zur Ausübung deiner Rechte kannst du dich jederzeit an die oben genannte Kontaktadresse wenden.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Widerruf einer Einwilligung</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.</span>
                    <span>Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt hiervon unberührt.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Beschwerderecht bei einer Aufschtsbehörde</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Datensicherheit</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Diese Website verwendet aktuelle technische und organisatorische Sicherheitsmaßnahmen zum Schutz personenbezogener Daten.</span>
                    <span>Die Übertragung von Daten erfolgt verschlüsselt über HTTPS.</span>
                </div>
            </div>

            <h3 className="mb-5 text-2xl lg:text-3xl text-black dark:text-white">Änderung dieser Datenschutzerklärung</h3>
            <div className="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
                <div className="flex flex-col gap-2">
                    <span>Diese Datenschutzerklärung kann angepasst werden, wenn dies aufgrund technischer, rechtlicher oder organisatorischer Änderungen erforderlich wird.</span>
                    <span>Es gilt jeweils die zum Zeitpunkt des Besuchs veröffentlichte Fassung.</span>
                </div>
            </div>

        </div>
    )
}