function validazione() {
    var nome = document.modulo.nome.value;
    var cognome = document.modulo.cognome.value;
    var email = document.modulo.email.value;
    var nascita = document.modulo.nascita.value;
    var sesso = document.modulo.sesso.options[document.modulo.sesso.selectedIndex].value;

    // Espressione regolare dell'email
    var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;

    //Validazione nome
    if ((nome == "") || (nome == "undefined") || isNaN) {
        alert("Il campo Nome è obbligatorio.");
        document.modulo.nome.focus(); //seleziona il campo nome
        return false;
    }
    //Validazione cognome
    else if ((cognome == "") || (cognome == "undefined") || isNaN) {
        alert("Il campo Cognome è obbligatorio.");
        document.modulo.cognome.focus();
        return false;
    }
    else if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
        alert("Inserire un indirizzo email corretto.");
        document.modulo.email.select();
        return false;
    }
    //Validazione data di nascita
    else if (document.modulo.nascita.value.substring(2, 3) != "/" ||
        document.modulo.nascita.value.substring(5, 6) != "/" ||
        isNaN(document.modulo.nascita.value.substring(0, 2)) ||
        isNaN(document.modulo.nascita.value.substring(3, 5)) ||
        isNaN(document.modulo.nascita.value.substring(6, 10))) {
        alert("Inserire nascita in formato gg/mm/aaaa");
        document.modulo.nascita.value = "";
        document.modulo.nascita.focus();
        return false;
    }
    else if (document.modulo.nascita.value.substring(0, 2) > 31) {
        alert("Impossibile utilizzare un valore superiore a 31 per i giorni");
        document.modulo.nascita.select();
        return false;
    }
    else if (document.modulo.nascita.value.substring(3, 5) > 12) {
        alert("Impossibile utilizzare un valore superiore a 12 per i mesi");
        document.modulo.nascita.value = "";
        document.modulo.nascita.focus();
        return false;
    }
    else if (document.modulo.nascita.value.substring(6, 10) < 1900) {
        alert("Impossibile utilizzare un valore inferiore a 1900 per l'anno");
        document.modulo.nascita.value = "";
        document.modulo.nascita.focus();
        return false;
    }
    //Validazione sesso
    else if ((sesso == "") || (sesso == "undefined")) {
        alert("Il campo Città è obbligatorio.");
        document.modulo.sesso.focus();
        return false;
    }
}