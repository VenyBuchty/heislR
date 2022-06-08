# Prüfungsaufgabe
Ihr Kunde wünscht sich eine Applikation zur Ausgabe der aktuellen Lagerstände je Regal pro Tag.
Dazu liefert er CSV Daten, die pro Tag in einem Unterordner automatisch abgelegt werden. Diese finden Sie im Ordner "meineDaten".

Ihre Applikation soll mittels NodeJS, Express und Bootstrap umgesetzt werden. 
Im UserInterface ist eine Auswahl (HTML-Select) um den Tag zu wählen. 
Bei Änderung der Auswahl werden mit einem XHR Daten (Name des Regals = Dateiname, Anzahl der unterschiedlichen Produkte und gesamter Lagerstand = Summe) geladen und in einer HTML-Tabelle ausgegeben.

Viel Erfolg.

# Einrichten der Umgebung
- npm install (Installieren aller notwendigen Module lt. package.json)
- npm start (Ausführen/Starten des Server)
Anm.: Es wird nodemon verwendet, d.h. bei jeder Änderung am Script wird der Server automatisch neu gestartet.

# Aufgaben
Ihre Arbeit teilt sich in Serverseite (=server.js) und Clientseite (=static/index.html)

--- ENDE ----------------------------------------------------------------------------

# Punkte Details (Bewertung Prüfer)
1A (1): Express-Server-Applikation einrichten mit aktiverter Middleware morgan ()
1B (1): Beim Aufruf von index.html ausgeben (static)
1C (1): Bodyparser

2A (1): GET Request entgegennehmen
2B (2): Unterordner aus "meineDaten" einlesen und als Objekt/Array bereitstellen
2C (1): JSON Response erstellen

3A (1): POST Request entgegennehmen
3B (1): Ordnername in den POST-Body-Daten enthalten
3C (2): Dateien aus dem gewünschten Unterordner einlesen (Funktion readCSV)
3D (2): Summe der Lagerstände aller Produkte im File ermitteln
3E (2): JSON Response mit File, Anzahl Produkte und Lagerstand-Summe erstellen

4A (1) - select und table-Tags erstellen
4B (1) - Bootstrap Klassen richtig zuweisen

5A (2) - Beim Aufrufen der Seite, GET Request an Server schicken
5B (3) - Select mit allen Ordnernamen 

6A (3): Bei Auswahl wird Wert mit POST an den Server geschickt
6B (4): Mit dem erhaltenen Response wird eine Tabelle mit den Spalten "CSV-Datei", "Anzahl Produkte" und "Lagerstand Gesamt" erstellt und die Daten entsprechend eingetragen.
6C (1): Tabellenkopf (Beschriftung) 