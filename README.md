Ich selbst habe den Beweis des Satzes 3.15 geskipped

Gelesen bis vor Satz 5.4 (S. 70); nächstes Video: https://www.fau.tv/clip/id/3506

(I): ∀b: ℕ. |{p prime | ∃a: ℕ. p ≡ a mod b ∧ gcd(a, b) = 1}| = ∞
(II): ∀a: ℕ. ∀b: ℕ. gcd(a, b) = 1 ⇒ |{p prime | p ≡ a mod b}| = ∞

Übungsaufzeichnung für Übung 3 angeguckt

ggT mit PFZ: https://www.video.uni-erlangen.de/clip/id/3373, 1:20

https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity#For_three_or_more_integers


Klausur:
	- ggT mittels euklidischem Algo können und was sonst noch mit eukl. Algo zsmhängt
	  genaues Schema in Klausur reproduzieren mit
	  a = q  * b + r
	  b = q' * r + r'
	- schriftliche Multiplikation
	- schriftliche Division

in Klausur: TR erlaubt? Zumindest laut Aufzeichnung 2013. Nutze meinen Casio fx-991DE PLUS mit ":R"-Taste!
Klausur: RECHENAUFGABEN


`ggT(a*c, b*c) = c` wenn b, c teilerfremd?

Für a, b in N: a/ggT(a,b) und b/ggT(a,b) teilerfremd, d.h. ggT(a/ggT(a,b), b/ggT(a,b)) = 1.

## Algorithmen

## Lösungen von `ax + by = c` mit (x, y) in ℤ²

Sei die Gleichung `ax + by = c` mit a, b, c in ℤ gegeben. Gesucht sind `x`, `y`, falls sie existieren.

1. Berechne `ggT(a, b)` mit (erw.) Euklidischen Algorithmus
2. Falls *nicht* `ggT(a, b) ∤ c` (über Z), dann unlösbar. Terminiere.
3. Falls `ggT(a, b) ≠ 1`: normalisiere Gleichung durch Division mit `ggT(a, b)`

   => `a/ggT(a, b) x + b/ggT(a, b) y = c/ggT(a,b)`
	 
	 möglich, da `ggT(a,b) | a,b,c` nach Annahme und da `ggT(a,b)` kein Nullteiler in ℤ ist.
	 
	 Lösungsmenge bleibt gleich durch diese Division!
3. Angenommen `ggT(a, b) = 1 = a x' + b y'`:

   - es gilt: `im(ax + by ∈ ℤ[x,y]) = ggT(a,b)ℤ`
	 - oder allg.: `im(a₁x₁ + ... + a_nx_n ∈ ℤ[x₁, …, x_n]) = ggT(a₁, …, a_n)ℤ`.

   **Partikularlösung:** sei `ggT(a, b) | c` via q (d.h. `q ggT(a, b) = c`). Dann:

   - `ax' + by' = ggT(a, b)`
	 - `a(qx') + b(qy') = q ggT(a, b) = c`
	 
	 => `q (x', y')` Partikularlösung
	 
	 **Alle Lösungen:** `L = {(x0 - t*b, y0 + t*a), t ∈ ℤ}` (Satz 4.18)
	 
	 Je nach Anwendungsaufgabe, stelle `x0 - t*b >= 0` und `y0 + t*a >= 0` auf; löse nach `t`, um alle (endlich) viele Lösungen zu erschließen.

=> Gleichung hat entweder 0 oder unendlich viele Lösungen.

### Beispiel 1

Werbegeschenkaufgabe von S. 44: 19x + 13y = 1000, wie viele Lösungen (x,y) mit x, y >= 0 gibt es? 4 Lösungen.

Abwandlung von mir: 31x + 23y = 1000, wie viele Lösungen (x,y) mit x, y >= 0 gibt es? 13 Lösungen.

### Beispiel 2

Finde alle Lösungen von `6x + 4y = 14`.

1. `ggT(6, 4) = 2 = 1 * 6 - 1 * 4`
2. `ggT(6, 4) = 2 | 14`, okay!
3. Normalisierung: `3x + 2y = 7`
4. Berechne

   - `ggT(3, 2) = 1 = 1 * 3 - 1 * 2`
	 - `7 * (1, -1)` Partikularlösung
	 - Alle Lösungen: `L = {(7 + t*2, -7 + t*3) | t in ℤ} = {..., (5, -4), ___(7, -7)___, (9, -10), (11, -13), ...}` (dieselben Lösungen von ursprünglicher Gleichung)

## kgV

- manuell: ![](./kgv-berechnung.png)

- geschickter: nutze $ggT(a,b) ⋅ kgV(a,b) = a⋅ b$
- für $ggT(a,b) = 1 ⇒ kgV(a,b) = a ⋅ b$

## Inverses in ℤ/mℤ

- Problem: gesucht ist Inverses von `[a] ∈ ℤ/mℤ`
- Lösung: löse lineare diophantische Gleichung `ax + my = 1` via Algorithmus oben (Partikularlösung reicht).

  Beachte: Inverses existiert <=> `ggT(a, m) = 1`.

  Ggf. normalisiere Partikularlösung auf kanonischen Repräsentanten in `0 ≤ x' < m`.

## Bestimme Rest von $a^{\text{große Zahl}} ÷ m$

1. $[a^{\text{große Zahl}}]_m = [a]_m^{\text{große Zahl}}$
2. Betrachte $\langle a \rangle$ in ℤ/mℤ:

   - periodisch mit Länge $\mathrm{ord}(a)$? (<=> a invertierbar)

     z. B. $a = 2, m = 7$: $\langle 2 \rangle = \{1, 2, 4(, 8 = 1)\}$

	 $\Rightarrow \mathrm{ord}(2) = 3$ und $[2]_7^{\text{große Zahl}} = [2]_7^{[\text{große Zahl}]_3}$

   - stagierend?
  
     z. B. $a = 5, m = 10$: $\langle 5 \rangle = \{1, 5(, 25 = 5)\}$

	 $\Rightarrow [5]_{10}^{\text{große Zahl}} = [5]_{10}$, da $\text{große Zahl} \geq 1$.



## Gleichungen über Z

Wenn a Faktor von LHS und RHS, dann `LHS = RHS ⇔ LHS/a = RHS/a`.

# Verschiedenes

finite commutative monoids with (∀abc. ab = ac => b=c) are groups