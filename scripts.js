addEventListener('DOMContentLoaded', (event) => {
    let listElement = document.getElementById('link-list')

    if (listElement.children.length <= 4) {
        listElement.style.gridTemplateColumns = '1fr'
    }
})
