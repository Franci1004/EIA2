namespace L02 {
    window.addEventListener("load", hndLoad);
    
    function hndLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.querySelector("body")?.addEventListener("click", logInfo);
        document.querySelector("body")?.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        let span: HTMLSpanElement = document.querySelector("span") as HTMLSpanElement;

        span.style.top = (_event.clientY +5).toString() + "px";
        span.style.left = (_event.clientY +5).toString() + "px";

        span.innerText = "x-position:" + (_event.clientX + 5) + ", y-position:" + (_event.clientY + 5);
        span.innerText+= ", target:" + (_event.target as HTMLElement).tagName;
        
    
    }

    function  logInfo(_event: Event): void {
        console.log(_event.type);
    }
}

/*
Aufgabe: <L02 Event>
Name: Franciska Egri
Matrikel: <275578>
Datum: <13.04.2024>
Quellen: <Zusammenarbeit mit Alita Maier>
*/ 
//# sourceMappingURL=event.js.map