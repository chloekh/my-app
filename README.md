# TTT4850 Gruppe 3, GløHzkart: et interaktivt støykart over campus. 

I dette prosjektet har gruppen utviklet en applikasjon som består av et kart over campus Gløshaugen, der brukeren kan trykke på de ulike rommene og justere volum på en stemme som er tatt opp på forhånd. Under kan man finne de ulike kravene som trengs for å kunne kjøre applikasjonen, samt en step-by-step guide på hvordan man starter den. 

## Tekniske krav

Dette prosjektet er skrevet med rammeverket React, som krever at man har installert Node.js på forhånd. Linken under forklarer hvordan det kan gjøres: 
https://nodejs.org/en

Den enkleste måten å laste ned prosjektet på er å klone prosjektet ved hjelp av git. Derfor trenger man også git lastet ned. Hvordan dette gjøres, finnner man her: 
https://git-scm.com/downloads

Dersom du ikke ønsker å laste ned git kan du også laste ned en statisk versjon av prosjektet her:
https://drive.google.com/file/d/1RjfAyeqP5FI_CrX1SrEDCvV3xPSLJFRT/view?usp=share_link

Merk at denne versjonen ikke vil endres og kan oppleve utdaterte tillegg. Zip ut mappen før du hopper ned til punkt **Kjør applikasjonen** for å kjøre kommandoene i mappen ```my-app```.

## Setup

Åpne et kommandovindu og lokaliser til der du ønsker å lagre prosjektet med kommandoen ```cd 'path'```, der pathen er stien til der du vil den skal ligge i filutforskeren. 
Et eksempel på en slik sti kan være: 
```bash
cd ../user/downloads/prosjektmappe
```
Etter å ha navigert til riktig mappe, skriver du kommandoen 
```bash
git clone https://github.com/chloekh/my-app.git
```
Du skal nå ha fått en ny mappe som heter 'my-app'. Skriv så kommandoen ```cd 'my-app'``` for å navigere inn i mappen, og du er inne i prosjektet!

### Legg til lydfiler

Ettersom lydfilene har lengde på rundt 30 min, er det altfor store filer til å kunne legges til i git-prosjektet. Derfor ligger de i en zippet mappe på Google Drive, her:
https://drive.google.com/file/d/1M2I55QmKOpZF-wSz-Ombm0FY3OtX1F0j/view?usp=share_link

Last ned og unzip denne mappen kalt ```støy.zip```, og plasser den unzippede mappen i prosjektet under ```src/resources``` slik at filene inni får stien ```src/resources/støy/støyfil.WAV```. 

### Kjør applikasjonen

For å kjøre applikasjonen skriver du inn disse to kommandoene i rekkefølge: 

```
npm install
npm start
```
Programmet skal nå ha automatisk åpnet opp et nettleser vindu der programmet kjøres, ellers kan man skrive inn url'en ```http://localhost:3000/```

```Prosjektet kan ikke videreutvikles uten tillatelse fra gruppemedlemmene på gruppe 16 i landsby TTT4850.```
