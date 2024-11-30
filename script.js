function showDetails(course) {
    const details = {
        matematica: "Este curso abrange conceitos de álgebra, geometria e cálculo.",
        historia: "Curso que explora as principais civilizações e eventos históricos.",
        ciencias: "Aprenda sobre biologia, química e física através de experiências interativas."
    };

    document.getElementById('course-details').innerText = details[course] || 'Informações não disponíveis.';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});