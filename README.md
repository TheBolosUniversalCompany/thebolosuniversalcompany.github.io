# The Bolos Universal Company™

Squelette Astro statique, en anglais et en français. Aucun CMS, aucune bibliothèque d'interface, aucune police externe. Astro est la seule dépendance directe.

## Lancer le site sur cet ordinateur

Les dépendances sont déjà installées. Double-cliquez sur `lancer-site.cmd` dans ce dossier, puis ouvrez l'adresse affichée dans la fenêtre (habituellement http://127.0.0.1:4321/en/).

Gardez la fenêtre ouverte pendant le travail. Les modifications sont prises en compte automatiquement. Pour arrêter le serveur, appuyez sur Ctrl+C dans cette fenêtre.

Dans un terminal ouvert dans BOLOS_SITE, vous pouvez aussi lancer :

```powershell
node node_modules/astro/bin/astro.mjs dev --host 127.0.0.1
```

## Comprendre les fichiers

```text
BOLOS_SITE/
├── public/images/home/hero-headquarters.png  Image commune aux accueils
├── src/
│   ├── components/Header.astro              Logo, navigation et langues
│   ├── data/pages.ts                        Titres, routes et textes EN/FR
│   ├── layouts/PageLayout.astro             Structure HTML et Hero communs
│   ├── pages/
│   │   ├── index.astro                      Redirection statique vers /en/
│   │   ├── en/                              Les 8 pages anglaises
│   │   └── fr/                              Les 8 pages françaises
│   └── styles/global.css                    Tous les styles
├── astro.config.mjs                         Configuration statique
├── package.json                             Dépendance et commandes
├── pnpm-lock.yaml                           Versions exactes installées
├── tsconfig.json                            Vérification des types par l'éditeur
└── lancer-site.cmd                          Lancement local sous Windows
```

`node_modules`, `.astro`, `.cache`, `.pnpm-store` et `dist` sont des dossiers techniques générés : ne les modifiez pas pour changer le site.

## Modifier les textes ou une page

Dans `src/data/pages.ts`, chaque page possède une entrée `en` et une entrée `fr`. Modifiez son `title` pour changer son titre dans le Hero, la navigation et l'onglet du navigateur. Les textes communs sont dans `translations`, dans le même fichier.

Chaque fichier de `src/pages/en/` ou `src/pages/fr/` appelle le layout avec une langue et une clé de page. Par exemple, `en/group.astro` et `fr/groupe.astro` utilisent la même clé `group`. Cette clé permet au sélecteur EN / FR de retrouver la traduction de la page actuelle.

Pour ajouter du contenu plus tard, placez-le entre les balises du layout de chaque fichier de page, avec sa traduction dans le fichier correspondant :

```astro
<PageLayout lang="fr" pageKey="group">
  <p>Votre texte français.</p>
</PageLayout>
```

Le logo est un nom de marque commun aux deux langues. Les images se trouvent dans `public/images/` et sont partagées ; il ne faut pas créer de dossier d'images par langue.

## Image d'accueil

Source : `ChatGPT Image 27 août 2026, 12_09_22.png`, dans le dossier parent. Ce fichier est conservé intact. Sa copie dans le projet s'appelle `public/images/home/hero-headquarters.png`.

Les deux accueils utilisent exactement cette même ressource. `object-fit: cover` remplit le Hero sans déformer l'image ; certaines parties peuvent être recadrées selon la taille de l'écran.

## Générer le site statique

```powershell
node node_modules/astro/bin/astro.mjs build
node node_modules/astro/bin/astro.mjs preview --host 127.0.0.1
```

Le premier appel crée `dist/`, contenant les fichiers HTML, le CSS et les images à héberger. Le second permet de consulter ce résultat localement. La copie de l'image dans `dist/` est un résultat de compilation normal, pas une deuxième image source à maintenir.

## Réinstaller les dépendances si nécessaire

Avec Node.js et pnpm disponibles :

```powershell
pnpm install --frozen-lockfile --store-dir .pnpm-store
pnpm dev
```

Sur cet ordinateur, pnpm est fourni par Codex. Si `pnpm` n'est pas reconnu :

```powershell
pnpm install --frozen-lockfile
```

L'installation avec pnpm 11 a signalé des scripts de dépendances désactivés (`esbuild` et `sharp`). La compilation a réussi sans les activer ; les images de `public/` sont copiées directement, sans traitement.
