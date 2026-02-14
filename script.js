function showOutput(outputId, lines){
    const output = document.getElementById(outputId);// busca contenedor de ID= X
    output.classList.add('active'); // activa el css
    output.innerHTML = ''; //limpiar el contenido anterior
    //recorrer el arreglo
    lines.forEach((lines,i) => {
        const div = document.createElement('div'); //crea div de manera dinamica
        div.className = 'log-line'; // asigno una clase css
        div.style.animationDelay =`${i * 0.1}s`; // animacion progresiva
        div.innerHTML =`<span class="chevron">=</span> ${lines}`; //inserta el texto dentro del div
        output.appendChild(div); // agrega un nuevo contenedor 
    });
}

function flashElement(el){ // recibe el elemento html
    el.classList.remove('highligth-flash'); //quita la clase
    void el.offsetWidth; // forzar reflow 
    el.classList.add('highligth-flash'); // agrega clases 

}

//1. getElementsBy

function runDemo1(){
    const titulo = document.getElementById("titulo");
    showOutput('output1', [titulo.innerText]);
    flashElement(titulo);
}

//2. getElementsByClassName

function runDemo2(){
    const parrafos = document.getElementsByClassName("descripcion");
    showOutput('output2', [parrafos[0].innerText]);
    flashElement(parrafos[0]);
}

 // 3. getElementsByTagName

function runDemo3(){
    const items = document.getElementById("targetArea").getElementsByTagName("li");
    showOutput('output3', [items[0].innerText]);
    flashElement(items[0]);
}

//4.  querySelector
function runDemo4(){
    const primerElemento = document.querySelector(".elemento");
    showOutput('output4', [primerElemento.innerText]);
    flashElement(primerElemento);
}

//5. querySelectorAll
function runDemo5(){
    const elementos = document.querySelectorAll(".elemento");
    const lines = [];
    elementos.forEach(el => {
        lines.push(el.innerText);
        flashElement(el);
    });

    showOutput('output5', lines)
}

