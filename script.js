document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      nav_download: "Download",
      hero_eyebrow: "Windows utility",
      hero_title: "Copy files and folders in Windows with much more control.",
      hero_text: "Preview operations, apply filters, use Send To, hotkeys, and useful tools to handle advanced copy workflows in a clearer and more predictable way.",
      hero_cta_primary: "Download",
      hero_cta_secondary: "Explore features",
      hero_note: "Free. Built for Windows. Focused on practical file operations.",
      mock_sources: "Sources",
      mock_preview: "Preview",
      usecases_label: "Use cases",
      usecases_title: "Built for tasks that File Explorer handles poorly or not clearly enough.",
      usecase1_title: "Folder structure only",
      usecase1_text: "Recreate the folder hierarchy without copying the files.",
      usecase2_title: "Flatten files",
      usecase2_text: "Collect files from many subfolders into a single destination.",
      usecase3_title: "Folders and files",
      usecase3_text: "Copy content with more control, filters, and a clearer preview.",
      features_label: "Features",
      features_title: "The practical tools that make repetitive copy tasks easier.",
      feature1_title: "Preview before execution",
      feature1_text: "See what will happen before you launch the operation.",
      feature2_title: "Useful filters",
      feature2_text: "Filter by extension, folder depth, and file size.",
      feature3_title: "Send To integration",
      feature3_text: "Add selected folders or files directly from File Explorer.",
      feature4_title: "Global hotkey",
      feature4_text: "Open the app quickly with your preferred shortcut.",
      feature5_title: "Saved preferences",
      feature5_text: "Keep your preferred settings between sessions.",
      feature6_title: "Undo last operation",
      feature6_text: "Roll back the last execution when supported by the operation journal.",
      screens_label: "Screenshots",
      screens_title: "Replace these placeholders with real screenshots of your app.",
      shot1: "Main window screenshot",
      shot2: "Preview / right panel screenshot",
      shot3: "Settings or Send To workflow screenshot",
      faq_label: "FAQ",
      faq_title: "A few useful answers before downloading.",
      faq1_q: "Is Paste Advanced free?",
      faq1_a: "Yes. Paste Advanced is currently available for free.",
      faq2_q: "Which operating system does it support?",
      faq2_a: "It is currently designed for Windows.",
      faq3_q: "Can I use multiple source folders?",
      faq3_a: "Yes. You can work with multiple sources and control what will be copied more clearly.",
      faq4_q: "Can I preview the result before running it?",
      faq4_a: "Yes. The preview shows operations, skipped items, and other useful details before execution.",
      download_label: "Download",
      download_title: "Download Paste Advanced for Windows",
      download_text: "Download Paste Advanced from GitHub Releases or get it from Microsoft Store when available.",
      download_store: "Microsoft Store",
      download_github: "GitHub Releases",
      download_note: "Current version: 1.0.0",
      footer_text: "Windows utility for advanced file copy workflows.",
      footer_privacy: "Privacy Policy",
      footer_github: "GitHub Releases",
      footer_store: "Microsoft Store"
    },
    it: {
      nav_download: "Scarica",
      hero_eyebrow: "Utility per Windows",
      hero_title: "Copia file e cartelle in Windows, con molto più controllo.",
      hero_text: "Anteprima delle operazioni, filtri, Send To, hotkey e strumenti utili per gestire copie avanzate in modo più chiaro e prevedibile.",
      hero_cta_primary: "Scarica",
      hero_cta_secondary: "Scopri le funzioni",
      hero_note: "Gratis. Pensata per Windows. Focalizzata su operazioni pratiche su file e cartelle.",
      mock_sources: "Sorgenti",
      mock_preview: "Anteprima",
      usecases_label: "Casi d'uso",
      usecases_title: "Pensata per attività che Esplora File gestisce male o in modo poco chiaro.",
      usecase1_title: "Solo struttura cartelle",
      usecase1_text: "Ricrea la gerarchia delle cartelle senza copiare i file.",
      usecase2_title: "File appiattiti",
      usecase2_text: "Raccogli i file da molte sottocartelle in un'unica destinazione.",
      usecase3_title: "Cartelle e file",
      usecase3_text: "Copia i contenuti con più controllo, filtri e una preview più chiara.",
      features_label: "Funzioni",
      features_title: "Gli strumenti pratici che rendono più semplici le copie ripetitive.",
      feature1_title: "Anteprima prima dell'esecuzione",
      feature1_text: "Vedi cosa succederà prima di avviare l'operazione.",
      feature2_title: "Filtri utili",
      feature2_text: "Filtra per estensione, profondità cartelle e dimensione file.",
      feature3_title: "Integrazione Send To",
      feature3_text: "Aggiungi cartelle o file selezionati direttamente da Esplora File.",
      feature4_title: "Hotkey globale",
      feature4_text: "Apri rapidamente l'app con la scorciatoia che preferisci.",
      feature5_title: "Preferenze salvate",
      feature5_text: "Mantieni le impostazioni preferite tra una sessione e l'altra.",
      feature6_title: "Undo ultima operazione",
      feature6_text: "Annulla l'ultima esecuzione quando supportata dal journal dell'operazione.",
      screens_label: "Screenshot",
      screens_title: "Sostituisci questi placeholder con screenshot reali della tua app.",
      shot1: "Screenshot finestra principale",
      shot2: "Screenshot anteprima / pannello destro",
      shot3: "Screenshot settings oppure flusso Send To",
      faq_label: "FAQ",
      faq_title: "Qualche risposta utile prima del download.",
      faq1_q: "Paste Advanced è gratis?",
      faq1_a: "Sì. Paste Advanced è attualmente disponibile gratuitamente.",
      faq2_q: "Quale sistema operativo supporta?",
      faq2_a: "Al momento è pensata per Windows.",
      faq3_q: "Posso usare più cartelle sorgente?",
      faq3_a: "Sì. Puoi lavorare con più sorgenti e controllare meglio cosa verrà copiato.",
      faq4_q: "Posso vedere prima il risultato?",
      faq4_a: "Sì. La preview mostra operazioni, elementi saltati e altri dettagli utili prima dell'esecuzione.",
      download_label: "Download",
      download_title: "Scarica Paste Advanced per Windows",
      download_text: "Scarica Paste Advanced da GitHub Releases oppure ottienilo da Microsoft Store quando disponibile.",
      download_store: "Microsoft Store",
      download_github: "GitHub Releases",
      download_note: "Versione corrente: 1.0.0",
      footer_text: "Utility Windows per workflow avanzati di copia file.",
      footer_privacy: "Informativa sulla privacy",
      footer_github: "GitHub Releases",
      footer_store: "Microsoft Store"
    }
  };

  const html = document.documentElement;
  const itBtn = document.getElementById("lang-it");
  const enBtn = document.getElementById("lang-en");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const savedLang = localStorage.getItem("pasteAdvancedLang");
  const browserLang = navigator.language && navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
  const initialLang = savedLang || browserLang || "en";

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    html.lang = lang;
    document.title =
      lang === "it"
        ? "Paste Advanced | Utility Windows per copie avanzate"
        : "Paste Advanced | Windows file copy utility";

    if (itBtn) itBtn.classList.toggle("active", lang === "it");
    if (enBtn) enBtn.classList.toggle("active", lang === "en");

    const privacyLink = document.getElementById("footer-privacy-link");
    if (privacyLink) {
      privacyLink.setAttribute(
        "href",
        lang === "it"
          ? "/paste-advanced/privacy/it/"
          : "/paste-advanced/privacy/"
      );
    }

    localStorage.setItem("pasteAdvancedLang", lang);
  }

  if (itBtn) {
    itBtn.addEventListener("click", () => applyTranslations("it"));
  }

  if (enBtn) {
    enBtn.addEventListener("click", () => applyTranslations("en"));
  }

  applyTranslations(initialLang);
});
