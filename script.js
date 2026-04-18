document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      nav_download: "Download",
      hero_eyebrow: "Windows utility",
      hero_title: "Copy files and folders in Windows with much more control.",
      hero_text: "A smarter way to copy files and folders in Windows, with preview, rules, confirmation, and better control.",
      hero_cta_primary: "Download",
      hero_cta_secondary: "Explore features",
      hero_note: "Free. Built for Windows. Focused on practical file operations.",
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
      screens_title: "See the main workflows and controls of Paste Advanced.",
      faq_label: "FAQ",
      faq_title: "A few useful answers before downloading.",
      faq1_q: "Is Paste Advanced free?",
      faq1_a: "Yes. Paste Advanced is currently available for free.",
      faq2_q: "Which operating system does it support?",
      faq2_a: "Paste Advanced currently supports Windows 10/11 x64.",
      faq3_q: "Can I use multiple source folders?",
      faq3_a: "Yes. You can work with multiple sources and control what will be copied more clearly.",
      faq4_q: "Can I preview the result before running it?",
      faq4_a: "Yes. The preview shows operations, skipped items, and other useful details before execution.",
      download_label: "Download",
      download_title: "Download Paste Advanced for Windows",
      download_text: "Download Paste Advanced from Microsoft Store or GitHub Releases.",
      download_store: "Microsoft Store",
      download_github: "GitHub Releases",
      download_note: "Current version: 1.0.2 · Available on Microsoft Store",
      footer_text: "Windows utility for advanced file copy workflows.",
      footer_privacy: "Privacy Policy",
      footer_github: "GitHub Releases",
      footer_store: "Microsoft Store",
      footer_twicode: "Twicode",
    },
    it: {
      nav_download: "Scarica",
      hero_eyebrow: "Utility per Windows",
      hero_title: "Copia file e cartelle in Windows, con molto più controllo.",
      hero_text: "Un modo più intelligente per copiare file e cartelle in Windows, con anteprima, regole, conferma e maggiore controllo.",
      hero_cta_primary: "Scarica",
      hero_cta_secondary: "Scopri le funzioni",
      hero_note: "Gratis. Pensata per Windows. Focalizzata su operazioni pratiche su file e cartelle.",
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
      screens_title: "Guarda i flussi principali e i controlli di Paste Advanced.",
      faq_label: "FAQ",
      faq_title: "Qualche risposta utile prima del download.",
      faq1_q: "Paste Advanced è gratis?",
      faq1_a: "Sì. Paste Advanced è attualmente disponibile gratuitamente.",
      faq2_q: "Quale sistema operativo supporta?",
      faq2_a: "Paste Advanced supporta attualmente Windows 10/11 x64.",
      faq3_q: "Posso usare più cartelle sorgente?",
      faq3_a: "Sì. Puoi lavorare con più sorgenti e controllare meglio cosa verrà copiato.",
      faq4_q: "Posso vedere prima il risultato?",
      faq4_a: "Sì. La preview mostra operazioni, elementi saltati e altri dettagli utili prima dell'esecuzione.",
      download_label: "Download",
      download_title: "Scarica Paste Advanced per Windows",
      download_text: "Scarica Paste Advanced da Microsoft Store oppure da GitHub Releases.",
      download_store: "Microsoft Store",
      download_github: "GitHub Releases",
      download_note: "Versione corrente: 1.0.2 · Disponibile su Microsoft Store",
      footer_text: "Utility Windows per workflow avanzati di copia file.",
      footer_privacy: "Informativa sulla privacy",
      footer_github: "GitHub Releases",
      footer_store: "Microsoft Store",
      footer_twicode: "Twicode",
    }
  };

  const html = document.documentElement;
  const itBtn = document.getElementById("lang-it");
  const enBtn = document.getElementById("lang-en");
  const yearEl = document.getElementById("year");

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
    
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const savedLang = localStorage.getItem("pasteAdvancedLang");
  const browserLang = navigator.language && navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
  const initialLang = savedLang || browserLang || "en";

  function applyTranslations(lang) {
    const screenshotMap = {
      en: {
        hero: "assets/screens/en/03-live-preview.png",
        shot1: "assets/screens/en/01-main.png",
        shot2: "assets/screens/en/02-settings.png",
        shot3: "assets/screens/en/04-filters.png"
      },
      it: {
        hero: "assets/screens/it/03-live-preview.png",
        shot1: "assets/screens/it/01-main.png",
        shot2: "assets/screens/it/02-settings.png",
        shot3: "assets/screens/it/04-filters.png"
      }
    };
    
    const shots = screenshotMap[lang] || screenshotMap.en;
    
    const heroShot = document.getElementById("hero-shot");
    const shot1 = document.getElementById("shot-1");
    const shot2 = document.getElementById("shot-2");
    const shot3 = document.getElementById("shot-3");
    
    if (heroShot) heroShot.src = shots.hero;
    if (shot1) shot1.src = shots.shot1;
    if (shot2) shot2.src = shots.shot2;
    if (shot3) shot3.src = shots.shot3;

    const triggers = document.querySelectorAll(".screenshot-trigger");
    triggers.forEach((trigger) => {
      const kind = trigger.dataset.imageKind;
      if (kind && shots[kind]) {
        trigger.dataset.fullImage = shots[kind];
      }
    });
        
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

  function openLightbox(src, altText = "") {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = src;
    lightboxImage.alt = altText;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }
  
  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.style.overflow = "";
  }
  
  document.querySelectorAll(".screenshot-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const img = trigger.querySelector("img");
      const src = trigger.dataset.fullImage || (img ? img.src : "");
      const altText = img ? img.alt : "Screenshot";
      if (src) {
        openLightbox(src, altText);
      }
    });
  });
  
  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  
  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.dataset.closeLightbox === "true") {
        closeLightbox();
      }
    });
  }
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox && !lightbox.hidden) {
      closeLightbox();
    }
  });
    
  applyTranslations(initialLang);
});

