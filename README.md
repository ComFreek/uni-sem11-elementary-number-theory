Ich selbst habe den Beweis des Satzes 3.15 geskipped

Gelesen bis vor Satz 5.4 (S. 70);

nächstes Video: https://www.fau.tv/clip/id/3584

https://www.fau.tv/clip/id/3542 skipped (WeihnachtsVL, nicht klausurrelevant laut ihr)

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
	- Proben nicht vergessen!
	- Skript erlaubt?

in Klausur: TR erlaubt? Zumindest laut Aufzeichnung 2013. Nutze meinen Casio fx-991DE PLUS mit ":R"-Taste!
Klausur: RECHENAUFGABEN


`ggT(a*c, b*c) = c` wenn b, c teilerfremd?

Für a, b in N: a/ggT(a,b) und b/ggT(a,b) teilerfremd, d.h. ggT(a/ggT(a,b), b/ggT(a,b)) = 1.

## Algorithmen

## Erweiterter Euklidischer Algorithmus für `ggT(a, b)`

![](./README-euclids-algorithms.png)

Erweitert: durch Rückeinsetzen $r_n$ mittels Linearkombination $a$ und $b$ ausdrücken.

## Lösungen von `ax + by = c` mit (x, y) in ℤ²

Sei die Gleichung `ax + by = c` mit a, b, c in ℤ gegeben. Gesucht sind `x`, `y`, falls sie existieren.

1. Berechne `ggT(a, b)` mit (erw.) Euklidischen Algorithmus
2. Falls *nicht* `ggT(a, b) ∤ c` (über ℤ), dann unlösbar. Terminiere.
3. Falls `ggT(a, b) ≠ 1`: wende Algorithmus rekursiv auf durch `ggT(a, b)` dividierte Gleichung an (sonst Satz 4.18 in Schritt 5 nicht anwendbar)

   ⇒ `a/ggT(a, b) x + b/ggT(a, b) y = c/ggT(a,b)`
	 
	 möglich, da `ggT(a,b) | a,b,c` nach Annahme und da `ggT(a,b)` kein Nullteiler in ℤ ist.
	 
	 Lösungsmenge bleibt gleich durch diese Division!
4. Berechne **Partikularlösung**, angenommen `ggT(a, b) = 1 = a x' + b y'`
   
   Sei `ggT(a, b) | c` via q (d.h. `q ⋅ ggT(a, b) = c`). Dann:

   - `ax' + by' = ggT(a, b)`
	 - `a(qx') + b(qy') = q · ggT(a, b) = c`
	 
	 => `q (x', y')` Partikularlösung
5. Berechne **alle Lösungen**

   - es gilt: `im(ax + by ∈ ℤ[x,y]) = ggT(a,b)ℤ`, äquivalent: `aℤ + bℤ = ggT(a,b)ℤ`
   - oder allg.: `im(a₁x₁ + … + a_nx_n ∈ ℤ[x₁, …, x_n]) = ggT(a₁, …, a_n)ℤ`, äquivalent: `a₁ℤ + … + aₙℤ = ggT(a₁, …, a_n)ℤ`

   `L = {(x0 - t⋅b, y0 + t⋅a), t ∈ ℤ}` (Satz 4.18)
	 
	 Je nach Anwendungsaufgabe, stelle `x0 - t⋅b ≥ 0` und `y0 + t·a ≥ 0` auf; löse nach `t`, um alle (endlich) viele Lösungen zu erschließen.

Lineare dipohantische Gleichung hat entweder 0 oder unendlich viele Lösungen.

### Beispiel 1

Werbegeschenkaufgabe von S. 44: 19x + 13y = 1000, wie viele Lösungen (x,y) mit x, y >= 0 gibt es? 4 Lösungen.

Abwandlung von mir: 31x + 23y = 1000, wie viele Lösungen (x,y) mit x, y >= 0 gibt es? 13 Lösungen.

### Beispiel 2

Finde alle Lösungen von `6x + 4y = 14`.

1. `ggT(6, 4) = 2 = 1 * 6 - 1 * 4`
2. `ggT(6, 4) = 2 | 14`, okay!
3. Normalisierung: `3x + 2y = 7`, rekursiv:

   1. Berechne
   
      ```
      3 = 1·2 + 1
      2 = 2·2 + 0
      
      ⇒ 1 = (1)·(3) + (-1)·(2)
      ```
   2. `ggT(3, 2) = 1 | 7`, okay!
4. Partikularlösung: `7 · (1, -1) = (7, -7)`
5. Alle Lösungen: `L = {(7 + 2⋅t, -7 - 3⋅t) | t in ℤ} = {…, (5, -4), ___(7, -7)___, (9, -10), (11, -13), …}` (dieselben Lösungen von ursprünglicher Gleichung)

### Beispiel 3 (mit negativen Koeffizienten!)

Finde alle Lösungen von `-51x + 5y = 13`.

1. Sofort klar: `ggT(-51, 5) = ggT(51, 5) = 1`
   Berechne trotzdem:

   ```
   -51 = -11 ⋅ 5 + 4
     5 =   1 ⋅ 4 + 1
     4 =   4 ⋅ 1 + 0
   
   ⇒ 1 = (-1)⋅(-51) + (-10)⋅(5)
   ```

2. `ggT(-51, 5) = 1 | 13`, d.h. unendlich viele Lösungen existieren!
3. -/-
4. Partikularlösung `13 ⋅ (-1, -10) = (-13, -130)`.
5. Alle Lösungen: `L = {(-13 + 5⋅t, -130 - (-51)⋅t), t ∈ ℤ}`

## kgV

- manuell: ![](./kgv-berechnung.png)

- geschickter: nutze $ggT(a,b) ⋅ kgV(a,b) = a⋅ b$
- für $ggT(a,b) = 1 ⇒ kgV(a,b) = a ⋅ b$

## Additives Inverse in ℤ/mℤ

- Problem: gesucht ist Inverses von `[a] ∈ ℤ/mℤ`
- Lösung: `[-a]`

## Multiplikatives Inverse in ℤ/mℤ

- Problem: gesucht ist Inverses von `[a] ∈ ℤ/mℤ`
- Lösung: löse lineare diophantische Gleichung `ax + my = 1` via Algorithmus oben, nehme eine Partikularlösung für `y`.

  Beachte: Inverses existiert <=> `ggT(a, m) = 1`.

  Ggf. normalisiere erhaltenes `y` auf kanonischen Repräsentanten in $\{0, …, m - 1\}$.

Beispiele:

- $[6]_{13}^{-1} = [11]_{13}$ (in Notation der VL: $(\bar{6})^{-1} = \bar{11}$) 
- $[15]_{89}^{-1} = [6]_{89}$

## Nullteiler

`zero divisor := Σ(a:R) Σ(b:R) a ≠ 0 ∧ b ≠ 0 ∧ ab = 0` (def. from lecture; usually `0` *is* considered a zero divisor…)

e.g. in ℤ/6ℤ: `(2, 3)` is zero divisor

## Bestimme Rest von $a^{\text{große Zahl}} ÷ m$

1. $[a^{\text{große Zahl}}]_m = [a]_m^{\text{große Zahl}}$
2. Betrachte $⟨ a \rangle$ in ℤ/mℤ:

   - periodisch mit Länge $\mathrm{ord}(a)$? (<=> a invertierbar)

     z. B. $a = 2, m = 7$: $⟨ 2 ⟩ = \{1, 2, 4(, 8 = 1)\}$

	 $⇒ \mathrm{ord}(2) = 3$ und $[2]_7^{\text{große Zahl}} = [2]_7^{[\text{große Zahl}]_3}$

   - stagierend?
  
     z. B. $a = 5, m = 10$: $⟨ 5 ⟩ = \{1, 5(, 25 = 5)\}$

	 $⇒ [5]_{10}^{\text{große Zahl}} = [5]_{10}$, da $\text{große Zahl} ≥ 1$.



## Gleichungen über Z

Wenn a Faktor von LHS und RHS, dann `LHS = RHS ⇔ LHS/a = RHS/a`.

# Verschiedenes

finite commutative monoids with (∀abc. ab = ac => b=c) are groups

## Alle ungeraden Quadratzahlen $≡ 1$ mod 8

Sei $q ∈ ℤ$ und $q^2$ ungerade. Dann ist $q$ ungerade.

$\bar{q^2} = \bar{q}^2 ∈ \{\bar{1}^2, \bar{3}^2, \bar{5}^2, \bar{7}^2\} = \{\bar{1}\} ⇒ q^2 ≡ 1$ (mod 8)

Alternativ: $q^2 = (2n + 1)² = 4n² + 4n + 1 = 4n(n+1) + 1 ≡ 1$, da $8 ∣ 4n(n+1)$, denn $2 ∣ n(n+1)$.

## Satz von Euler, Kleiner Fermat'sche Satz

> Seien $a, m$ teilerfremd, dann $a^{\varphi(m)} ≡ 1$ (mod m).

(Folgt aus: $a, m$ teilerfremd $⇒ \bar{a} ∈ ℤ_m^∗ ⇒ \bar{1} = \bar{a}^{\mathrm{ord}(ℤ_m^\ast)} = \bar{a}^{\varphi(m)}$; group element raised to group order always 1)

> Für $a ∈ ℕ$, $p$ prim gilt: $a^p ≡ a$ (mod p)

Wenn $p ∣ a$, trivial $0 ≡ 0$. Sonst $\mathrm{ggT}(a, p) = 1$ und $a^p ≡ a^{p-1}a ≡ 1a ≡ a$.

> $\varphi(p^n) = p^{n-1} (p-1)$

## Chinesischer Restsatz

- Problem: Gleichungen $x ≡ a_i$ (mod $m_i$), z. B.

  - $x ≡ 3$ (mod 5)
  - $x ≡ 1$ (mod 7)
  - $x ≡ 2$ (mod 11)

  **mit $m_i$ paarweise teilerfremd**. Gibt es Lösung für $x ∈ ℤ$?

- Ja, es gibt eine Lösung $x$ (eindeutig in $ℤ/mℤ$, mit $m := Π m_i$)

  Konstruiere *eine* Lösung $x := a_1 q_1 q_1' + a_2 q_2 q_2' + a_3 q_3 q_3'$ mit

  - $q_1 := 7 ⋅ 11 = 77$

    In $ℤ/5ℤ$: $\bar{q_1} = \bar{2},\quad\bar{2}^{-1} = \bar{3} \Rightarrow$ wähle $q_1' := 3$. (I. Allg. ist $q_1' ∈ 3 + 5ℤ$ möglich.)

  - $q_2 = 5 ⋅ 11 = 55$
  
    In $ℤ/7ℤ$: $\bar{q_2} = 6,\quad\bar{q_2}^{-1} = \bar{6} \Rightarrow$ wähle $q_2' := 6$
  - $q_3 = 5 ⋅ 7 = 35$

    In $ℤ/11ℤ$: $\bar{q_3} = 2,\quad\bar{q_3}^{-1} = \bar{6} \Rightarrow$ wähle $q_3' := 6$

  Dann $x = 3 ⋅ 77 ⋅ 3 + 1 ⋅ 55 ⋅ 6 + 2 ⋅ 35 ⋅ 6 = 1443$.

  Beachte: hier muss etwa $77$ stehen, anderer Repräsentant bzgl. $ℤ/5ℤ$ *nicht* möglich. Für $q_i'$ is jedoch Repräsentenwahl in $ℤ/m_iℤ$ frei.

  Mit $m := m_1 m_2 m_3 = 385$ ist
  
    - Lösungsmenge $x + mℤ = 1443 + 385ℤ$
    - kanonischer Repräsentant $x\;\%\;m = 1443\;\%\;385 = 288$.

Erweiterter CRT mit erlaubten Koeffizienten vor $x$: siehe <https://www.dave4math.com/mathematics/chinese-remainder-theorem/>

## Konversation Dezimalsystem $\rightarrow$ b-System

Immer durch $b$ teilen, Reste ergeben $b$-Darstellung:

```
8924 = 743 ⋅ 12 +  8     ^
 743 =  61 ⋅ 12 + 11     |
  61 =   5 ⋅ 12 +  1     | 
   5 =   0 ⋅ 12 +  5     |

Ergebnis: 51B8
```

Probe mit TR! Auf Casio fx-991DE Plus: `Mode -> Pfeil runter -> 3 (Base-N) -> 8924 eingeben -> Dec/Hex/Bin/Oct-Taste drücken`

## Schriftliches Addieren/Subtrahieren zur Basis b

Beispiele:

- $455_6 + 1_6$
- $210_3 - 1_3$
- $2302_4 - 233_4 = 2003_4$ (tricky mit Borrow und Carry!!)

## Dezimalbruchentwicklung

Anzahl Stellen und Periodizität in Dezimalentwicklung *nur* abhängig von Nenner; unterscheide 3 Fälle: Nenner bestehend aus $\{2,5\}$, teilerfremd mit $\{2,5\}$ oder gemischt.

> **Sätze 7.1&mdash;7.5:** Vollständig gekürzte echte Bruch $\frac{m}{n}$ hat
> 
> - endliche Dezimalentwicklung $0.q_1…q_s$ ⇔ $n = 2^a ⋅ 5^b$
> 
>   Entwicklung hat Stellen $s := \max(a,b)$.
>
> - reinperiodische Dezimalentwicklung $0.\overline{q_1…q_s}$ ⇔ $\mathrm{ggT}(n, 10) = 1$
>
>   Periodenlänge $s := \min_{s \in ℕ} n \mid (10^s - 1)$
>
> - gemischtperiodische Dezimalentwicklung $0.p_1…p_t\overline{q_1…q_s}$ ⇔ $n = n_1 ⋅ n_2$ mit $n_1 \mid 10^t$ ($t$ minimal), $\mathrm{ggT}(n_2, 10) = 1$
>
>   Periodenlänge ist die von $\frac{1}{n_2}$

Beispiele:

- Wie sieht Dezimalentwicklung von $\frac{3}{125}$ aus?

  Endliche Dezimalbruchentwicklung:
  
  $$\frac{3}{125} = \frac{3}{5^3} = \frac{3⋅2^3}{5^3 ⋅ 2^3} = \frac{24}{10^3} = 0.024$$

- Wie sieht Dezimalentwicklung von $\frac{1}{15}$ aus?

  $15 = 5 ⋅ 3 =: n_1 ⋅ n_2 ⇒ t = 1$ Vorziffern und Periodenlänge $1 = \min_{s \in ℕ} 3 \mid (10^s - 1)$.

  $15 = 0.0\overline{6}$.

- Wie sieht Dezimalentwicklung von $\frac{1}{28}$ aus?

  $28 = 2^2 ⋅ 7 =: n_1 ⋅ n_2 ⇒ t = 2$ Vorziffern und Periodenlänge $6 = \min_{s \in ℕ} 7 \mid (10^s - 1)$.

  $28 = 0.03\overline{571428}$.