import React from 'react';

export const Imprint = () => {
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
            <h1>Impressum</h1>
            <p><strong>Bruchsaler Automobile</strong></p>
            <p>Inhaber: Musa Demir</p>
            <p>Kammerforststraße 13</p>
            <p>76646 Bruchsal</p>
            <p>Deutschland</p>

            <h2>Kontakt:</h2>
            <p>Telefon: +49 176 24196168</p>
            <p>Zweite Telefonnummer: +49 176 64179764</p>
            <p>Mobiltelefon: +49 176 64179764</p>
            <p>E-Mail: <a href="mailto:info@bruchsaler-automobile.de">info@bruchsaler-automobile.de</a></p>
            <p>Website: <a href="http://www.bruchsaler-automobile.de">www.bruchsaler-automobile.de</a></p>

            <h2>Verantwortlich für den Inhalt gem. § 55 Abs. 2 RStV:</h2>
            <p>Musa Demir</p>
            <p>Kammerforststraße 13</p>
            <p>76646 Bruchsal</p>

            <h2>Umsatzsteuer-ID:</h2>
            <p>[Hier Umsatzsteuer-ID einfügen]</p>

            <h2>Hinweis auf EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter
                <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a> finden.
            </p>
            <p>Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <h2>Haftungshinweis</h2>

            <h3>Haftung für Inhalte:</h3>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

            <h3>Haftung für Links:</h3>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
        </div>
    );
};