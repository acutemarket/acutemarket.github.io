---
layout: partners
title: Acusfäärin kumppaneille
intro: Acute Market on Acute-ekosysteemin ilmainen näyteikkuna, jossa koko Acusfäärin
  palvelukirjo on keskitetetysti esillä.  Haluatko saada omia tuotteitasi tai palvelujasi näkyville Acute Markettiin? Hienoa!
  Tälle sivulle on kasattu tietopaketti, jolla pääset hyvin alkuun.
contact-email: pekka.heimonen@vitecsoftware.com
contact-tel: +358 40 751 2007
---

## Pikaopas

Tämä pikaopas olettaa, että sinulla on työasemassasi Git ja tunnet sen käytön ennestään. 
Jos Git ei (vielä) kuulu työkaluvalikoimiisi, niin ei huolta, saat tuotettua Acute Markettiin 
sisältöä muutenkin, mutta prosessi on vähän monimutkaisempi, [ota yhteyttä!](#contact).

### 1 - Kloonaa AcuteMarket-repository itsellesi

Acute Marketin sourcet löytyvät GitHubista, osoitteesta 
[https://github.com/acutemarket/acutemarket.github.io](https://github.com/acutemarket/acutemarket.github.io).

### 2 - Asenna Jekyll

Jos [Jekyll](http://jekyllrb.com) ei ole ennestään tuttu, niin nyt on hyvä syy tutustua, sillä 
[Jekyll](http://jekyllrb.com) rokkaa. 

Acute Marketin yhteydessä et varsinaisesti tarvitse Jekyll:iä muuta kuin testataksesi uuden tuottamasi sisällön, 
joten dokumentaatioon ei tarvitse suuremmin uppoutua. Sen jälkeen, kun Jekyll toimii omassa ympäristössäsi, 
voit keskittyä varsinaisen sisällön tuottamiseen 
[markdown-syntaksilla](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Jekyllin asennus onnistuu kivuttomasti [näillä asennusohjeilla](http://jekyllrb.com/docs/quickstart/).

Kun Jekyll on asennettu, siirry hakemistoon, johon kloonasit Acute Marketin repon ja käynnistä Jekyll server:

```
~$ jekyll serve
... blah blah ...
... blah blah ...
  Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```
Tämän jälkeen osoitteesta ```localhost:4000``` löytyy paikallinen kehitysversio Acute Marketista.
Voit siis alkaa lisäämään omaa sisältöäsi saitille.

### 3 - Kirjoita oma tuotekuvauksesi

Kaikki tuotekuvaukset löytyvät ```/_posts``` hakemiston alihakemistoista ja ne kirjoitetaan
[markdown-syntaksilla](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
Tee omalle firmallesi oma alihakemisto ja lisää sinne .md-tiedosto, jossa oma tuotekuvauksesi on. 
Noudata tiedoston nimeämisessä Jekyllin 
[blogipostauksen sääntöjä](http://jekyllrb.com/docs/posts/).

Tuotekuvauksessasi voit käyttää ```/icons``` hakemistossa olevia ikoneita thumbnaileina, 
käytettävissä olevia ikoneja on näppärä etsiä [tällä sivulla](https://www.iconexperience.com/o_collection/search/).
Voit myös lisätä omia thumbnaileja ```/icons``` hakemiston uuteen alihakemistoon. 
Jos lisäät omia thumbnail-kuvia, pidäthän huolta, että myös ne ovat mustia. 

HUOM: ```/icons``` hakemiston kuvia voit käyttää VAIN tällä saitilla. Jos haluat 
käyttää niitä laajemminkin, niin voit hankkia oman kopiosi [täältä](https://www.iconexperience.com/o_collection/).

### 4 Pull request

Kun olet saanut kuvauksesi ja sisältösi mieleiseesi kuntoon, tee pull request.
Me tarkastamme sisällön ja kun kaikki on ok, mergeämme pull requestin sisällön saitille.
Mergeämisen jälkeen sisältösi on saman tien on-the-air.

Pull requestin kommentointi/keskustelu tapahtuu GitHubissa normaaliin tapaan.

VAROITUS: Kaikki muut kuin ```/_posts/{yritys}```, ```/icons/{yritys}``` ja ```/portfolio/{yritys}``` hakemistojen muutokset
päätyvät melko suurella todennäköisyydellä hylkyyn.

## Ohjeita

### Tuotteen tai palvelun kuvauksen minimisisältö

- Palvelun nimi
- Ingress / Intro. Yksi tai kaksi lyhyttä lausetta, jotka kertovat miksi tuote tai palvelu on olemassa.
- Varsinainen tuotekuvaus, pituus ja sisältö on vapaavalintainen. Mukaan voit valmistella myös kuvia ja screenshotteja. 
Referenssit ovat aina arvokkaita.

### Linkkejä

- [Jekyll](http://jekyllrb.com) 
- [Markdown-cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Ikonihaku](https://www.iconexperience.com/o_collection/search/)