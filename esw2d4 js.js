// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
}

const amy = {
  name: "Amy",
  lastName: "Reed",
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!
let utenti = [0]
let ambassador = [marco]
let corrispondenza = false
let qt = 0
let sconto = 0.3



  for (let i=0; i< utenti.length; i++){
    if(i=0) {
      utenti.push(marco)
      alert(utenti[i], " è un ambassador")
    }
    if(i=1) {
      utenti.push(paul)
      alert(utenti[i], " non è un ambassador")
    }
    if(i=2) {
      utenti.push(amy)
      alert(utenti[i], " non è un ambassador")
    }
  }
  
  
  let comando = prompt("inserire nome utente")
    for (let i=0; i< utenti.length; i++){
      if (comando == utenti) {
        corrispondenza = true
        let a = i
      } else {
      alert("utente non trovato")
      }
    }
    if (corrispondenza == true) {
      alert("benvenuto ", utenti[a])
        let carrello = prompt("scegliere cosa acquistare tra 34, 5 o 2")
          for (let i=0; i< prices.length; i++){
            if (carrello == prices) {
              qt = prompt("selezionare quantità")
              carrello = carrello * qt
            }
          }
      if (utenti[a] == marco){
        carrello = carrello - (carrello * sconto)
      }
      if (carrello < 100) {
        alert("congratulazioni hai guadagnato la spedizione gratuita")
      } else {
        carrello = carrello + 50
      }
      alert("il tuo totale è ", carrello)
    
    } else { 
      alert("utente inesistente")
    }