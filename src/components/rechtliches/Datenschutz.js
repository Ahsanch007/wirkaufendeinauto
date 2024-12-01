import React from 'react';

export const Datenschutz = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '20px',
            maxWidth: '800px', // Limit the width for better readability
            margin: '0 auto', // Center the div horizontally
            backgroundColor: '#f9f9f9', // Light background color for contrast
            borderRadius: '8px', // Rounded corners
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' // Subtle shadow for depth
        }}>
            <h1>Datenschutzerklärung</h1>

            <h2>1. Verantwortliche Stelle</h2>
            <p><strong>Bruchsaler Automobile</strong></p>
            <p>Inhaber: Musa Demir</p>
            <p>Kammerforststraße 13</p>
            <p>76646 Bruchsal</p>
            <p>Deutschland</p>

            <h2>Kontakt:</h2>
            <p>Telefon: +49 176 24196168</p>
            <p>E-Mail: <a href="mailto:info@bruchsaler-automobile.de">info@bruchsaler-automobile.de</a></p>

            <h2>2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung</h2>
            <p>Beim Besuch unserer Website erheben wir folgende Daten:</p>
            <ul>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            </ul>
            <p>Diese Daten sind technisch notwendig, um die Website anzuzeigen und ihre Stabilität sowie Sicherheit zu gewährleisten (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).</p>

            <h2>3. Kontaktaufnahme</h2>
            <p>Wenn Sie uns per Telefon, E-Mail oder Kontaktformular kontaktieren, speichern wir die von Ihnen bereitgestellten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse), um Ihre Anfrage zu bearbeiten. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen oder Vertragserfüllung).</p>

            <h2>4. Weitergabe von Daten</h2>
            <p>Ihre personenbezogenen Daten geben wir nur dann weiter, wenn:</p>
            <ul>
                <li>Sie Ihre ausdrückliche Einwilligung erteilt haben (Art. 6 Abs. 1 lit. a DSGVO),</li>
                <li>dies gesetzlich erforderlich ist (Art. 6 Abs. 1 lit. c DSGVO), oder</li>
                <li>dies zur Wahrung unserer berechtigten Interessen notwendig ist (Art. 6 Abs. 1 lit. f DSGVO).</li>
            </ul>

            <h2>5. Ihre Rechte</h2>
            <p>Sie haben das Recht:</p>
            <ul>
                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten Daten zu verlangen,</li>
                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen,</li>
                <li>gemäß Art. 17 DSGVO die Löschung Ihrer Daten zu verlangen,</li>
                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung zu verlangen,</li>
                <li>gemäß Art. 20 DSGVO Ihre bereitgestellten Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen,</li>
                <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>

            <h2>Cookies und ähnliche Technologien</h2>
            <p>Unsere Website verwendet Cookies und ähnliche Technologien, um verschiedene Funktionen bereitzustellen, die Benutzerfreundlichkeit zu verbessern und das Nutzerverhalten zu analysieren. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie richten keinen Schaden an und enthalten in einigen Fällen personenbezogene Daten.</p>

            <p>Darüber hinaus setzen wir Local-Storage-Technologien ein, die Daten lokal in Ihrem Browser-Cache speichern. Diese Daten bleiben auch nach dem Schließen des Browsers erhalten, es sei denn, der Cache wird gelöscht.</p>

            <h2>Widerruf Ihrer Einwilligung:</h2>
            <p>Sie können die Einwilligung zur Nutzung von analytischen und Marketing-Technologien jederzeit mit Wirkung für die Zukunft über die Datenschutzeinstellungen unserer Website widerrufen.</p>
            <h2>Verwaltung von Cookies und Technologien</h2>
            <p>
                Die meisten Browser bieten Ihnen die Möglichkeit, Cookies zu verwalten, zu löschen oder generell zu blockieren.
                Beachten Sie, dass dadurch die Funktionalität unserer Website eingeschränkt sein kann.
            </p>

            <h3>b. Recht auf Auskunft</h3>
            <p>Sie haben das Recht, Auskunft über insbesondere folgende Informationen zu erhalten:</p>
            <ul>
                <li>die zu Ihnen gespeicherten personenbezogenen Daten;</li>
                <li>die Verarbeitungszwecke;</li>
                <li>die Kategorien personenbezogener Daten, die verarbeitet werden;</li>
                <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden;</li>
                <li>die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer;</li>
                <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
                <li>das Bestehen einer automatisierten Entscheidungsfindung;</li>
                <li>ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt wurden.</li>
            </ul>

            <h3>c. Recht auf Berichtigung</h3>
            <p>Sie haben das Recht:</p>
            <ul>
                <li>Berichtigung Sie betreffender unrichtiger personenbezogener Daten und</li>
                <li>Vervollständigung Sie betreffender unvollständiger personenbezogener Daten zu verlangen.</li>
            </ul>

            <h3>d. Recht auf Löschung</h3>
            <p>Sie haben das Recht, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, insbesondere wenn:</p>
            <ul>
                <li>der Zweck, für den personenbezogene Daten erhoben oder auf sonstige Weise verarbeitet wurden, entfällt;</li>
                <li>Sie Ihre Einwilligung, auf die sich die Verarbeitung stützte, widerrufen und es an einer anderweitigen Rechtsgrundlage für die Verarbeitung fehlt;</li>
                <li>Sie Widerspruch gegen die Verarbeitung einlegen und keine vorrangigen berechtigten Gründe für die Verarbeitung vorliegen;</li>
                <li>die personenbezogenen Daten unrechtmäßig verarbeitet wurden.</li>
            </ul>

            <h3>e. Recht auf Einschränkung der Verarbeitung</h3>
            <p>Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen, wenn:</p>
            <ul>
                <li>Sie die Richtigkeit der personenbezogenen Daten bestreiten, nämlich für eine Dauer, die es der WKDA ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;</li>
                <li>die Verarbeitung unrechtmäßig ist und Sie statt der Löschung der personenbezogenen Daten die Einschränkung der Nutzung der personenbezogenen Daten verlangen;</li>
                <li>die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt werden, Sie die personenbezogenen Daten jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen;</li>
                <li>Sie Widerspruch gegen die Verarbeitung erhoben haben und noch nicht feststeht, ob Ihr Widerspruch dazu führt, dass die Datenverarbeitung eingestellt wird.</li>
            </ul>

            <h3>f. Recht auf Datenübertragbarkeit</h3>
            <p>Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Ferner haben Sie das Recht, zu erwirken, dass die personenbezogenen Daten direkt an einen anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.</p>

            <h3>g. Recht auf Widerspruch</h3>
            <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten einzulegen, wenn die Verarbeitung aus folgendem Grund erfolgt:</p>
            <ul>
                <li>Die Verarbeitung ist zur Wahrung berechtigter Interessen der WKDA oder eines Dritten erforderlich.</li>
            </ul>

            <p>Die WKDA verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, es bestehen zwingende schutzwürdige Gründe für die Verarbeitung, die gegenüber Ihren Interessen, Rechten und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>

            <p>Wenn Sie ein Widerspruchsrecht in Anspruch nehmen möchten, können Sie jederzeit eine Mitteilung an die unter Ziffer 2 genannten Kontaktdaten (z.B. per E-Mail, Fax, Brief) senden.</p>
        </div >
    );
};