## Druck

- S. 1 - 108 (inkl.)

Ich selbst habe den Beweis des Satzes 3.15 geskipped

Gelesen bis vor Kapitel 8, Seite 99.

- <https://www.fau.tv/clip/id/3542> skipped (WeihnachtsVL, nicht klausurrelevant laut ihr)

- blah:
  - (I): `∀b: ℕ. |{p prime | ∃a: ℕ. p ≡ a mod b ∧ gcd(a, b) = 1}| = ∞`
  - (II): `∀a: ℕ. ∀b: ℕ. gcd(a, b) = 1 ⇒ |{p prime | p ≡ a mod b}| = ∞`

- ggT mit PFZ: <https://www.video.uni-erlangen.de/clip/id/3373>, 1:20
- <https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity#For_three_or_more_integers>


## Klausur

  - Raum: <https://univis.fau.de/formbot/dsc_3Danew_2Froom_view_26rooms_3Dphil_2Fsephil_2Flgcrn_2Fhsewf_2F1132_26dir_3Dphil_2Fsephil_2Flgcrn_2Fhsewf_26ref_3Droom>

  - Fokus: RECHENAUFGABEN (keine Beweise)
	- ggT mittels euklidischem Algo können und was sonst noch mit eukl. Algo zsmhängt
	  genaues Schema in Klausur reproduzieren mit
	  
      ```
      a = q  * b + r
      b = q' * r + r'
      ```
	- schriftliche Multiplikation
	- schriftliche Division
	- Proben nicht vergessen!
	- Nutze meinen Casio fx-991DE PLUS mit ":R"-Taste!

## Klausurvorbereitung

- Übung 4: done
- Übung 6: done (A3 \[Multiplikationstafel\] skipped)
- Übung 7: A1,2 done
- Übung 8: done
- Übung 9: done

```
tolarz | I can use Euclid's algorithm to comput ethe continued fractio nreprsentation                                                                 │ angular_mike
                     │12:51:07           tolarz | Do the inputs have to have a gcd of 1?                                                                                                       │ antonmol
                     │12:51:24           tolarz | ie. if I seek the CFR of a/b, can I directly apply Euclid's algorithm ?                                                                      │ anzuof
                     │12:59:39           tolarz | i think so                                                                                                                                   │ APic
                     │13:02:01           tolarz | Let (rᵢ₋₂ = qᵢ rᵢ₋₁ + rᵢ)_{i ≥ 0} be the "transcript" of the Euclidean algorithm started on r₋₂ and r₋₁.                                     │ appia[m]
                     │13:02:22           tolarz | Let g := gcd(r₋₂, r₋₁)                                                                                                                       │ apragmatist
                     │13:02:55           tolarz | If the Euclidean Algorithm is run on r₋₂/g and r₋₁/g, the resulting transcript is (rᵢ₋₂/g = q_i rᵢ₋₁/g + rᵢ/g).                              │ Arcorann
                     │13:03:08           tolarz | (Is this true? I only verified by an example.)                                                                                               │ Argorok
                     │13:03:44           tolarz | Since for the continued fraction representation of a/b is precisely (q_i)_{i >= 0}, it doesn't matter whether a and b are coprime or not.
```

## Verschiedenes

Gleichungen über Z: wenn a Faktor von LHS und RHS, dann `LHS = RHS ⇔ LHS/a = RHS/a`.

finite commutative monoids with (∀abc. ab = ac => b=c) are groups