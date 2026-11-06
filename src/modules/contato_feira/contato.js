/* ======================================================
   contato.js
   Script exclusivo da página contato.html.

   Não é o mesmo arquivo usado no index.html (script.js),
   pois script.js controla elementos que só existem na
   página inicial (linha do tempo, globo 3D, monitoramento
   etc.). Para evitar erros e conflitos, a página de contato
   usa este arquivo separado, reaproveitando apenas o
   comportamento visual (header, menu mobile, reveal) já
   usado no restante do site.
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- HEADER: efeito ao rolar a página ---------- */

    const header = document.getElementById("navbar");

    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const topBtn = document.getElementById("topBtn");

    const handleTopButton = () => {
        if (topBtn) {
            topBtn.classList.toggle("visible", window.scrollY > 360);
        }
    };

    handleTopButton();
    window.addEventListener("scroll", handleTopButton);

    topBtn?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ---------- MENU MOBILE ---------- */

    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    if (menuBtn && mainNav) {
        menuBtn.addEventListener("click", () => {
            mainNav.classList.toggle("mobile-open");
            menuBtn.textContent = mainNav.classList.contains("mobile-open") ? "×" : "☰";
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("mobile-open");
                menuBtn.textContent = "☰";
            });
        });
    }

    /* ---------- REVEAL AO ROLAR ---------- */

    const revealEls = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach((el) => observer.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("visible"));
    }

    /* ================================================
       FORMULÁRIO DE CONTATO
       Validação no navegador + envio real do e-mail via
       FormSubmit (serviço externo gratuito, sem backend
       próprio, sem banco de dados). O e-mail de destino é
       climate13.etecmcm@gmail.com.

       IMPORTANTE: no primeiro envio, o FormSubmit manda uma
       mensagem de confirmação para esse e-mail — é preciso
       clicar no link de ativação uma única vez para que os
       próximos envios cheguem automaticamente.
    ================================================ */

    const FORM_ENDPOINT = "https://formsubmit.co/ajax/climate13.etecmcm@gmail.com";

    const form = document.getElementById("contactForm");
    const successPanel = document.getElementById("formSuccess");
    const newMessageBtn = document.getElementById("newMessageBtn");
    const formStatus = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");
    const errorSubmit = document.getElementById("errorSubmit");

    const t = (text) => window.CLIMATE13_I18N?.t(text) || text;
    let statusText = "PRONTO";
    let submitError = "";
    const renderLanguage = () => {
        if (formStatus) formStatus.textContent = t(statusText);
        if (errorSubmit) errorSubmit.textContent = t(submitError);
        submitBtn.textContent = t(submitBtn.disabled ? "ENVIANDO..." : "ENVIAR MENSAGEM");
        if (!submitBtn.disabled) {
            const arrow = document.createElement("span");
            arrow.textContent = "↗";
            submitBtn.append(arrow);
        }
        const english = window.CLIMATE13_I18N?.language === "en";
        document.title = english ? "Contact | CLIMATE/13 — SDG 13" : "Contato | CLIMATE/13 — ODS 13";
        document.querySelector('meta[name="description"]').content = english
            ? "Contact the Climate/13 project. Questions, suggestions or partnerships about climate action and SDG 13."
            : "Entre em contato com o projeto Climate/13. Dúvidas, sugestões ou parcerias sobre ação climática e o ODS 13.";
    };
    const setStatus = (text) => {
        statusText = text;
        renderLanguage();
    };
    window.addEventListener("climate13:languagechange", renderLanguage);
    renderLanguage();

    const fields = {
        nome: {
            input: document.getElementById("nome"),
            group: document.getElementById("groupNome"),
            validate: (value) => value.trim().length >= 3
        },
        email: {
            input: document.getElementById("email"),
            group: document.getElementById("groupEmail"),
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        },
        assunto: {
            input: document.getElementById("assunto"),
            group: document.getElementById("groupAssunto"),
            validate: (value) => value.trim().length >= 3
        },
        mensagem: {
            input: document.getElementById("mensagem"),
            group: document.getElementById("groupMensagem"),
            validate: (value) => value.trim().length >= 10
        }
    };

    const showError = (field) => {
        field.group.classList.add("has-error");
    };

    const clearError = (field) => {
        field.group.classList.remove("has-error");
    };

    const validateField = (key) => {
        const field = fields[key];
        const isValid = field.validate(field.input.value);

        if (isValid) {
            clearError(field);
        } else {
            showError(field);
        }

        return isValid;
    };

    // Validação em tempo real, ao sair do campo ou digitar
    Object.keys(fields).forEach((key) => {
        const field = fields[key];

        field.input.addEventListener("blur", () => validateField(key));

        field.input.addEventListener("input", () => {
            if (field.group.classList.contains("has-error")) {
                validateField(key);
            }
        });
    });

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            submitError = "";
            renderLanguage();

            let formValid = true;

            Object.keys(fields).forEach((key) => {
                const valid = validateField(key);
                if (!valid) formValid = false;
            });

            if (!formValid) {
                setStatus("CORRIJA OS CAMPOS");

                const firstError = form.querySelector(".has-error input, .has-error textarea");
                if (firstError) firstError.focus();

                return;
            }

            // Honeypot anti-spam: se estiver preenchido, é um bot.
            const honey = form.querySelector('[name="_honey"]');
            if (honey && honey.value) {
                return;
            }

            submitBtn.disabled = true;
            renderLanguage();
            setStatus("ENVIANDO");

            try {
                const response = await fetch(FORM_ENDPOINT, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(Object.fromEntries(new FormData(form)))
                });

                if (!response.ok) {
                    throw new Error("Falha no envio");
                }

                form.classList.add("hidden");
                successPanel.classList.add("visible");
                setStatus("ENVIADO");

            } catch (err) {
                setStatus("ERRO NO ENVIO");
                if (errorSubmit) {
                    submitError = "Não foi possível enviar agora. Tente novamente em instantes ou escreva diretamente para climate13.etecmcm@gmail.com.";
                    renderLanguage();
                    errorSubmit.style.opacity = "1";
                }
            } finally {
                submitBtn.disabled = false;
                renderLanguage();
            }
        });
    }

    if (newMessageBtn) {
        newMessageBtn.addEventListener("click", () => {
            form.reset();
            Object.values(fields).forEach((field) => clearError(field));

            successPanel.classList.remove("visible");
            form.classList.remove("hidden");
            setStatus("PRONTO");
            fields.nome.input.focus();
        });
    }

});
