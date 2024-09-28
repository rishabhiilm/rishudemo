document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');
    const eventList = document.getElementById('event-list');

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const eventName = document.getElementById('event-name').value;
        const eventType = document.getElementById('event-type').value;
        const eventDate = document.getElementById('event-date').value;
        const eventDescription = document.getElementById('event-description').value;

        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
            <h3>${eventName} (${eventType})</h3>
            <p>Date: ${eventDate}</p>
            <p>Description: ${eventDescription}</p>
        `;

        eventList.appendChild(eventItem);

        eventForm.reset();
    });
});
