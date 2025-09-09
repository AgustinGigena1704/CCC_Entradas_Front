function generarPDF(){

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();


    doc.setFontSize(20);
    doc.text('Mi Documento con Imagen', 20, 20);
}



function getLastId(){
    id = 0;



    return id;
}


function getImagen(){
    return "";
}