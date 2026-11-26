# Pregled projekta GymProgress

GymProgress podpira celoten potek od priprave programa do zaključka treninga. Trener sestavi program in ga po potrditvi povezave dodeli stranki. Stranka med treningom beleži opravljene serije, ob zaključku pa vidi skupni volumen. MVP vključuje tudi zaznavanje osebnih rekordov za največjo uporabljeno težo pri posamezni vaji (US-07). Registracija in prijava (US-01) omogočata uporabo aplikacije v vlogi trenerja ali stranke.

## Rezultati ročnega preizkusa

Pri vseh petih preizkušenih zgodbah je delovanje aplikacije ustrezalo [sprejemnim kriterijem](05-uporabniske-zgodbe.md).

| Uporabniška zgodba | Ugotovitve |
| --- | --- |
| US-02 – Sestavljanje programa | Program je zahteval ime in vsaj eno vajo. Vaje je bilo mogoče dodati, odstraniti in razvrstiti. Po osvežitvi so se ohranili vrstni red vaj ter ciljno število serij in ponovitev. |
| US-03 – Povezava s trenerjem | Stranka je trenerjevo povabilo lahko sprejela ali zavrnila. Šele po sprejemu je trener pridobil dostop do njenih podatkov in možnost dodelitve programa. |
| US-04 – Dodelitev programa | Trener je pred potrditvijo videl izbrani program in prejemnika. Po dodelitvi je povezana stranka program lahko izbrala za trening. Druga stranka do njega ni imela dostopa. |
| US-05 – Beleženje serij | Trening je prikazal vaje iz izbranega programa. Vnos je zahteval pozitivno celo število ponovitev in nenegativno težo. Stranka je svoje serije pred zaključkom lahko popravila ali izbrisala, trener pa jih ni mogel spreminjati. |
| US-06 – Zaključek treninga in volumen | Zaključek je bil mogoč po prvi shranjeni seriji. Skupni volumen je ustrezal vsoti zmnožkov ponovitev in teže vseh opravljenih serij. Datum in rezultat sta se ohranila po osvežitvi, ponoven poskus zaključka pa ni podvojil podatkov. |

## Opažena napaka pri aktivaciji računa (US-01)

Po registraciji v objavljeni aplikaciji aktivacijska povezava iz e-poštnega sporočila uporabnika usmeri na `localhost:3000`. Povezava bi morala odpreti objavljeno aplikacijo. Pri ročnem preizkusu je aktivacija uspela, ko smo v povezavi lokalni naslov zamenjali z naslovom objavljene aplikacije.
