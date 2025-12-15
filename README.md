# Musée des Dinosaures - Application AR

Bienvenue dans le projet React Native (Expo) pour le Musée des Dinosaures.
Cette application permet aux utilisateurs de naviguer à travers un écran de bienvenue, des instructions, et d'accéder à une vue caméra (simulation AR).

## Prérequis

- Node.js installé sur votre machine.
- Pour iOS : Xcode (macOS uniquement).
- Pour Android : Android Studio (ou un appareil Android).
- Pour tester simplement : L'application **Expo Go** sur votre téléphone.

## Installation

Installez les dépendances du projet :

```bash
npm install
```

## Lancer le projet

Pour démarrer le serveur de développement Expo :

```bash
npx expo start
```

Une fois lancé, vous verrez un QR Code dans le terminal.
- **Physique** : Scannez-le avec l'application Camera (iOS) ou Expo Go (Android).
- **Simulateur iOS** : Appuyez sur la touche `i` (nécessite Xcode configuré).
- **Emulateur Android** : Appuyez sur la touche `a` (nécessite Android Studio configuré).

## Dépannage

### Erreur Xcode "xcrun"
Si vous rencontrez une erreur liée à `xcrun` ou au simulateur iOS, essayez de réinitialiser les outils de ligne de commande :

```bash
sudo xcode-select --reset
```
Puis réessayez.

## Ajout de Modèles 3D

Pour afficher vos propres modèles de dinosaures, veuillez les placer dans le dossier suivant :

`src/assets/models/`

Actuellement, l'application utilise des placeholders. Pour une intégration complète, vous devrez remplacer les références dans `ARScreen.tsx` pour charger vos fichiers `.glb` ou `.gltf` correspondants aux IDs définis dans `DinosaurListScreen.tsx`.

## Architecture Clean

Le projet suit une architecture "Clean" simplifiée pour séparer les responsabilités :

- **src/presentation/** : Contient tout ce qui est lié à l'interface utilisateur (Écrans, Navigation, Thème). C'est la seule partie qui "sait" que c'est une app React Native.
- **src/domain/** : (Non utilisé pour le moment, mais prêt) Contiendra les "Règles métier" et les modèles purs.
    - *Exemple* : L'entité `Dinosaur` (id, nom, période) et les interfaces des UseCases.
- **src/data/** : (Non utilisé pour le moment, mais prêt) Contiendra la logique de récupération de données.
    - *Exemple* : `DinosaurRepository` qui irait chercher les infos depuis une API ou une base de données locale.
