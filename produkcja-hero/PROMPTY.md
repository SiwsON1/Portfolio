# PROMPT do Magnific — JEDEN film hero

**Koncept: "FLAME PORTRAIT" / "TWARZ Z PŁOMIENI"**
Surrealistyczny portret — Twoje BODY (ramiona, czarna koszula, postura) widoczne normalnie, OKULARY zawieszone w powietrzu we właściwym miejscu (czytelny sygnał że to Ty), ale tam gdzie powinna być TWARZ I GŁOWA — jest **objętość niebieskich płomieni** układających się w KSZTAŁT głowy. Płomienie powoli falują, sugerują rysy twarzy (nos, oczodoły świecą jaśniej), włosy zastąpione wstęgami plazmy.

Inspiracja: hero raviklaassens.com — głowa zrobiona z substancji która płynie. U nas zamiast czerwonej cieczy → cool blue plasma fire.

JEDEN klip, JEDNO ujęcie, JEDEN render.

| Plik docelowy | Czas | Model | Tryb |
|---|---|---|---|
| `public/clips/02-twarz.mp4` | **10-12s** | **Kling 2.1 Master** | image-to-video |

---

## ⚠️ KLUCZOWE — workflow dwuetapowy

Kling **animuje** od input image, NIE transformuje. Więc obraz wejściowy MUSI już mieć efekt głowy z płomieni. Najpierw generujesz statyczny obraz w Magnific Image (Mystic / Flux), potem dopiero animujesz w Klingu.

---

## Krok 1 — Wygeneruj STATYCZNY obraz głowy z płomieni (Magnific Image → Mystic / Flux 1.1 Pro)

Możesz wrzucić swoje zdjęcie (avatar.png) jako reference image dla zachowania postury, ale prompt MUSI opisać efekt flame-head bezpośrednio.

**Prompt do Image gen:**
```
Surreal cinematic portrait. Half body framing from chest up. A man in
late 20s wearing a black shirt, slim shoulders, normal natural posture
slightly turned 3/4 to camera. Above the neckline, where his head should
be, there is a MASSIVE BILLOWING CLOUD of cool electric blue plasma
flames — much larger than a human head, abstract and dominant, taking
up the entire upper third of the frame. The dense plasma fire only
faintly suggests a head silhouette — barely a hint of a skull outline
within the chaotic flowing flames. Long upward-flowing plasma tendrils
extend high above where hair would be, dancing wildly. Inside the dense
flame mass, just a faint darker void hints at where the face would be.
NO facial features visible — no eyes, no nose, no mouth, no skin,
nothing. Just chaotic dense blue fire dominating. Floating in front
of the flame mass at chest-up level: thin black-framed rectangular
eyeglasses, perfectly rigid and stable, the ONLY solid human feature
proving this is a person. Strong cyan light spills generously from the
huge flame mass down onto the shoulders and shirt. Background is deep
dark navy midnight void. Cinematic film grain, 85mm lens, shallow depth
of field, anamorphic lens flares across glasses. Inspired by Magritte
surrealism and Klaassens hero photography. The flames should be the
dominant subject — head shape is barely a suggestion, mostly just a
voluminous blue fire mass.
```

**Negative prompt (dla Image gen):**
```
visible face, clear face, defined head, recognizable head shape, skin,
flesh, human face details, eyes visible, mouth, nose, lips, teeth, smile,
hair (real hair), portrait of a man, normal head, sharp head outline,
small flames, contained fire, head-sized fire, thin flames, sparse fire,
red flames, orange, yellow, warm colors, sunset, daylight, warm
firelight, hot tones, woman, child, glasses warping, missing glasses,
sunglasses, multiple heads, two heads, distorted shoulders, deformed
body, low quality, blurry, oversaturated, cartoon, anime, horror,
scary, gore, blood, burning skin, melting
```

**Settings:** Aspect 16:9, ultra detail, Mystic preferred. **Wygeneruj 8-10 wariantów**, wybierz JEDEN gdzie:
- ✅ Body wyraźne (czarna koszula, ramiona) — daje sygnał "to człowiek"
- ✅ Okulary czytelne i całe — drugi sygnał "to Ty"
- ✅ Płomienie OGROMNE, dominują kadr, wykraczają wysoko ponad gdzie powinna być głowa
- ✅ Brak twarzy, brak skóry — tylko sugestia zarysu w masie ognia
- ✅ Płomień jest niebieski (nie czerwony/żółty)
- ✅ Tendrile plazmy rozchodzą się szeroko, nie jak włosy

---

## Krok 2 — Animuj statyczny obraz w filmie (Kling 2.1 Master image-to-video, 10-12s, 16:9)

W Magnificu:
1. **Video → Image-to-Video**
2. Model: **Kling 2.1 Master**
3. Wrzucasz STATYCZNY obraz z Kroku 1 (głowa już płonie na input image)
4. **Aspect: 16:9, Duration: 10s** (start od 10s, więcej = drifty)
5. **Mode: Professional**
6. **Sound: OFF**
7. **Wklej positive prompt — TYLKO RUCH, nie opis sceny** (Kling bierze scenę z input image):

```
The huge mass of blue plasma flames slowly swirls, billows, and dances
intensely in cinematic slow motion, growing and pulsing while keeping
its overall position. The long plasma tendrils extending upward flow
wildly like flames in zero gravity, never settling, constantly flowing.
Volumetric blue ember particles drift upward and outward from the dense
flame mass, filling the air. The body, shoulders, and floating glasses
stay perfectly still — only the flames move. The flames must stay
massive and dominant — never shrink, never reveal a face beneath. Cyan
light pulses rhythmically from the flame mass onto the shirt. Anamorphic
lens flares bloom occasionally across the glasses. Shallow depth of
field, 24fps cinematic slow motion, film grain. Loop-friendly.
NO camera movement, NO body movement, NO head appearing, NO face
revealing, NO talking — only the dense flames flow and pulse.
```

8. **Negative prompt:**

```
text, watermark, logo, fast motion, jump cuts, cartoon, anime, low
quality, blurry, oversaturated, ugly, deformed, woman, child, old man,
asian features, african features, glasses warping, lens distortion on
glasses, missing glasses, broken glasses, sunglasses, red flames,
orange flames, yellow flames, warm firelight, sunset, daylight, hot
colors, fire embers warm tones, real face, real skin, flesh visible,
human face details, eyes visible, mouth visible, teeth, lips, smile,
talking, mouth movement, head turning, body movement, walking, burning
skin, melting face, scary horror, demonic, evil, blood, gore,
environment, forest, room, multiple heads, two faces
```

9. **Generuj 4-6 wariantów** (różny seed). Wybór jednego.

---

## Krok 3 — wgranie do Remotion

1. Pobierz wybrany wariant
2. **Zmień nazwę na `02-twarz.mp4`**
3. Wrzuć do `C:\Users\mahin\Desktop\portfolio-ms\produkcja-hero\public\clips\`
4. Terminal:
   ```bash
   cd C:\Users\mahin\Desktop\portfolio-ms\produkcja-hero
   npm install
   npm run preview
   ```
5. Otworzy Remotion Studio — zobaczysz finalny render z color grade, vignette, grain
6. `npm run render` → `output/hero.mp4` + `output/hero.webm`
7. Daj znać — wgram do strony i podmienię WebGL hero shader na video

---

## Tweaki gdy nie wyjdzie za pierwszym razem

| Problem | Fix |
|---|---|
| Za bardzo widać twarz / kontur głowy zbyt wyraźny | Wzmocnij positive: `MASSIVE chaotic dense flames dominating, head outline barely visible, just a faint suggestion within the inferno`. Wzmocnij negative: `defined head shape, clear silhouette, sharp outline, contained flames, head-sized fire, recognizable head` |
| Wychodzi normalna twarz oświetlona ogniem (zamiast głowy z płomieni) | Wzmocnij positive: `instead of a head, there is only blue plasma fire shaped like a head`. Wzmocnij negative: `real face, skin, flesh, human head, eyes, nose, mouth visible` |
| Płomienie wychodzą czerwone/żółte | Zmień `blue plasma flames` na `electric blue plasma energy field, cool cyan ethereal flame` (Kling rozumie "plasma energy" jako cool) |
| Okulary znikają lub się gną | Dodaj `(perfect rigid black eyeglasses floating in correct position:1.5)` na końcu prompta |
| Body też znika (cały płomień) | Wzmocnij positive: `clearly visible black shirt, shoulders, normal solid human body from chest down` |
| Wygląda jak Ghost Rider / horror | Dodaj `gentle ethereal glow, peaceful serene mood, surreal art piece, magritte style` |
| Płomień jest płaski 2D | Dodaj `volumetric 3D plasma fire, depth, dimensional flame mass` |
| Za mało dramatyzmu | Podbij `cfg scale` w Klingu (jeśli jest opcja) na 7.5-8 |
| Twarz drifftuje (zmienia się każdą klatką) | Zmień duration z 12s na 8s — Kling stabilniejszy na krócej, zapętlimy w Remotion |
| Głowa zbyt "kształt płomienia" zamiast "głowa-z-płomieni" | Dodaj do positive `clearly recognizable as a human head silhouette, just made of blue fire` |

---

## To wszystko

JEDEN klip. Bez insertów, bez 5 plików. Po wgraniu do Remotion automatycznie dostajesz finalny film z color grade, vignette, grain, fade-in/out dla bezszwowego loopa na hero strony.
