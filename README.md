# Számkitaláló játék

## Link (hostoláshoz)

TODO

## Leírás

/**
 * Számítógép gondol egy egész számra 1 és 100 között.
 * A felhasználó egy input mezőbe írj a tippjeit.
 * A számítógép minden tippre a következők egyikét válaszolja:
 * 
 * - a keresett szám kisebb
 * - a keresett szám nagyobb
 * - gratulálok eltaláltad!
 * 
 * Amint eltaláltad a keresett számot a játék véget ér. A játék végén kiírjuk, a tippek számát.
 * 
 * Bármikor lehet új játékot indítani. Ilyenkor a korábbi tippek törlődnek és a számítógép új számot generál.
 * A játék során a tippek listája időrendi sorrendben megjelenik.
 * Felül található a legutolső tipped alul pedig az első tipped

*/

# lépések
1. lépés: Felhasználói felület kialakítása (HTML, Bootstrap)
2. lépés: Új játék indítása: Véletlen szám legenerálása
3. lépés: Új játék indítása: felhasználói interfész alapállapotba hozása (korábbi tippek törlése, input mező tartalmának törlése)
4. lépés: Tipp beküldésének eseménykezelése: Kattintás után alert-el írd ki, hogy "klikk"
5. lépés: Beküldött tipp kinyerése az eseménykezelőben az input mezőből.
6. lépés Hibás tipp formátum esetén hibaüzenet. Ha nem tudsz hibás bemenetet megadni, mauálisan ellenőrízd, hogy tényleg csak 1 és 100 között adhatsz meg számokat.
7. Helyes tipp összehasonlítása a generált számmal.
8. lépés: a tipp eredményének tipplistában tárolása és kiírása a képernyőre (kisebb, nagyobb, eltaláltad)
9. lépés: A játék befejezése, amennyiben a tipp helyes.