# Toolnest

**A collection of free, browser-based tools for everyday tasks.**

Toolnest brings file, image, text, media, security, and utility tools together in one web application. Choose a tool from the homepage and use it directly in your browser.

> **Privacy note:** Toolnest is designed to process supported files and data locally in the browser. Some features may rely on browser capabilities and third-party libraries. Review the implementation of an individual tool before using it with sensitive information.

## Features

Toolnest currently includes **21 tools** across six categories:

### 📁 Files
- **PDF Toolkit** — PDF-related tasks such as viewing, merging, splitting, extracting text, converting, and compressing.
- **ZIP Extractor** — Extract files from ZIP archives.
- **Merge Text Files** — Combine multiple text files.

### 🖼️ Images
- **Image Compressor** — Reduce image file sizes.
- **Image Converter** — Convert between supported image formats such as JPG, PNG, and WebP.
- **Image Editor** — Make basic image edits.

### 📝 Text
- **Word Counter** — Count words and characters.
- **Case Converter** — Convert text between letter cases.
- **Text to PDF** — Create PDF documents from text.

### 🎙️ Media
- **Audio Trimmer** — Trim audio files.
- **Media Recorder** — Record media using supported browser devices and permissions.
- **Audio Extractor** — Extract audio from supported media files.

### 🔐 Security
- **Password Generator** — Generate passwords.
- **Hash Generator** — Generate hashes such as MD5 and SHA-256.
- **Text Encryption** — Encrypt and decrypt text using AES-based functionality.

### 🧰 Utilities
- **QR Code Generator** — Create QR codes.
- **QR Code Scanner** — Scan QR codes using supported input/device capabilities.
- **Barcode Generator** — Generate barcodes.
- **Random Picker** — Pick a random item.
- **Timer & Stopwatch** — Use a timer or stopwatch.
- **Unit Converter** — Convert supported units.

## Getting Started

Toolnest is a front-end web application. No backend setup is required for basic local use.

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/gitengineer4030/Toolnest.git
   ```

2. Open the project folder:

   ```bash
   cd Toolnest
   ```

3. Open `index.html` in a modern browser.

For a more consistent development experience, run the folder with a local development server, such as the **Live Server** extension in Visual Studio Code.

## Project Structure

The repository is organized around a main homepage, shared JavaScript utilities, and individual tool folders.

```text
Toolnest/
├── index.html
├── main.css
├── main.js
├── js/
│   ├── background-manager.js
│   ├── fileValidator.js
│   ├── pdf-toolkit-refactored.js
│   ├── qrGeneratorTool.js
│   └── uiHelper.js
├── Timer-stopwatch/
├── audio-extractor/
├── audio-trimmer/
├── barcode-generator/
├── case-converter/
├── hash-generator/
├── image-compressor/
├── image-converter/
├── image-editor/
├── media-recorder/
├── merge-text/
├── password-generator/
├── pdf-toolkit/
├── qr-generator/
├── qr-scanner/
├── random-picker/
├── text-encryption/
├── text-to-pdf/
├── unit-converter/
├── word-counter/
└── zip-extractor/
```

## Built With

- **HTML5** for application structure.
- **CSS3** for styling and responsive layouts.
- **JavaScript** for tool functionality and browser interactions.
- Browser APIs and third-party JavaScript libraries for supported file, PDF, image, QR, and media operations.

## Browser Compatibility

Use an up-to-date version of a modern browser such as Google Chrome, Microsoft Edge, or Firefox. Some features—especially camera, microphone, and media recording—depend on browser support and may require permission and a secure context (HTTPS or localhost).

## Privacy

Toolnest aims to keep supported processing in the browser rather than uploading user files to an application server. Actual behavior can vary by tool and by the external libraries or browser services it uses. Do not submit confidential data unless you have reviewed the relevant tool's code and understand its data handling.

## Deployment

Because this is a static front-end project, it can be hosted on a static web hosting service. For example, you can enable **GitHub Pages** for this repository and publish the site from the `main` branch, using the repository root as the source.

## Contributing

Suggestions, bug reports, and improvements are welcome. Before submitting a change:

1. Test the affected tool in a modern browser.
2. Check that existing tools and shared functionality still work.
3. Keep changes focused and update this README if project features or setup steps change.

## License

No license file is currently specified in this repository. Unless a license is added, the project is not automatically granted an open-source license; all rights remain with the copyright holder.
